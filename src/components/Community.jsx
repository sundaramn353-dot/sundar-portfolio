import { communityWork } from '../data/portfolioData';

export default function Community() {
  return (
    <section id="community" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Community & Open Source</span>
          <h2 className="section-title">Giving Back to Robotics</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Building the ROS ecosystem in Tamil Nadu through open-source contributions and community building
          </p>
        </div>

        {/* Community Cards — no Visit button */}
        <div className="grid-2" style={{ marginBottom: 48 }}>
          {communityWork.map(item => (
            <div key={item.id} className="card" style={{ borderColor: item.color + '33' }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                  background: `${item.color}14`, border: `1px solid ${item.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem',
                }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, fontSize: '1.05rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.description}</p>
                </div>
              </div>
              <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                {item.highlights.map(h => (
                  <li key={h} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: item.color, flexShrink: 0 }}>✓</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            { val: '2', label: 'ROS 2 Projects', icon: '🤖', color: '#00d4ff' },
            { val: '1', label: 'Wiki Published', icon: '📖', color: '#7c3aed' },
            { val: '1', label: 'Blog Article', icon: '✍️', color: '#10b981' },
            { val: '5+', label: 'GitHub Repos', icon: '🐙', color: '#f59e0b' },
          ].map(s => (
            <div key={s.label} className="card" style={{ textAlign: 'center', borderColor: s.color + '22' }}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: s.color, marginBottom: 4 }}>{s.val}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
