import { blogs } from '../data/portfolioData';
import {
  CodeIcon,
  BookIcon,
  BlogIcon,
  GithubIcon
} from './Icons';

const REPO_URL = "https://github.com/sundaramn353-dot/KKR-Robotics-Community";

function getBlogIcon(iconName, color = 'var(--accent-cyan)') {
  switch (iconName) {
    case 'code':
      return <CodeIcon size={32} color={color} />;
    case 'wiki':
      return <BookIcon size={32} color={color} />;
    default:
      return <BlogIcon size={32} color={color} />;
  }
}

export default function Blog() {
  return (
    <section id="blog" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)'
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Blog & Open Source</span>
          <h2 className="section-title">Writing & Community</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Practical ROS 2 guides, troubleshooting resources, and open-source contributions.
          </p>
        </div>

        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>

          {/* Dynamic Blogs List */}
          {blogs.map((blog, idx) => {
            const isEven = idx % 2 === 0;
            const cardColor = isEven ? 'rgba(0, 240, 255, 0.25)' : 'rgba(157, 78, 221, 0.25)';
            const tagColor = isEven ? 'var(--accent-cyan)' : 'var(--accent-purple)';
            const bgGradient = isEven 
              ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.03) 0%, rgba(157, 78, 221, 0.01) 100%)'
              : 'linear-gradient(135deg, rgba(157, 78, 221, 0.03) 0%, rgba(0, 240, 255, 0.01) 100%)';

            return (
              <div 
                key={blog.id} 
                className="card" 
                style={{
                  padding: '48px',
                  background: bgGradient,
                  borderColor: cardColor,
                }}
              >
                <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: isEven ? 'rgba(0, 240, 255, 0.08)' : 'rgba(157, 78, 221, 0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {getBlogIcon(blog.icon, tagColor)}
                  </div>
                  <span style={{
                    padding: '5px 14px', borderRadius: 30, fontSize: '0.75rem', fontWeight: 800,
                    background: isEven ? 'rgba(0, 240, 255, 0.08)' : 'rgba(157, 78, 221, 0.08)',
                    color: tagColor,
                    border: `1px solid ${isEven ? 'rgba(0, 240, 255, 0.2)' : 'rgba(157, 78, 221, 0.2)'}`,
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: 0.5
                  }}>{blog.category.toUpperCase()}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {blog.date}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>· {blog.readTime}</span>
                </div>

                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16, lineHeight: 1.3, fontFamily: 'var(--font-display)', letterSpacing: 0.5 }}>
                  {blog.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 28, fontSize: '1.02rem' }}>
                  {blog.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                  {blog.tags.map(t => (
                    <span key={t} className="tag" style={{ color: tagColor, borderColor: isEven ? 'rgba(0, 240, 255, 0.15)' : 'rgba(157, 78, 221, 0.15)', background: isEven ? 'rgba(0, 240, 255, 0.03)' : 'rgba(157, 78, 221, 0.03)' }}>{t}</span>
                  ))}
                </div>

                <button
                  onClick={() => window.open(blog.link, '_blank')}
                  className="btn btn-primary"
                  style={{
                    fontSize: '0.92rem',
                    padding: '14px 32px',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: 0.5,
                    background: isEven ? 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))' : 'linear-gradient(135deg, var(--accent-purple), var(--accent-cyan))',
                    boxShadow: isEven ? '0 0 20px rgba(0, 240, 255, 0.2)' : '0 0 20px rgba(157, 78, 221, 0.2)'
                  }}
                >
                  {blog.icon === 'wiki' ? <BookIcon size={16} style={{ marginRight: 8 }} /> : <CodeIcon size={16} style={{ marginRight: 8 }} />}
                  Read Article →
                </button>
              </div>
            );
          })}

          {/* KKR Robotics Community repo callout */}
          <div className="card" style={{
            padding: '48px',
            background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.03) 0%, rgba(16, 185, 129, 0.03) 100%)',
            borderColor: 'rgba(157, 78, 221, 0.25)',
          }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: 'rgba(157, 78, 221, 0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <GithubIcon size={28} color="var(--accent-purple)" />
              </div>
              <span style={{
                padding: '5px 14px', borderRadius: 30, fontSize: '0.75rem', fontWeight: 800,
                background: 'rgba(157, 78, 221, 0.08)', color: 'var(--accent-purple)',
                border: '1px solid rgba(157, 78, 221, 0.2)', fontFamily: 'var(--font-mono)',
                letterSpacing: 0.5
              }}>Open Source</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                2026 – Present
              </span>
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16, lineHeight: 1.3, fontFamily: 'var(--font-display)', letterSpacing: 0.5 }}>
              Industry-Grade Autonomous Line Following Robot (LFR) — GitHub Repository
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 20, fontSize: '1.02rem' }}>
              The official open-source GitHub repository for KKR Robotics Community — containing ROS 2 project code,
              configuration files, launch scripts, and the complete troubleshooting wiki.
              A public knowledge base built from real autonomous robot development experience.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {['ROS 2', 'Open Source', 'Nav2', 'SLAM', 'Community'].map(t => (
                <span key={t} className="tag" style={{ borderColor: 'rgba(157, 78, 221, 0.2)', color: 'var(--accent-purple)' }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button
                onClick={() => window.open(REPO_URL, '_blank')}
                className="btn btn-primary"
                style={{
                  fontSize: '0.92rem',
                  padding: '14px 32px',
                  background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-green))',
                  boxShadow: '0 0 20px rgba(157, 78, 221, 0.2)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}
              >
                <GithubIcon size={16} /> Visit GitHub Repo →
              </button>
            </div>
          </div>

          {/* Coming soon */}
          <div className="card" style={{ textAlign: 'center', padding: '48px', borderStyle: 'dashed', borderColor: 'rgba(0, 240, 255, 0.15)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <BlogIcon size={32} color="var(--accent-cyan)" />
            </div>
            <h3 style={{ color: 'var(--text-primary)', fontWeight: 800, marginBottom: 10, fontSize: '1.2rem', fontFamily: 'var(--font-display)', letterSpacing: 0.5 }}>More Articles Coming Soon</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
              Currently working on in-depth ROS 2 tutorials covering SLAM setup, Nav2 configuration,
              and autonomous robot deployment. Stay tuned!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
