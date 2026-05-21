import { blogs } from '../data/portfolioData';

const WIKI_URL = "https://github.com/sundaramn353-dot/KKR-Robotics-Community/wiki";
const REPO_URL = "https://github.com/sundaramn353-dot/KKR-Robotics-Community";

export default function Blog() {
  const blog = blogs[0];

  return (
    <section id="blog" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Blog & Open Source</span>
          <h2 className="section-title">Writing & Community</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Practical ROS 2 guides, troubleshooting resources, and open-source contributions
          </p>
        </div>

        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* Blog post 1 — Wiki troubleshooting guide */}
          <div className="card" style={{
            padding: '48px',
            background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.06) 100%)',
            borderColor: 'rgba(0,212,255,0.25)',
          }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{ fontSize: '2.5rem' }}>{blog.icon}</span>
              <span style={{
                padding: '5px 14px', borderRadius: 20, fontSize: '0.8rem', fontWeight: 700,
                background: 'rgba(0,212,255,0.12)', color: 'var(--accent-cyan)',
                border: '1px solid rgba(0,212,255,0.25)',
              }}>{blog.category}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>· {blog.readTime}</span>
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16, lineHeight: 1.3 }}>
              {blog.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 28, fontSize: '1.05rem' }}>
              {blog.summary}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {blog.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            <button
              onClick={() => window.open(WIKI_URL, '_blank')}
              className="btn btn-primary"
              style={{ fontSize: '1rem', padding: '14px 32px' }}
            >
              📖 Read on GitHub Wiki →
            </button>
          </div>

          {/* Blog post 2 — KKR Robotics Community repo */}
          <div className="card" style={{
            padding: '48px',
            background: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(16,185,129,0.06) 100%)',
            borderColor: 'rgba(124,58,237,0.25)',
          }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{ fontSize: '2.5rem' }}>🐙</span>
              <span style={{
                padding: '5px 14px', borderRadius: 20, fontSize: '0.8rem', fontWeight: 700,
                background: 'rgba(124,58,237,0.12)', color: 'var(--accent-purple)',
                border: '1px solid rgba(124,58,237,0.25)',
              }}>Open Source</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                2026 – Present
              </span>
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16, lineHeight: 1.3 }}>
              Industry-Grade Autonomous Line Following Robot (LFR) — GitHub Repository
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 20, fontSize: '1.05rem' }}>
              The official open-source GitHub repository for KKR Robotics Community — containing ROS 2 project code,
              configuration files, launch scripts, and the complete troubleshooting wiki.
              A public knowledge base built from real autonomous robot development experience.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {['ROS 2', 'Open Source', 'Nav2', 'SLAM', 'Community'].map(t => (
                <span key={t} className="tag" style={{ borderColor: 'rgba(124,58,237,0.3)', color: 'var(--accent-purple)' }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button
                onClick={() => window.open(REPO_URL, '_blank')}
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '14px 32px', background: 'linear-gradient(135deg, #7c3aed, #10b981)' }}
              >
                🐙 Visit GitHub Repo →
              </button>
            </div>
          </div>

          {/* Coming soon */}
          <div className="card" style={{ textAlign: 'center', padding: '40px', borderStyle: 'dashed', borderColor: 'rgba(0,212,255,0.15)' }}>
            <div style={{ fontSize: '2rem', marginBottom: 12 }}>✍️</div>
            <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: 8 }}>More Articles Coming Soon</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: 500, margin: '0 auto' }}>
              Currently working on in-depth ROS 2 tutorials covering SLAM setup, Nav2 configuration,
              and autonomous robot deployment. Stay tuned!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
