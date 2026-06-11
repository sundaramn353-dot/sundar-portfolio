import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '14px 0' : '22px 0',
      background: scrolled ? 'rgba(3, 7, 18, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 240, 255, 0.12)' : '1px solid transparent',
      boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 240, 255, 0.05)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Glowing cyber logo */}
        <button onClick={() => scrollTo('home')} style={{
          fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800,
          background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          border: 'none', cursor: 'pointer', letterSpacing: '2px',
          textShadow: '0 0 20px rgba(0, 240, 255, 0.1)',
        }}>
          &lt;MS/&gt;
        </button>

        {/* Links */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }} className="nav-links">
          {navLinks.map(link => {
            const isActive = active === link.href;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  padding: '8px 16px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: 0.5,
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(0, 240, 255, 0.15)' : 'transparent'}`,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--accent-cyan)';
                    e.currentTarget.style.background = 'rgba(0, 240, 255, 0.03)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.name.toUpperCase()}
              </button>
            );
          })}
        </div>

        <a href="mailto:sundaramn353@gmail.com" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', letterSpacing: 0.5 }}>
          GET IN TOUCH
        </a>
      </div>
    </nav>
  );
}
