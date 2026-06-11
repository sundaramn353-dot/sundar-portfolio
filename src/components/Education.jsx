import { education, certifications } from '../data/portfolioData';
import {
  GraduationIcon,
  MapPinIcon,
  TrophyIcon,
  AwardIcon
} from './Icons';

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)'
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Education & Certifications</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="grid-2" style={{ alignItems: 'start', gap: 40 }}>
          {/* Education */}
          <div>
            <h3 style={{
              color: 'var(--accent-cyan)',
              fontWeight: 800,
              marginBottom: 28,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)',
              letterSpacing: 0.5
            }}>
              <GraduationIcon size={22} color="var(--accent-cyan)" /> Academic Degree
            </h3>
            {education.map(edu => (
              <div key={edu.id} className="card" style={{ borderColor: 'rgba(0, 240, 255, 0.2)', marginBottom: 20 }}>
                <div style={{
                  display: 'inline-block', padding: '6px 16px', borderRadius: 30, fontSize: '0.75rem',
                  fontWeight: 700, background: 'rgba(0, 240, 255, 0.08)', color: 'var(--accent-cyan)',
                  border: '1px solid rgba(0, 240, 255, 0.2)', marginBottom: 18, fontFamily: 'var(--font-mono)',
                  letterSpacing: 0.5
                }}>{edu.duration}</div>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.4, fontFamily: 'var(--font-display)', letterSpacing: 0.5 }}>
                  {edu.degree}
                </h3>
                
                <p style={{ color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: 4, fontSize: '0.95rem' }}>{edu.institution}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <MapPinIcon size={14} color="var(--text-muted)" /> {edu.location}
                </p>
                
                <div style={{
                  padding: '8px 18px',
                  background: 'rgba(16, 185, 129, 0.08)',
                  borderRadius: 10,
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  display: 'inline-block',
                  marginBottom: 20,
                  fontFamily: 'var(--font-mono)'
                }}>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 800, fontSize: '0.9rem' }}>{edu.grade}</span>
                </div>

                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  {edu.highlights.map(h => (
                    <li key={h} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: '0.88rem', color: 'var(--text-secondary)', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent-cyan)', flexShrink: 0, fontSize: '0.95rem' }}>⬡</span>
                      <span style={{ lineHeight: 1.45 }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{
              color: 'var(--accent-purple)',
              fontWeight: 800,
              marginBottom: 28,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: '1.25rem',
              fontFamily: 'var(--font-display)',
              letterSpacing: 0.5
            }}>
              <TrophyIcon size={22} color="var(--accent-purple)" /> Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {certifications.map(cert => (
                <div
                  key={cert.name}
                  className="card"
                  style={{
                    padding: '20px 24px',
                    borderColor: 'rgba(157, 78, 221, 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 18,
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(157, 78, 221, 0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(157, 78, 221, 0.18)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(157, 78, 221, 0.08)', border: '1px solid rgba(157, 78, 221, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 10px rgba(157, 78, 221, 0.05)',
                  }}>
                    <AwardIcon size={20} color="var(--accent-purple)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem', marginBottom: 4, fontFamily: 'var(--font-display)' }}>{cert.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{cert.issuer}</div>
                  </div>
                  <div style={{
                    padding: '5px 12px', borderRadius: 30, fontSize: '0.75rem', fontWeight: 800,
                    background: 'rgba(157, 78, 221, 0.08)', color: 'var(--accent-purple)',
                    border: '1px solid rgba(157, 78, 221, 0.25)', whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-mono)'
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
