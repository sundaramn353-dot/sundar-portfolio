import { communityWork, stats } from '../data/portfolioData';
import {
  GlobeIcon,
  BookIcon,
  RobotIcon,
  BlogIcon,
  GithubIcon
} from './Icons';

function getCommunityIcon(iconName, color) {
  switch (iconName) {
    case 'globe':
      return <GlobeIcon size={26} color={color} />;
    case 'book':
      return <BookIcon size={26} color={color} />;
    default:
      return <GlobeIcon size={26} color={color} />;
  }
}

function getStatsIcon(label, color) {
  if (label.toLowerCase().includes('projects')) return <RobotIcon size={32} color={color} />;
  if (label.toLowerCase().includes('wiki')) return <BookIcon size={32} color={color} />;
  if (label.toLowerCase().includes('blog')) return <BlogIcon size={32} color={color} />;
  if (label.toLowerCase().includes('repos')) return <GithubIcon size={32} color={color} />;
  return <GlobeIcon size={32} color={color} />;
}

const colors = ['#00f0ff', '#9d4edd', '#10b981', '#f59e0b'];

export default function Community() {
  return (
    <section id="community" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)'
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Community & Open Source</span>
          <h2 className="section-title">Giving Back to Robotics</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Building the ROS ecosystem in Tamil Nadu through open-source contributions and community building.
          </p>
        </div>

        {/* Community Work Grid */}
        <div className="grid-2" style={{ marginBottom: 56 }}>
          {communityWork.map(item => (
            <div key={item.id} className="card" style={{
              borderColor: `${item.color}25`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: `0 8px 30px rgba(0,0,0,0.15)`
            }}>
              <div>
                <div style={{ display: 'flex', gap: 20, marginBottom: 24, alignItems: 'flex-start' }} className="grid-2">
                  <div style={{
                    width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                    background: `${item.color}15`, border: `1px solid ${item.color}33`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 15px ${item.color}15`,
                  }}>
                    {getCommunityIcon(item.icon, item.color)}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 800, color: 'var(--text-primary)', marginBottom: 6, fontSize: '1.1rem', fontFamily: 'var(--font-display)', letterSpacing: 0.5 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                </div>
                
                <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 28 }}>
                  {item.highlights.map(h => (
                    <li key={h} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: '0.86rem', color: 'var(--text-secondary)', alignItems: 'flex-start' }}>
                      <span style={{ color: item.color, flexShrink: 0, fontSize: '0.9rem' }}>⬡</span>
                      <span style={{ lineHeight: 1.45 }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-outline"
                  style={{
                    justifyContent: 'center',
                    borderColor: `${item.color}55`,
                    color: item.color,
                    fontSize: '0.85rem',
                    padding: '12px',
                    fontFamily: 'var(--font-mono)',
                    width: '100%',
                    gap: 8,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${item.color}15`;
                    e.currentTarget.style.borderColor = item.color;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = `${item.color}55`;
                  }}
                >
                  {item.id === 1 ? <GithubIcon size={16} /> : <BookIcon size={16} />}
                  {item.id === 1 ? 'Explore GitHub Org →' : 'Read Troubleshooting Wiki →'}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="grid-3">
          {stats.map((s, idx) => {
            const color = colors[idx] || 'var(--accent-cyan)';
            return (
              <div
                key={s.label}
                className="card"
                style={{
                  textAlign: 'center',
                  borderColor: `${color}15`,
                  transition: 'all 0.3s',
                  padding: '32px 16px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${color}44`;
                  e.currentTarget.style.boxShadow = `0 8px 25px ${color}15`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${color}15`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                  {getStatsIcon(s.label, color)}
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'var(--font-display)', color, marginBottom: 6 }}>
                  {s.value}{s.suffix}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, fontFamily: 'var(--font-mono)' }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
