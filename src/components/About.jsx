import { personalInfo } from '../data/portfolioData';

export default function About() {
  const info = [
              { label: 'Location', value: 'Coimbatore, Tamil Nadu', icon: '📍' },
              { label: 'Email', value: 'sundaramn353@gmail.com', icon: '📧' },
              { label: 'Phone', value: '+91 7339257336', icon: '📞' },
              { label: 'Community', value: 'ROS Tamilnadu', icon: '🌐' },
              { label: 'Specialization', value: 'ROS 2, SLAM, Nav2', icon: '🤖' },
              { label: 'Open Source', value: 'KKR Robotics Wiki', icon: '📖' },
  ];

  return (
    <section id="about" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">About Me</span>
          <h2 className="section-title">ROS2 Developer & Community Leader.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Building the future of autonomous robots — one ROS 2 node at a time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          {/* Left - Text */}
          <div>
            <div style={{ marginBottom: 32 }}>
              {[
                { icon: '🤖', title: 'Robotics Engineer', desc: 'Designing full autonomous robot systems using ROS 2, from URDF modeling to Nav2 navigation and sensor fusion. Specialized in mobile robots and coverage path planning.' },
                { icon: '🌐', title: 'Community Manager', desc: 'Founder and manager of the KKR Robotics Community on GitHub — creating open-source troubleshooting resources and knowledge bases for ROS 2 developers in Tamil Nadu.' },
                { icon: '📖', title: 'ROS 2 Troubleshooting Wiki Author', desc: 'Created the KKR Robotics Troubleshooting Log wiki — documenting real ROS 2 errors with verified fixes covering Nav2, SLAM, TF2, and hardware integration.' },
                { icon: '✍️', title: 'Technical Blogger', desc: 'Writing in-depth technical articles on ROS 2, SLAM, navigation, and embedded systems — making complex robotics concepts accessible to all.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
                  }}>{item.icon}</div>
                  <div>
                    <h3 style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: 4, fontSize: '1rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Info Card */}
          <div>
            <div className="card" style={{ marginBottom: 24, borderColor: 'rgba(0,212,255,0.2)' }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%', margin: '0 auto 20px',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem', animation: 'pulse-glow 2s infinite',
              }}>🤖</div>
              <h3 style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700, marginBottom: 4, color: 'var(--text-primary)' }}>
                Sundaram N
              </h3>
              <p style={{ textAlign: 'center', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: 24 }}>
                ROS 2 Developer & Community Manage
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {info.map(i => (
                  <div key={i.label} style={{ padding: '10px 12px', background: 'rgba(0,212,255,0.04)', borderRadius: 8, border: '1px solid rgba(0,212,255,0.08)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 2 }}>{i.icon} {i.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 500 }}>{i.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <a href={personalInfo.github} target="_blank" rel="noopener" className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
