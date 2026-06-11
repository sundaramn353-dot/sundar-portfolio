import { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

const ROLES = personalInfo.roles;

// Custom Canvas Component for ROS HUD Simulation
function RoboticsHUD() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Node network points
    const nodes = [
      { name: '/odom', x: 0.2, y: 0.3, size: 6, pulse: 0, labelSide: 'top' },
      { name: '/laser_scan', x: 0.8, y: 0.25, size: 6, pulse: 0, labelSide: 'top' },
      { name: '/nav2_pose', x: 0.5, y: 0.5, size: 10, pulse: 0, labelSide: 'right', isCenter: true },
      { name: '/cmd_vel', x: 0.3, y: 0.75, size: 6, pulse: 0, labelSide: 'bottom' },
      { name: '/tf_tree', x: 0.75, y: 0.7, size: 6, pulse: 0, labelSide: 'bottom' },
    ];

    // Lidar points simulation
    const lidarPoints = [];
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 50 + Math.random() * 120;
      lidarPoints.push({ angle, dist, intensity: 0.3 + Math.random() * 0.7 });
    }

    let angleSweep = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // Draw Grid System
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw concentric radar circles
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      for (let r = 50; r <= 200; r += 50) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Radar sweep line
      angleSweep += 0.012;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angleSweep) * 220, cy + Math.sin(angleSweep) * 220);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Radar sweep trail gradient
      const trail = 40;
      for (let i = 0; i < trail; i++) {
        const alpha = (1 - i / trail) * 0.12;
        const curAngle = angleSweep - i * 0.005;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(curAngle) * 220, cy + Math.sin(curAngle) * 220);
        ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw simulated lidar points
      lidarPoints.forEach((p) => {
        // Find if sweep is close to this point
        const diff = Math.abs((p.angle - angleSweep) % (Math.PI * 2));
        let brightness = 0.15;
        if (diff < 0.25 || diff > Math.PI * 2 - 0.25) {
          brightness = 0.95;
        }

        const px = cx + Math.cos(p.angle) * p.dist;
        const py = cy + Math.sin(p.angle) * p.dist;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${brightness * p.intensity})`;
        ctx.fill();
        if (brightness > 0.8) {
          ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
          ctx.stroke();
          ctx.shadowBlur = 0; // reset
        }
      });

      // Draw connection lines between nodes
      ctx.strokeStyle = 'rgba(157, 78, 221, 0.18)';
      ctx.lineWidth = 1.5;
      const centerNode = nodes.find(n => n.isCenter);
      nodes.forEach(node => {
        if (!node.isCenter && centerNode) {
          ctx.beginPath();
          ctx.moveTo(cx * 2 * node.x, height * node.y);
          ctx.lineTo(cx * 2 * centerNode.x, height * centerNode.y);
          ctx.stroke();
        }
      });

      // Draw floating nodes & text label
      nodes.forEach((node) => {
        node.pulse += 0.04;
        const pulseVal = Math.sin(node.pulse) * 3;
        const nx = cx * 2 * node.x;
        const ny = height * node.y;

        // Outer pulse circle
        ctx.beginPath();
        ctx.arc(nx, ny, node.size + pulseVal + 3, 0, Math.PI * 2);
        ctx.strokeStyle = node.isCenter ? 'rgba(0, 240, 255, 0.25)' : 'rgba(157, 78, 221, 0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node center
        ctx.beginPath();
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.isCenter ? 'var(--accent-cyan)' : 'var(--accent-purple)';
        ctx.shadowColor = node.isCenter ? 'rgba(0, 240, 255, 0.8)' : 'rgba(157, 78, 221, 0.8)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow

        // Label details
        ctx.fillStyle = 'rgba(243, 244, 246, 0.85)';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        
        let lyOffset = 16;
        if (node.labelSide === 'top') lyOffset = -14;
        if (node.labelSide === 'bottom') lyOffset = 20;

        ctx.fillText(node.name, nx, ny + lyOffset);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse at 10% 20%, rgba(0,240,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 90% 80%, rgba(157,78,221,0.08) 0%, transparent 60%), var(--bg-primary)',
    }}>
      {/* HUD Animation Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <RoboticsHUD />
      </div>

      {/* Cyber Grid Pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.02,
        backgroundImage: 'linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 48, alignItems: 'center' }} className="grid-2">
          
          {/* Left Block - Hero Pitch */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span className="section-tag" style={{ margin: 0 }}>
                🤖 [ROS 2 NODE STARTED]
              </span>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'pulse-glow 1.5s infinite' }} />
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>SYS_STATUS: ACTIVE</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
              fontWeight: 900, lineHeight: 1.1,
              marginBottom: 16,
              fontFamily: 'var(--font-display)',
            }}>
              <span style={{ color: 'var(--text-primary)' }}>Meenatchi</span><br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-cyan) 0%, #a855f7 50%, var(--accent-green) 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-shift 6s ease infinite',
              }}>Sundaram N</span>
            </h1>

            <div style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.35rem)', fontWeight: 500,
              color: 'var(--text-secondary)', marginBottom: 28,
              minHeight: 32, fontFamily: 'var(--font-mono)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ color: 'var(--accent-cyan)' }}>guest@ros2:~$</span>
              <span>{displayed}</span>
              <span style={{ width: 2, height: 20, background: 'var(--accent-cyan)', display: 'inline-block', animation: 'pulse-glow 0.8s infinite' }} />
            </div>

            <p style={{
              fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75,
              maxWidth: 620, marginBottom: 40,
            }}>
              {personalInfo.summary}
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">
                🚀 Explore Projects
              </a>
              <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-outline">
                📬 Contact Me
              </a>
              <a href="./resume.pdf" target="_blank" rel="noopener" className="btn btn-outline" style={{ borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)' }}>
                📄 Download Resume
              </a>
            </div>
          </div>

          {/* Right Block - Cyber Dashboard HUD */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="float">
            <div className="card" style={{
              background: 'rgba(5, 10, 20, 0.75)',
              borderColor: 'rgba(0, 240, 255, 0.15)',
              padding: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0, 240, 255, 0.15)', paddingBottom: 10, marginBottom: 12 }}>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>📡 TELEMETRY INTERFACE</span>
                <span style={{ color: 'var(--accent-amber)' }}>v3.1.2</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>ROS_DISTRO:</span>
                  <span style={{ color: 'var(--text-primary)' }}>JAZZY ELUSCIOUS</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>LOCALIZATION:</span>
                  <span style={{ color: 'var(--accent-green)' }}>AMCL [LOCK_OK]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>SLAM_MAP:</span>
                  <span style={{ color: 'var(--accent-green)' }}>CARTOGRAPHER</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>LIDAR_STATE:</span>
                  <span style={{ color: 'var(--text-primary)' }}>SCANNING [5.5 Hz]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>NAV2_GOAL:</span>
                  <span style={{ color: 'var(--accent-cyan)' }}>REACHED</span>
                </div>
              </div>

              <div style={{
                marginTop: 18,
                padding: '8px 12px',
                background: 'rgba(0, 240, 255, 0.05)',
                border: '1px solid rgba(0, 240, 255, 0.1)',
                borderRadius: 8,
                fontSize: '0.72rem',
                lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--accent-cyan)' }}>&gt;_ info_log:</span> custom differential drive model URDF compiled successfully. Nav2 costmaps initialized.
              </div>
            </div>

            {/* Micro Stats Quick view */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="card" style={{ padding: '16px 20px', textAlign: 'center', borderColor: 'rgba(157, 78, 221, 0.15)' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-display)' }}>4</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 4 }}>ROS 2 Projects</div>
              </div>
              <div className="card" style={{ padding: '16px 20px', textAlign: 'center', borderColor: 'rgba(16, 185, 129, 0.15)' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-purple)', fontFamily: 'var(--font-display)' }}>5+</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 4 }}>Git Repositories</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        animation: 'float 2.5s ease-in-out infinite',
        zIndex: 10,
      }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: 1.5, fontFamily: 'var(--font-mono)' }}>SCROLL</span>
        <div style={{ width: 20, height: 32, border: '1.5px solid rgba(0,240,255,0.25)', borderRadius: 10, display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
          <div style={{ width: 3, height: 6, background: 'var(--accent-cyan)', borderRadius: 1.5, animation: 'float 1.5s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
