import { useState } from 'react';
import { projects } from '../data/portfolioData';

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ borderColor: hovered ? project.color + '55' : 'var(--border)', boxShadow: hovered ? `0 0 30px ${project.color}22` : 'none', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 12,
          background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
          border: `1px solid ${project.color}33`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
        }}>{project.icon}</div>
        <span style={{
          padding: '4px 10px', borderRadius: 20, fontSize: '0.7rem', fontWeight: 600,
          background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}33`,
        }}>{project.category}</span>
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{project.title}</h3>
      <p style={{ fontSize: '0.8rem', color: project.color, fontWeight: 500, marginBottom: 12, fontFamily: 'var(--font-mono)' }}>{project.subtitle}</p>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{project.description}</p>

      {/* Highlights */}
      <ul style={{ marginBottom: 20, paddingLeft: 0, listStyle: 'none' }}>
        {project.highlights.slice(0, 3).map(h => (
          <li key={h} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 6, display: 'flex', gap: 8 }}>
            <span style={{ color: project.color, flexShrink: 0 }}>▸</span> {h}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {project.tech.slice(0, 5).map(t => (
          <span key={t} style={{
            padding: '3px 10px', borderRadius: 20, fontSize: '0.7rem',
            background: 'rgba(255,255,255,0.04)', color: 'var(--text-secondary)',
            border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-mono)',
          }}>{t}</span>
        ))}
      </div>

      <a href={project.github} target="_blank" rel="noopener" className="btn btn-outline" style={{ justifyContent: 'center', borderColor: project.color + '66', color: project.color, fontSize: '0.85rem', padding: '8px' }}>
        View on GitHub →
      </a>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Robotics', 'Navigation', 'Web + Robotics', 'Perception', 'Embedded'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-tag">Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real-world robotics systems — from simulation to hardware deployment
          </p>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{
              padding: '8px 20px', borderRadius: 20, border: `1px solid ${filter === c ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.1)'}`,
              background: filter === c ? 'rgba(0,212,255,0.12)' : 'transparent',
              color: filter === c ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              cursor: 'pointer', fontWeight: 500, fontSize: '0.85rem', transition: 'all 0.2s',
              fontFamily: 'var(--font-main)',
            }}>{c}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
