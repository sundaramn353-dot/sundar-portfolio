import { education, certifications } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Education & Certifications</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Education */}
          <div>
            <h3 style={{ color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem' }}>
              🎓 Degree
            </h3>
            {education.map(edu => (
              <div key={edu.id} className="card" style={{ borderColor: 'rgba(0,212,255,0.2)', marginBottom: 20 }}>
                <div style={{
                  display: 'inline-block', padding: '6px 14px', borderRadius: 20, fontSize: '0.75rem',
                  fontWeight: 600, background: 'rgba(0,212,255,0.1)', color: 'var(--accent-cyan)',
                  border: '1px solid rgba(0,212,255,0.2)', marginBottom: 16, fontFamily: 'var(--font-mono)',
                }}>{edu.duration}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.4 }}>{edu.degree}</h3>
                <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: 4 }}>{edu.institution}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 12 }}>📍 {edu.location}</p>
                <div style={{ padding: '8px 16px', background: 'rgba(16,185,129,0.1)', borderRadius: 8, border: '1px solid rgba(16,185,129,0.2)', display: 'inline-block', marginBottom: 16 }}>
                  <span style={{ color: '#10b981', fontWeight: 700, fontSize: '0.9rem' }}>{edu.grade}</span>
                </div>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  {edu.highlights.map(h => (
                    <li key={h} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-cyan)', flexShrink: 0 }}>▸</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ color: 'var(--accent-purple)', fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem' }}>
              🏆 Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {certifications.map(cert => (
                <div key={cert.name} className="card" style={{ padding: '18px 24px', borderColor: 'rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                  }}>🏅</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: 4 }}>{cert.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cert.issuer}</div>
                  </div>
                  <div style={{
                    padding: '4px 10px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700,
                    background: 'rgba(124,58,237,0.1)', color: 'var(--accent-purple)',
                    border: '1px solid rgba(124,58,237,0.2)', whiteSpace: 'nowrap',
                  }}>{cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
