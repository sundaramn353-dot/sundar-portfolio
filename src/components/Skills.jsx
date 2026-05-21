import { useState } from 'react';
import { skills } from '../data/portfolioData';

function SkillBar({ name, level, color = '#00d4ff' }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.8rem', color, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${level}%`, borderRadius: 3,
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          boxShadow: `0 0 12px ${color}66`,
          transition: 'width 1s ease',
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [tab, setTab] = useState('robotics');
  const tabs = [
    { id: 'robotics', label: '🤖 Robotics', color: '#00d4ff' },
    { id: 'programming', label: '💻 Programming', color: '#7c3aed' },
    { id: 'hardware', label: '⚙️ Hardware', color: '#10b981' },
  ];

  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Full-stack robotics development from hardware to web interfaces
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: '10px 24px', borderRadius: 8, border: `1px solid ${tab === t.id ? t.color : 'rgba(255,255,255,0.1)'}`,
              background: tab === t.id ? `rgba(${t.id === 'robotics' ? '0,212,255' : t.id === 'programming' ? '124,58,237' : '16,185,129'},0.12)` : 'transparent',
              color: tab === t.id ? t.color : 'var(--text-secondary)',
              cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem',
              transition: 'all 0.2s', fontFamily: 'var(--font-main)',
            }}>{t.label}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div className="card">
            {(tab === 'robotics' ? skills.robotics : tab === 'programming' ? skills.programming : skills.hardware).map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level}
                color={tab === 'robotics' ? '#00d4ff' : tab === 'programming' ? '#7c3aed' : '#10b981'} />
            ))}
          </div>

          <div>
            <div className="card" style={{ marginBottom: 24 }}>
              <h3 style={{ color: 'var(--accent-amber)', fontWeight: 700, marginBottom: 20, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                🛠️ Tools & Technologies
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skills.tools.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '🤖', label: 'ROS 2 Expert', sub: 'Jazzy / Humble' },
                { icon: '🗺️', label: 'SLAM Master', sub: 'Cartographer + slam_toolbox' },
                { icon: '🧭', label: 'Nav2 Stack', sub: 'Full pipeline config' },
                { icon: '🌐', label: 'Community Lead', sub: 'ROS Tamil Nadu' },
              ].map(i => (
                <div key={i.label} className="card" style={{ padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>{i.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: 4 }}>{i.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{i.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
