import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--bg-primary)', borderTop: '1px solid rgba(0,212,255,0.1)',
      padding: '60px 0 32px',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700,
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: 16,
            }}>
              &lt;SN/&gt;
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: 340, marginBottom: 20 }}>
              ROS 2 Robotics Engineer &amp; Community Manager of KKR Robotics Community.
              Building autonomous systems and open-source robotics resources.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'GitHub', href: personalInfo.github },
                { label: 'LinkedIn', href: personalInfo.linkedin },
                { label: 'KKR Wiki', href: personalInfo.rosWiki },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener" style={{
                  padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(0,212,255,0.2)',
                  color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.target.style.borderColor = 'var(--accent-cyan)'; e.target.style.color = 'var(--accent-cyan)'; }}
                onMouseLeave={e => { e.target.style.borderColor = 'rgba(0,212,255,0.2)'; e.target.style.color = 'var(--text-secondary)'; }}
                >{l.label}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: 20, fontSize: '0.9rem', letterSpacing: 1, textTransform: 'uppercase' }}>Navigation</h4>
            {['home','about','skills','projects','experience','community','blog','education','contact'].map(id => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                display: 'block', background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-secondary)', fontSize: '0.88rem', padding: '4px 0',
                textTransform: 'capitalize', fontFamily: 'var(--font-main)', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >{id}</button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: 20, fontSize: '0.9rem', letterSpacing: 1, textTransform: 'uppercase' }}>Contact</h4>
            {[
              { label: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { label: ' ' + personalInfo.location, href: null },
              { label: '', href: 'https://github.com/sundaramn353-dot/KKR-Robotics-Community' },
            ].map(c => (
              c.href ? (
                <a key={c.label} href={c.href} style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', padding: '4px 0', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >{c.label}</a>
              ) : (
                <p key={c.label} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', padding: '4px 0', margin: 0 }}>{c.label}</p>
              )
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {year} Sundaram N. Built with React &amp; ❤️ for Robotics.
          </p>
        </div>
      </div>
    </footer>
  );
}
