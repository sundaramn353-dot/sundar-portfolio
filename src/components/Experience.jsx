import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Professional Journey</h2>
        </div>

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple))',
          }} />

          {experience.map((exp, i) => (
            <div key={exp.id} style={{ paddingLeft: 64, marginBottom: 48, position: 'relative' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: 10, top: 4, width: 20, height: 20, borderRadius: '50%',
                background: i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                border: '3px solid var(--bg-secondary)',
                boxShadow: `0 0 16px ${i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)'}`,
              }} />

              <div className="card" style={{ borderColor: i === 0 ? 'rgba(0,212,255,0.2)' : 'rgba(124,58,237,0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{exp.role}</h3>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ color: i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)', fontWeight: 600 }}>{exp.company}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>📍 {exp.location}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      padding: '4px 12px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600,
                      background: 'rgba(0,212,255,0.08)', color: 'var(--accent-cyan)',
                      border: '1px solid rgba(0,212,255,0.2)', display: 'block', marginBottom: 6,
                    }}>{exp.duration}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{exp.type}</span>
                  </div>
                </div>

                <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 16 }}>
                  {exp.description.map(d => (
                    <li key={d} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 8, display: 'flex', gap: 10, lineHeight: 1.6 }}>
                      <span style={{ color: i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)', flexShrink: 0, marginTop: 2 }}>▸</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {exp.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
