import { useState, useRef } from 'react';
import { projects } from '../data/portfolioData';
import {
  RobotIcon,
  RefreshIcon,
  SearchIcon,
  ShieldIcon,
  GithubIcon,
  LinkIcon
} from './Icons';

// Helper to render matching project vector icons
function getProjectIcon(iconName, color) {
  switch (iconName) {
    case 'robot':
      return <RobotIcon size={28} color={color} />;
    case 'refresh':
      return <RefreshIcon size={28} color={color} />;
    case 'search':
      return <SearchIcon size={28} color={color} />;
    case 'shield':
      return <ShieldIcon size={28} color={color} />;
    default:
      return <RobotIcon size={28} color={color} />;
  }
}

/* ─── Media Gallery (image carousel + video player) ─── */
function MediaGallery({ media, color }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  if (!media || media.length === 0) return null;

  const basePath = import.meta.env.BASE_URL || '/';
  const current = media[activeIdx];

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      {/* Main viewer (Simulates a Robot feed HUD) */}
      <div style={{
        position: 'relative', borderRadius: 12, overflow: 'hidden',
        border: `1px solid ${color}44`, background: '#020205',
        aspectRatio: '16/9',
        boxShadow: `inset 0 0 20px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.5)`,
      }}>
        {/* Futuristic Camera viewfinder grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          border: '1px solid rgba(255, 255, 255, 0.03)',
          pointerEvents: 'none',
          zIndex: 5,
        }}>
          {/* Corner ticks */}
          <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: `2px solid ${color}aa`, borderLeft: `2px solid ${color}aa` }} />
          <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: `2px solid ${color}aa`, borderRight: `2px solid ${color}aa` }} />
          <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: `2px solid ${color}aa`, borderLeft: `2px solid ${color}aa` }} />
          <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: `2px solid ${color}aa`, borderRight: `2px solid ${color}aa` }} />
          
          {/* REC status blinking dot */}
          <div style={{ position: 'absolute', top: 12, left: 24, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#ef4444',
              animation: 'pulse-glow 1s infinite'
            }} />
            <span style={{ fontSize: '0.6rem', color: '#fff', opacity: 0.6, fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>CAM_FEED_01</span>
          </div>
        </div>

        {current.type === 'video' ? (
          <>
            <video
              ref={videoRef}
              src={`${basePath}${current.src}`}
              controls={playing}
              muted
              playsInline
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.9 }}
            />
            {!playing && (
              <div onClick={handlePlay} style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0,0,0,0.5)', cursor: 'pointer', transition: 'background 0.3s',
                zIndex: 6,
              }}>
                <div style={{
                  width: 54, height: 54, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 25px ${color}66`,
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#030712" style={{ marginLeft: 2 }}>
                    <polygon points="8,5 20,12 8,19" />
                  </svg>
                </div>
              </div>
            )}
          </>
        ) : (
          <img
            src={`${basePath}${current.src}`}
            alt={current.label}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.85 }}
          />
        )}

        {/* Label overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '10px 14px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
          display: 'flex', alignItems: 'center', gap: 6,
          zIndex: 6,
        }}>
          <span style={{
            fontSize: '0.68rem', color: '#fff', fontFamily: 'var(--font-mono)',
            opacity: 0.9, letterSpacing: 1
          }}>
            [{current.type.toUpperCase()}] {current.label.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Thumbnail strip (only if multiple media) */}
      {media.length > 1 && (
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => { setActiveIdx(i); setPlaying(false); }}
              style={{
                flex: 1, padding: '8px 12px', borderRadius: 8,
                border: `1px solid ${activeIdx === i ? color : 'rgba(255,255,255,0.06)'}`,
                background: activeIdx === i ? `${color}15` : 'rgba(255,255,255,0.02)',
                color: activeIdx === i ? color : 'var(--text-secondary)',
                fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer',
                fontFamily: 'var(--font-mono)', transition: 'all 0.2s',
              }}
            >
              [{m.type.toUpperCase()}] {m.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Project Card ─── */
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? project.color + '66' : 'var(--border)',
        boxShadow: hovered ? `0 12px 40px ${project.color}1c` : 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
          border: `1px solid ${project.color}25`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: hovered ? `0 0 15px ${project.color}22` : 'none',
          transition: 'all 0.3s',
        }}>
          {getProjectIcon(project.icon, project.color)}
        </div>
        <span style={{
          padding: '5px 12px', borderRadius: 30, fontSize: '0.72rem', fontWeight: 700,
          background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}25`,
          fontFamily: 'var(--font-mono)', letterSpacing: 0.5,
        }}>{project.category.toUpperCase()}</span>
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 6, fontFamily: 'var(--font-display)', letterSpacing: 0.5 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '0.8rem', color: project.color, fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-mono)', letterSpacing: 0.5 }}>
        {project.subtitle}
      </p>

      {/* Media Gallery */}
      <MediaGallery media={project.media} color={project.color} />

      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 20, flex: 1 }}>
        {project.description}
      </p>

      {/* Highlights */}
      <ul style={{ marginBottom: 24, paddingLeft: 0, listStyle: 'none' }}>
        {project.highlights.map(h => (
          <li key={h} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 8, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <span style={{ color: project.color, flexShrink: 0, fontSize: '0.9rem' }}>⬡</span>
            <span style={{ lineHeight: 1.4 }}>{h}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
        {project.tech.map(t => (
          <span key={t} style={{
            padding: '4px 10px', borderRadius: 6, fontSize: '0.72rem',
            background: 'rgba(255,255,255,0.02)', color: 'var(--text-secondary)',
            border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'var(--font-mono)',
          }}>{t}</span>
        ))}
      </div>

      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener"
          className="btn btn-outline"
          style={{
            justifyContent: 'center',
            borderColor: project.color + '55',
            color: project.color,
            fontSize: '0.85rem',
            padding: '12px',
            fontFamily: 'var(--font-mono)',
            gap: 8,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `${project.color}15`;
            e.currentTarget.style.borderColor = project.color;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = project.color + '55';
          }}
        >
          <GithubIcon size={16} /> View GitHub Repository →
        </a>
      ) : (
        <div
          className="btn btn-outline"
          style={{
            justifyContent: 'center',
            borderColor: 'rgba(255,255,255,0.1)',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            padding: '12px',
            opacity: 0.6,
            cursor: 'default',
            fontFamily: 'var(--font-mono)',
          }}
        >
          Proprietary / Hardware — No Public Repo
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Robotics', 'Embedded'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Robotics Systems I've Built</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Hands-on engineering projects — spanning simulation environments, SLAM nodes, and bare-metal electronics.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map(c => {
            const isActive = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 30,
                  border: `1px solid ${isActive ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.08)'}`,
                  background: isActive ? 'rgba(0,240,255,0.08)' : 'rgba(255,255,255,0.01)',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.85rem',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: 0.5,
                  boxShadow: isActive ? '0 0 15px rgba(0,240,255,0.1)' : 'none',
                }}
              >
                {c.toUpperCase()}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 32 }}>
          {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
