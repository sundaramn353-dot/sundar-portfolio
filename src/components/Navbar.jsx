import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '16px 0',
      background: scrolled ? 'rgba(5,10,20,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => scrollTo('home')} style={{
          fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700,
          background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          border: 'none', cursor: 'pointer', letterSpacing: '2px',
        }}>
          &lt;MS/&gt;
        </button>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} className="nav-links">
          {navLinks.map(link => (
            <button key={link.href} onClick={() => scrollTo(link.href)} style={{
              padding: '8px 16px', border: 'none', cursor: 'pointer',
              borderRadius: '6px', fontSize: '0.85rem', fontWeight: 500,
              fontFamily: 'var(--font-main)',
              color: active === link.href ? '#00d4ff' : 'var(--text-secondary)',
              background: active === link.href ? 'rgba(0,212,255,0.1)' : 'transparent',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#00d4ff'}
            onMouseLeave={e => e.target.style.color = active === link.href ? '#00d4ff' : 'var(--text-secondary)'}
            >
              {link.name}
            </button>
          ))}
        </div>

        <a href="mailto:sundaramn353@gmail.com" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}
