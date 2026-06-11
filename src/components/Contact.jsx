import { personalInfo } from '../data/portfolioData';
import {
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  MapPinIcon,
  PhoneIcon,
  BookIcon
} from './Icons';

export default function Contact() {
  const links = [
    { icon: <MailIcon size={20} color="var(--accent-cyan)" />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'var(--accent-cyan)' },
    { icon: <LinkedinIcon size={20} color="var(--accent-purple)" />, label: 'LinkedIn', value: 'linkedin.com/in/sundaram-n', href: personalInfo.linkedin, color: 'var(--accent-purple)' },
    { icon: <GithubIcon size={20} color="var(--text-primary)" />, label: 'GitHub', value: 'github.com/sundaramn353-dot', href: personalInfo.github, color: 'var(--text-primary)' },
    { icon: <MapPinIcon size={20} color="var(--accent-amber)" />, label: 'Location', value: personalInfo.location, href: null, color: 'var(--accent-amber)' },
    { icon: <PhoneIcon size={20} color="var(--accent-green)" />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'var(--accent-green)' },
    { icon: <BookIcon size={20} color="var(--accent-cyan)" />, label: 'KKR Wiki', value: 'KKR Robotics Community', href: personalInfo.rosWiki, color: 'var(--accent-cyan)' },
  ];

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)'
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Build Together</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Open to robotics collaborations, research opportunities, and community partnerships.
          </p>
        </div>

        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-2">
            {links.map(l => (
              <div
                key={l.label}
                className="card"
                style={{
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  borderColor: `${l.color}15`,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${l.color}55`;
                  e.currentTarget.style.boxShadow = `0 8px 25px ${l.color}12`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${l.color}15`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                  background: `${l.color}12`, border: `1px solid ${l.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 12px ${l.color}10`,
                }}>{l.icon}</div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'var(--font-mono)' }}>{l.label}</div>
                  {l.href ? (
                    <a href={l.href} target="_blank" rel="noopener" style={{ color: l.color, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', wordBreak: 'break-all', fontFamily: 'var(--font-mono)' }}>{l.value}</a>
                  ) : (
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>{l.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '16px 40px', boxShadow: '0 0 25px rgba(0, 240, 255, 0.25)', gap: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <MailIcon size={20} /> Send Me an Email Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
