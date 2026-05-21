import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const ROLES = personalInfo.roles;

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
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
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
      background: 'radial-gradient(ellipse at 20% 50%, rgba(0,212,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.08) 0%, transparent 60%), var(--bg-primary)',
    }}>
      {/* Animated grid background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Floating orbs */}
      <div style={{
        position: 'absolute', top: '15%', right: '10%',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: 200, height: 200, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, animation: 'fadeInUp 0.6s ease' }}>
            <div style={{ width: 40, height: 2, background: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.85rem', letterSpacing: 3 }}>
              HELLO, WORLD
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900, lineHeight: 1.1,
            marginBottom: 16, animation: 'fadeInUp 0.6s ease 0.1s both',
          }}>
            <span style={{ color: 'var(--text-primary)' }}>Sundaram N</span><br />
            <span style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #10b981 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 4s ease infinite',
            }}>ROS 2 Engineer</span>
          </h1>

          <div style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 500,
            color: 'var(--text-secondary)', marginBottom: 24,
            minHeight: 40, fontFamily: 'var(--font-mono)',
            animation: 'fadeInUp 0.6s ease 0.2s both',
          }}>
            <span style={{ color: 'var(--accent-cyan)' }}>{'> '}</span>
            {displayed}
            <span style={{ color: 'var(--accent-cyan)', animation: 'pulse-glow 1s infinite' }}>|</span>
          </div>

          <p style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8,
            maxWidth: 640, marginBottom: 40, animation: 'fadeInUp 0.6s ease 0.3s both',
          }}>
            {personalInfo.summary}
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fadeInUp 0.6s ease 0.4s both' }}>
            <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary">
              🚀 View Projects
            </a>
            <a href="mailto:meenatchisundaram2003@gmail.com" className="btn btn-outline">
              📬 Get In Touch
            </a>
            <a href="./resume.pdf" target="_blank" rel="noopener" className="btn btn-outline" style={{ borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)' }}>
              📄 Resume
            </a>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 40, marginTop: 60, flexWrap: 'wrap', animation: 'fadeInUp 0.6s ease 0.5s both' }}>
            {[
              { val: '2', label: 'ROS 2 Projects' },
              { val: '1', label: 'Wiki Published' },
              { val: '1', label: 'Blog Article' },
              { val: '5+', label: 'GitHub Repos' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--accent-cyan)' }}>{s.val}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: 2 }}>SCROLL</span>
        <div style={{ width: 24, height: 40, border: '2px solid rgba(0,212,255,0.3)', borderRadius: 12, display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <div style={{ width: 4, height: 8, background: 'var(--accent-cyan)', borderRadius: 2, animation: 'float 1.5s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
