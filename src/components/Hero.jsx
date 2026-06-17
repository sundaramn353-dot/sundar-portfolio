import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, RobotIcon } from './Icons';

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
      { name: '/odom', x: 0.15, y: 0.3, size: 5, pulse: 0, labelSide: 'top' },
      { name: '/laser_scan', x: 0.85, y: 0.25, size: 5, pulse: 0, labelSide: 'top' },
      { name: '/nav2_pose', x: 0.5, y: 0.5, size: 8, pulse: 0, labelSide: 'right', isCenter: true },
      { name: '/cmd_vel', x: 0.2, y: 0.75, size: 5, pulse: 0, labelSide: 'bottom' },
      { name: '/tf_tree', x: 0.8, y: 0.7, size: 5, pulse: 0, labelSide: 'bottom' },
    ];

    const lidarPoints = [];
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 100;
      lidarPoints.push({ angle, dist, intensity: 0.4 + Math.random() * 0.6 });
    }

    let angleSweep = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // Draw Grid System
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 50;
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
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.06)';
      for (let r = 60; r <= 180; r += 60) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Radar sweep line
      angleSweep += 0.01;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angleSweep) * 200, cy + Math.sin(angleSweep) * 200);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw simulated lidar points
      lidarPoints.forEach((p) => {
        const diff = Math.abs((p.angle - angleSweep) % (Math.PI * 2));
        let brightness = 0.15;
        if (diff < 0.3 || diff > Math.PI * 2 - 0.3) {
          brightness = 0.85;
        }

        const px = cx + Math.cos(p.angle) * p.dist;
        const py = cy + Math.sin(p.angle) * p.dist;

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${brightness * p.intensity})`;
        ctx.fill();
      });

      // Draw connection lines
      ctx.strokeStyle = 'rgba(157, 78, 221, 0.12)';
      ctx.lineWidth = 1;
      const centerNode = nodes.find(n => n.isCenter);
      nodes.forEach(node => {
        if (!node.isCenter && centerNode) {
          ctx.beginPath();
          ctx.moveTo(cx * 2 * node.x, height * node.y);
          ctx.lineTo(cx * 2 * centerNode.x, height * centerNode.y);
          ctx.stroke();
        }
      });

      // Draw nodes
      nodes.forEach((node) => {
        node.pulse += 0.04;
        const pulseVal = Math.sin(node.pulse) * 2;
        const nx = cx * 2 * node.x;
        const ny = height * node.y;

        ctx.beginPath();
        ctx.arc(nx, ny, node.size + pulseVal + 2, 0, Math.PI * 2);
        ctx.strokeStyle = node.isCenter ? 'rgba(0, 240, 255, 0.2)' : 'rgba(157, 78, 221, 0.2)';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.isCenter ? '#00f0ff' : '#9d4edd';
        ctx.fill();

        ctx.fillStyle = 'rgba(243, 244, 246, 0.7)';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        
        let lyOffset = 14;
        if (node.labelSide === 'top') lyOffset = -12;
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
      className="absolute inset-0 w-full h-full block z-0 pointer-events-none"
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  const roles = personalInfo.roles;

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 50);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-cyber-bg pt-20">
      {/* Background HUD Canvas */}
      <RoboticsHUD />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(0,240,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-1" />

      {/* Radial ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,240,255,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(157,78,221,0.06)_0%,transparent_50%)] pointer-events-none z-1" />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Bio Pitch */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border border-cyber-blue/30 rounded-full bg-cyber-blue/5 text-cyber-blue shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                🤖 [ROS 2 CORE INITIALIZED]
              </span>
              <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-[10px] font-mono text-gray-500">PING: 0.8ms</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 text-white font-display leading-[1.05]">
              Meenatchi<br />
              <span className="bg-gradient-to-r from-cyber-blue via-[#a855f7] to-[#10b981] bg-[size:200%_auto] text-transparent bg-clip-text animate-[gradient-shift_6s_ease_infinite]">
                Sundaram
              </span>
            </h1>

            <div className="text-lg sm:text-2xl font-mono text-gray-400 mb-6 flex items-center min-h-[36px]">
              <span className="text-cyber-blue mr-2">sundar@ros2:~$</span>
              <span>{displayed}</span>
              <span className="w-1.5 h-6 bg-cyber-blue inline-block animate-pulse ml-1" />
            </div>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-sans">
              Building autonomous robotic systems using ROS 2, Nav2, SLAM, MoveIt 2, Docker, Linux, and modern robotics software architecture. Specially tuned for production-level reliability and real-time DDS middleware optimizations.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} 
                className="px-6 py-3 font-semibold text-sm rounded bg-gradient-to-r from-cyber-blue to-cyber-purple text-cyber-bg shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition duration-300"
              >
                View Projects
              </a>
              <a 
                href="resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 font-semibold text-sm rounded border border-cyber-purple/40 text-cyber-purple hover:bg-cyber-purple/5 hover:border-cyber-purple transition duration-300"
              >
                Download Resume
              </a>
              <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-gray-800 text-gray-400 hover:text-cyber-blue hover:border-cyber-blue rounded transition duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-gray-800 text-gray-400 hover:text-cyber-blue hover:border-cyber-blue rounded transition duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Cyber Profile HUD Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              
              {/* Spinning outer scanner rings */}
              <div className="absolute inset-[-15px] border border-dashed border-cyber-blue/20 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-[-5px] border border-cyber-purple/10 rounded-full animate-[spin_20s_linear_infinite_reverse] pointer-events-none" />

              {/* Angle scale ticks */}
              <div className="absolute inset-0 rounded-full border border-cyber-blue/30 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-cyber-blue" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-cyber-blue" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-cyber-blue" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-cyber-blue" />
              </div>

              {/* Interactive scanning grid */}
              <div className="absolute inset-3 rounded-full overflow-hidden border border-cyber-blue/30 bg-white shadow-[0_0_40px_rgba(0,240,255,0.1)]">
                
                {/* Profile Photo */}
                <img 
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Meenatchi Sundaram — ROS 2 Robotics Engineer" 
                  className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400";
                  }}

                />

                {/* Vignette to blend white background into dark theme */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_bottom,rgba(3,7,18,0.5)_0%,transparent_65%)] pointer-events-none" />

                {/* Scanline overlay — subtle tech feel */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.08)_50%)] bg-[size:100%_4px] pointer-events-none opacity-30" />
              </div>

              {/* Floating diagnostic overlay boxes */}
              <div className="absolute -top-4 -right-4 bg-cyber-card/90 border border-cyber-blue/30 px-3 py-1.5 rounded font-mono text-[9px] text-cyber-blue shadow-lg">
                <span className="block text-gray-500">TF_LINK</span>
                <span>/base_link ➔ /odom</span>
              </div>

              <div className="absolute -bottom-2 -left-4 bg-cyber-card/90 border border-cyber-purple/30 px-3 py-1.5 rounded font-mono text-[9px] text-cyber-purple shadow-lg">
                <span className="block text-gray-500">ESTIMATOR</span>
                <span>EKF: LOCK [100Hz]</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
