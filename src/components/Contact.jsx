import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const links = [
    { icon: '📧', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#00d4ff' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/sundaram-n', href: personalInfo.linkedin, color: '#7c3aed' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/sundaramn353-dot', href: personalInfo.github, color: '#10b981' },
    { icon: '📍', label: 'Location', value: personalInfo.location, href: null, color: '#f59e0b' },
    { icon: '📱', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#ef4444' },
    { icon: '🌐', label: 'KKR Robotics Wiki', value: 'KKR Robotics Community', href: personalInfo.rosWiki, color: '#06b6d4' },
  ];

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Build Together</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Open to robotics collaborations, research opportunities, and community partnerships
          </p>
        </div>

        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {links.map(l => (
              <div key={l.label} className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16, borderColor: l.color + '22' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0, fontSize: '1.3rem',
                  background: l.color + '12', border: `1px solid ${l.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{l.icon}</div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 3, textTransform: 'uppercase', letterSpacing: 1 }}>{l.label}</div>
                  {l.href ? (
                    <a href={l.href} target="_blank" rel="noopener" style={{ color: l.color, fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none', wordBreak: 'break-all' }}>{l.value}</a>
                  ) : (
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.88rem' }}>{l.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '16px 40px' }}>
              📬 Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
