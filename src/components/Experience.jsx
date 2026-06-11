import { experience } from '../data/portfolioData';
import { MapPinIcon } from './Icons';

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(157, 78, 221, 0.15), transparent)'
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Professional Journey</h2>
        </div>

        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 24, top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple), transparent)',
          }} />

          {experience.map((exp, i) => (
            <div key={exp.id} style={{ paddingLeft: 64, marginBottom: 48, position: 'relative' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: 14, top: 12, width: 22, height: 22, borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: `4px solid ${i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)'}`,
                boxShadow: `0 0 16px ${i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 2,
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                  animation: i === 0 ? 'pulse-glow 1.5s infinite' : 'none'
                }} />
              </div>

              <div
                className="card"
                style={{
                  borderColor: i === 0 ? 'rgba(0, 240, 255, 0.25)' : 'rgba(157, 78, 221, 0.2)',
                  boxShadow: i === 0 ? '0 8px 30px rgba(0, 240, 255, 0.04)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 6, fontFamily: 'var(--font-display)', letterSpacing: 0.5 }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', fontSize: '0.9rem' }}>
                      <span style={{ color: i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)', fontWeight: 700 }}>{exp.company}</span>
                      <span style={{ color: 'var(--text-muted)' }}>|</span>
                      <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <MapPinIcon size={14} color="var(--text-secondary)" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      padding: '6px 14px', borderRadius: 30, fontSize: '0.75rem', fontWeight: 700,
                      background: i === 0 ? 'rgba(0, 240, 255, 0.08)' : 'rgba(157, 78, 221, 0.08)',
                      color: i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                      border: i === 0 ? '1px solid rgba(0, 240, 255, 0.25)' : '1px solid rgba(157, 78, 221, 0.25)',
                      display: 'inline-block', marginBottom: 6,
                      fontFamily: 'var(--font-mono)',
                    }}>{exp.duration}</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{exp.type.toUpperCase()}</div>
                  </div>
                </div>

                <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 24 }}>
                  {exp.description.map(d => (
                    <li key={d} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 10, display: 'flex', gap: 10, lineHeight: 1.65 }}>
                      <span style={{ color: i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)', flexShrink: 0, marginTop: 2 }}>▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 16 }}>
                  {exp.tech.map(t => (
                    <span key={t} className="tag" style={{ fontSize: '0.7rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
