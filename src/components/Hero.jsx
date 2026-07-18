import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

/* ─── Enhanced ROS HUD Canvas ───────────────────────────────────────────── */
function RoboticsHUD() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    const nodes = [
      { name: '/odom',       x: 0.12, y: 0.28, size: 4, pulse: 0, side: 'top' },
      { name: '/laser_scan', x: 0.88, y: 0.22, size: 4, pulse: 1, side: 'top' },
      { name: '/nav2_pose',  x: 0.50, y: 0.50, size: 7, pulse: 2, side: 'right', isCenter: true },
      { name: '/cmd_vel',    x: 0.18, y: 0.76, size: 4, pulse: 3, side: 'bottom' },
      { name: '/tf_tree',    x: 0.82, y: 0.72, size: 4, pulse: 4, side: 'bottom' },
      { name: '/map',        x: 0.50, y: 0.15, size: 3, pulse: 5, side: 'top' },
    ];

    const lidar = Array.from({ length: 55 }, () => ({
      angle: Math.random() * Math.PI * 2,
      dist:  55 + Math.random() * 115,
      int:   0.35 + Math.random() * 0.65,
    }));

    let sweep = 0, tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      tick++;

      // Fine dot grid
      ctx.fillStyle = 'rgba(0,229,255,0.04)';
      for (let x = 0; x < w; x += 40)
        for (let y = 0; y < h; y += 40)
          { ctx.beginPath(); ctx.arc(x, y, 0.8, 0, Math.PI * 2); ctx.fill(); }

      // Radar rings — 3 with varying opacity
      [50, 100, 160, 220].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,229,255,${0.04 + i * 0.012})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Radar sweep with fading trail
      sweep += 0.008;
      const grad = ctx.createConicalGradient
        ? null
        : null;
      for (let t = 0; t < 18; t++) {
        const a = sweep - t * 0.018;
        const alpha = (1 - t / 18) * 0.12;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * 240, cy + Math.sin(a) * 240);
        ctx.strokeStyle = `rgba(0,229,255,${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // LiDAR points
      lidar.forEach(p => {
        const diff = ((p.angle - sweep) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const bright = diff < 0.25 || diff > Math.PI * 2 - 0.25 ? 0.9 : 0.12;
        const px = cx + Math.cos(p.angle) * p.dist;
        const py = cy + Math.sin(p.angle) * p.dist;
        ctx.beginPath();
        ctx.arc(px, py, bright > 0.5 ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,255,${bright * p.int})`;
        ctx.fill();
      });

      // Node connections
      const center = nodes.find(n => n.isCenter);
      nodes.forEach(n => {
        if (!n.isCenter && center) {
          ctx.beginPath();
          ctx.moveTo(w * n.x, h * n.y);
          ctx.lineTo(w * center.x, h * center.y);
          ctx.strokeStyle = 'rgba(124,58,237,0.1)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });

      // Nodes
      nodes.forEach(n => {
        const pv = Math.sin(tick * 0.04 + n.pulse) * 2;
        const nx = w * n.x, ny = h * n.y;
        const col = n.isCenter ? '0,229,255' : '124,58,237';

        ctx.beginPath();
        ctx.arc(nx, ny, n.size + pv + 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${col},0.15)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nx, ny, n.size, 0, Math.PI * 2);
        ctx.fillStyle = n.isCenter ? '#00e5ff' : '#7c3aed';
        ctx.fill();

        ctx.fillStyle = 'rgba(232,237,245,0.65)';
        ctx.font = '8px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(n.name, nx, ny + (n.side === 'top' ? -13 : 15));
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
}

/* ─── Hexagonal Profile Frame ───────────────────────────────────────────── */
function HexProfile() {
  return (
    <div className="relative flex items-center justify-center w-72 h-80 sm:w-88 sm:h-96">

      {/* Outer spinning hex ring */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ animation: 'hex-rotate 25s linear infinite' }}
      >
        <svg viewBox="0 0 320 360" className="w-full h-full" fill="none">
          <polygon
            points="160,8 308,88 308,272 160,352 12,272 12,88"
            stroke="rgba(0,229,255,0.18)"
            strokeWidth="1"
            strokeDasharray="6 4"
          />
        </svg>
      </div>

      {/* Middle hex ring (reverse spin) */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: '14px',
          animation: 'hex-rotate 18s linear infinite reverse',
        }}
      >
        <svg viewBox="0 0 292 332" className="w-full h-full" fill="none">
          <polygon
            points="146,6 286,80 286,252 146,326 6,252 6,80"
            stroke="rgba(124,58,237,0.22)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Corner tick marks on hex */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 320 360"
        fill="none"
      >
        {/* Top tick */}
        <line x1="160" y1="0" x2="160" y2="18" stroke="#00e5ff" strokeWidth="2" opacity="0.7" />
        {/* Bottom tick */}
        <line x1="160" y1="342" x2="160" y2="360" stroke="#00e5ff" strokeWidth="2" opacity="0.7" />
        {/* Glow dots at vertices */}
        {[
          [160, 8], [308, 88], [308, 272], [160, 352], [12, 272], [12, 88]
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#00e5ff" opacity="0.6" />
        ))}
      </svg>

      {/* The actual image — hexagonal clip */}
      <div
        className="relative overflow-hidden"
        style={{
          width: '78%',
          height: '78%',
          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
          boxShadow: '0 0 40px rgba(0,229,255,0.2), 0 0 80px rgba(124,58,237,0.15)',
        }}
      >
        {/* Photo */}
        <img
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt="Meenatchi Sundaram — ROS 2 Robotics Engineer"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'brightness(0.92) contrast(1.05) saturate(0.9)' }}
          onError={e => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=500';
          }}
        />

        {/* Glitch layer 1 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}profile.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            filter: 'brightness(0.92) contrast(1.05) saturate(0.9)',
            mixBlendMode: 'screen',
            opacity: 0,
            animation: 'glitch-1 6s steps(1) infinite',
            color: 'rgba(0,229,255,0.4)',
          }}
        />

        {/* Scanlines overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)',
          }}
        />

        {/* Cyan tint vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 65%), radial-gradient(ellipse at 50% 100%, rgba(2,4,9,0.55) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Floating HUD data badges */}
      <div
        className="absolute -top-2 -right-2 font-mono text-[9px] border rounded px-2 py-1 pointer-events-none"
        style={{
          background: 'rgba(2,4,9,0.9)',
          borderColor: 'rgba(0,229,255,0.3)',
          color: '#00e5ff',
          backdropFilter: 'blur(8px)',
          animation: 'corner-pulse 3s ease-in-out infinite',
        }}
      >
        <span className="block text-[8px] opacity-50">TF_LINK</span>
        /base_link → /odom
      </div>

      <div
        className="absolute -bottom-2 -left-2 font-mono text-[9px] border rounded px-2 py-1 pointer-events-none"
        style={{
          background: 'rgba(2,4,9,0.9)',
          borderColor: 'rgba(124,58,237,0.35)',
          color: '#a855f7',
          backdropFilter: 'blur(8px)',
          animation: 'corner-pulse 3s ease-in-out 1.5s infinite',
        }}
      >
        <span className="block text-[8px] opacity-50">ESTIMATOR</span>
        EKF: LOCK [100Hz]
      </div>

      <div
        className="absolute top-1/2 -right-6 -translate-y-1/2 font-mono text-[8px] border rounded px-2 py-1 pointer-events-none"
        style={{
          background: 'rgba(2,4,9,0.9)',
          borderColor: 'rgba(0,255,157,0.3)',
          color: '#00ff9d',
          backdropFilter: 'blur(8px)',
          writingMode: 'vertical-rl',
          letterSpacing: '0.1em',
        }}
      >
        NAV2 ▶ ACTIVE
      </div>
    </div>
  );
}

/* ─── Main Hero ─────────────────────────────────────────────────────────── */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed]  = useState('');
  const [typing, setTyping]         = useState(true);
  const roles = personalInfo.roles;

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 48);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #020409 0%, #06040f 50%, #020409 100%)' }}
    >
      {/* HUD Canvas */}
      <RoboticsHUD />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,229,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient radial glows */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background: `
            radial-gradient(ellipse 55% 55% at 15% 25%, rgba(0,229,255,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 45% 45% at 85% 75%, rgba(124,58,237,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 30% 30% at 75% 15%, rgba(0,255,157,0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Horizontal accent line */}
      <div
        className="absolute left-0 right-0 pointer-events-none z-1"
        style={{
          top: '50%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.06) 30%, rgba(0,229,255,0.06) 70%, transparent 100%)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* ── LEFT: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Status badge */}
            <div className="flex items-center gap-3 mb-7">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[11px] tracking-widest"
                style={{
                  border: '1px solid rgba(0,229,255,0.25)',
                  background: 'rgba(0,229,255,0.04)',
                  color: '#00e5ff',
                  borderRadius: '2px',
                  position: 'relative',
                }}
              >
                {/* Corner ticks */}
                <span style={{ position:'absolute', top:'-1px', left:'-1px', width:5, height:5, borderTop:'1px solid #00e5ff', borderLeft:'1px solid #00e5ff' }} />
                <span style={{ position:'absolute', bottom:'-1px', right:'-1px', width:5, height:5, borderBottom:'1px solid #00e5ff', borderRight:'1px solid #00e5ff' }} />
                🤖 ROS 2 CORE INITIALIZED
              </div>
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#00ff9d', boxShadow: '0 0 10px #00ff9d' }}
              />
              <span className="text-[10px] font-mono" style={{ color: 'rgba(74,85,104,1)' }}>PING: 0.8ms</span>
            </div>

            {/* Name */}
            <h1
              className="font-black tracking-tight mb-3 leading-[1.02]"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
                color: '#e8edf5',
              }}
            >
              Meenatchi
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #00e5ff 0%, #a855f7 50%, #00ff9d 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradient-shift 5s ease infinite',
                }}
              >
                Sundaram
              </span>
            </h1>

            {/* Typewriter */}
            <div
              className="flex items-center mb-6"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 'clamp(0.85rem, 2vw, 1.15rem)',
                minHeight: '34px',
                color: '#4a5568',
              }}
            >
              <span style={{ color: '#00e5ff', marginRight: 8 }}>sundar@ros2:~$</span>
              <span style={{ color: '#8892a4' }}>{displayed}</span>
              <span
                className="inline-block animate-pulse ml-1"
                style={{ width: 6, height: 20, background: '#00e5ff', borderRadius: 1 }}
              />
            </div>

            {/* Description */}
            <p
              className="mb-8 leading-relaxed"
              style={{
                color: '#8892a4',
                fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                maxWidth: '520px',
                lineHeight: 1.85,
              }}
            >
              Building autonomous robotic systems with{' '}
              <span style={{ color: '#00e5ff' }}>ROS 2</span>,{' '}
              <span style={{ color: '#a855f7' }}>Nav2</span>, SLAM, MoveIt 2, Docker &amp; Linux.
              Tuned for production-level reliability and real-time DDS middleware.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn btn-primary"
                style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', letterSpacing: '0.05em', borderRadius: '4px' }}
              >
                View Projects →
              </a>
              <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', letterSpacing: '0.05em', borderRadius: '4px' }}
              >
                Download Resume
              </a>
              <div className="flex gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', color: '#4a5568' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(0,229,255,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#4a5568'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', color: '#4a5568' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(0,229,255,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#4a5568'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>

            {/* Live stats strip */}
            <div className="flex flex-wrap gap-5">
              {[
                { label: 'ROS 2 Projects', val: '8+', col: '#00e5ff' },
                { label: 'Simulations',    val: '10+', col: '#a855f7' },
                { label: 'Robots Built',   val: '5',   col: '#00ff9d' },
              ].map(s => (
                <div key={s.label} className="flex items-center gap-2">
                  <span style={{ color: s.col, fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '1.3rem' }}>{s.val}</span>
                  <span style={{ color: '#4a5568', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', lineHeight: 1.3 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Hex Profile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <HexProfile />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
