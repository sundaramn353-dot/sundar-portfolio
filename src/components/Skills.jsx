import { useState } from 'react';
import { skills } from '../data/portfolioData';
import {
  RobotIcon,
  CodeIcon,
  ToolsIcon,
  CompassIcon,
  GlobeIcon
} from './Icons';

function SkillBar({ name, level, color = '#00f0ff' }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ marginBottom: 20 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 600 }}>{name}</span>
        <span style={{ fontSize: '0.85rem', color, fontFamily: 'var(--font-mono)', fontWeight: 700, textShadow: hovered ? `0 0 8px ${color}66` : 'none' }}>
          {level}%
        </span>
      </div>
      <div style={{ height: 8, background: 'rgba(255,255,255,0.04)', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
        <div style={{
          height: '100%', width: `${level}%`, borderRadius: 4,
          background: `linear-gradient(90deg, ${color}cc, ${color})`,
          boxShadow: hovered ? `0 0 16px ${color}aa` : `0 0 8px ${color}44`,
          transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1), boxShadow 0.3s',
          position: 'relative',
        }}>
          {/* Scanning light animation inside progress bar */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
            width: '30%',
            animation: 'scan 2s linear infinite',
          }} />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [tab, setTab] = useState('robotics');
  const tabs = [
    { id: 'robotics', label: 'ROBOTICS STACK', icon: <RobotIcon size={16} />, color: '#00f0ff' },
    { id: 'programming', label: 'LANGUAGES & DEV', icon: <CodeIcon size={16} />, color: '#9d4edd' },
    { id: 'hardware', label: 'HARDWARE & SENSORS', icon: <ToolsIcon size={16} />, color: '#10b981' },
  ];

  const activeColor = tabs.find(t => t.id === tab)?.color || 'var(--accent-cyan)';

  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent)'
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">Robotics & Software Stack</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Full-stack robotics development — from hardware integration to advanced autonomous navigation.
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          {tabs.map(t => {
            const isActive = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: 10,
                  border: `1px solid ${isActive ? t.color : 'rgba(255,255,255,0.08)'}`,
                  background: isActive ? `${t.color}15` : 'rgba(255,255,255,0.02)',
                  color: isActive ? t.color : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: 0.5,
                  boxShadow: isActive ? `0 0 20px ${t.color}22` : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {t.icon}
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 32 }} className="grid-2">
          {/* Progress Bars Card */}
          <div className="card" style={{ borderColor: `${activeColor}22`, boxShadow: `0 8px 30px rgba(0,0,0,0.2)` }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              color: activeColor,
              fontWeight: 700,
              marginBottom: 28,
              letterSpacing: 1,
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <ToolsIcon size={20} color={activeColor} /> Core Competencies
            </h3>
            {(tab === 'robotics' ? skills.robotics : tab === 'programming' ? skills.programming : skills.hardware).map((s) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                color={activeColor}
              />
            ))}
          </div>

          {/* Right Column - Badges & High-Tech Info Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Tools badge container */}
            <div className="card" style={{ borderColor: 'rgba(245, 158, 11, 0.2)' }}>
              <h3 style={{
                color: 'var(--accent-amber)',
                fontWeight: 700,
                marginBottom: 20,
                fontSize: '1rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}>
                <ToolsIcon size={20} color="var(--accent-amber)" /> Tools & Environments
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skills.tools.map(t => (
                  <span key={t} className="tag" style={{ color: 'var(--accent-amber)', borderColor: 'rgba(245, 158, 11, 0.15)', background: 'rgba(245, 158, 11, 0.04)' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Core highlight cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="grid-2">
              {[
                { icon: <RobotIcon size={36} color="#00f0ff" />, label: 'ROS 2 Architect', sub: 'Jazzy / Humble / Custom URDF', color: '#00f0ff' },
                { icon: <ToolsIcon size={36} color="#9d4edd" />, label: 'SLAM Specialist', sub: 'Cartographer & slam_toolbox', color: '#9d4edd' },
                { icon: <CompassIcon size={36} color="#10b981" />, label: 'Nav2 Integration', sub: 'Costmaps & Planner BTs', color: '#10b981' },
                { icon: <GlobeIcon size={36} color="#f59e0b" />, label: 'Community Lead', sub: 'GitHub Wiki Author', color: '#f59e0b' },
              ].map(i => (
                <div
                  key={i.label}
                  className="card"
                  style={{
                    padding: '24px 20px',
                    textAlign: 'center',
                    borderColor: `${i.color}15`,
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${i.color}44`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${i.color}15`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = `${i.color}15`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>{i.icon}</div>
                  <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: 6, fontFamily: 'var(--font-display)' }}>{i.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{i.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
