import { personalInfo } from '../data/portfolioData';
import { MapPinIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(0, 240, 255, 0.12)',
      padding: '72px 0 40px',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="grid-3">

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800,
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: 18, letterSpacing: '2px',
              textShadow: '0 0 20px rgba(0, 240, 255, 0.1)',
            }}>
              &lt;MS/&gt;
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.8, maxWidth: 360, marginBottom: 24 }}>
              ROS 2 Robotics Engineer &amp; Community Manager.
              Building autonomous mobile robot software and sharing open-source troubleshooting knowledge.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'GitHub', href: personalInfo.github, color: 'var(--accent-cyan)' },
                { label: 'LinkedIn', href: personalInfo.linkedin, color: 'var(--accent-purple)' },
                { label: 'KKR Wiki', href: personalInfo.rosWiki, color: 'var(--accent-cyan)' },
              ].map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  style={{
                    padding: '8px 16px',
                    borderRadius: 8,
                    border: `1px solid rgba(255, 255, 255, 0.08)`,
                    background: 'rgba(255, 255, 255, 0.02)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = l.color;
                    e.currentTarget.style.color = l.color;
                    e.currentTarget.style.background = `${l.color}08`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: 800, marginBottom: 20, fontSize: '0.85rem', letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>Navigation</h4>
            {['home', 'about', 'skills', 'projects', 'experience', 'community', 'blog', 'contact'].map(id => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  display: 'block',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  padding: '6px 0',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: 0.5,
                  transition: 'all 0.2s',
                  textAlign: 'left',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {id}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: 800, marginBottom: 20, fontSize: '0.85rem', letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>Contact</h4>
            {[
              { label: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { label: personalInfo.location, href: null },
            ].map(c => (
              c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  style={{
                    display: 'block',
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    padding: '6px 0',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    fontFamily: 'var(--font-mono)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {c.label}
                </a>
              ) : (
                <p key={c.label} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', padding: '6px 0', margin: 0, fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <MapPinIcon size={14} color="var(--text-secondary)" /> {c.label}
                </p>
              )
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
            © {year} Meenatchi Sundaram N. All rights reserved. Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}
