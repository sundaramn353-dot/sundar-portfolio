import { personalInfo } from '../data/portfolioData';
import {
  RobotIcon,
  GlobeIcon,
  BookIcon,
  BlogIcon,
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon
} from './Icons';

export default function About() {
  const info = [
    { label: 'Location', value: 'Chennai, Tamil Nadu', icon: <MapPinIcon size={16} color="var(--accent-cyan)" /> },
    { label: 'Email', value: personalInfo.email, icon: <MailIcon size={16} color="var(--accent-cyan)" /> },
    { label: 'Phone', value: personalInfo.phone, icon: <PhoneIcon size={16} color="var(--accent-cyan)" /> },
    { label: 'Community', value: 'KKR Robotics Community', icon: <GlobeIcon size={16} color="var(--accent-cyan)" /> },
    { label: 'Specialization', value: 'ROS 2, SLAM, Nav2', icon: <RobotIcon size={16} color="var(--accent-cyan)" /> },
    { label: 'Open Source', value: 'Wiki Publisher', icon: <BookIcon size={16} color="var(--accent-cyan)" /> },
  ];

  const coreRoles = [
    { icon: <RobotIcon size={24} color="var(--accent-cyan)" />, title: 'Robotics Engineer', desc: 'Designing full autonomous robot systems using ROS 2, from URDF modeling to Nav2 navigation and sensor fusion. Specialized in mobile robots and coverage path planning.' },
    { icon: <GlobeIcon size={24} color="var(--accent-cyan)" />, title: 'Community Manager', desc: 'Founder and manager of the KKR Robotics Community on GitHub — creating open-source troubleshooting resources and knowledge bases for ROS 2 developers in Tamil Nadu.' },
    { icon: <BookIcon size={24} color="var(--accent-cyan)" />, title: 'ROS 2 Troubleshooting Wiki Author', desc: 'Created the KKR Robotics Troubleshooting Log wiki — documenting real ROS 2 errors with verified fixes covering Nav2, SLAM, TF2, and hardware integration.' },
    { icon: <BlogIcon size={24} color="var(--accent-cyan)" />, title: 'Technical Blogger', desc: 'Writing in-depth technical articles on ROS 2, SLAM, navigation, and embedded systems — making complex robotics concepts accessible to all.' },
  ];

  return (
    <section id="about" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">About Me</span>
          <h2 className="section-title">ROS 2 Developer & Community Leader</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Building the future of autonomous mobile robots — one ROS 2 node at a time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="grid-2">
          {/* Left - Core Roles */}
          <div>
            <div style={{ marginBottom: 32 }}>
              {coreRoles.map(item => (
                <div key={item.title} className="card" style={{ display: 'flex', gap: 20, marginBottom: 20, padding: '24px' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(0, 240, 255, 0.08)', border: '1px solid rgba(0, 240, 255, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.1)',
                  }}>{item.icon}</div>
                  <div>
                    <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, marginBottom: 6, fontSize: '1.05rem', fontFamily: 'var(--font-display)', letterSpacing: 0.5 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Profile Card / Spec HUD */}
          <div>
            <div className="card" style={{ marginBottom: 24, borderColor: 'rgba(0, 240, 255, 0.2)', padding: '36px' }}>
              <div style={{
                width: 90, height: 90, borderRadius: '50%', margin: '0 auto 20px',
                background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-purple) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                position: 'relative',
              }}>
                <RobotIcon size={40} color="var(--text-primary)" />
                <div style={{
                  position: 'absolute', inset: -4, borderRadius: '50%',
                  border: '2px dashed rgba(0, 240, 255, 0.4)',
                  animation: 'radar-sweep 15s linear infinite',
                }} />
              </div>
              
              <h3 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, marginBottom: 6, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', letterSpacing: 0.5 }}>
                Meenatchi Sundaram N
              </h3>
              
              <p style={{ textAlign: 'center', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: 28, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                ROS 2 Developer & Community Manager
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="grid-2">
                {info.map(i => (
                  <div key={i.label} style={{
                    padding: '12px 14px',
                    background: 'rgba(0, 240, 255, 0.02)',
                    borderRadius: 10,
                    border: '1px solid rgba(0, 240, 255, 0.08)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.2)'; e.currentTarget.style.background = 'rgba(0, 240, 255, 0.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.08)'; e.currentTarget.style.background = 'rgba(0, 240, 255, 0.02)'; }}
                  >
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                      {i.icon} <span>{i.label}</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, wordBreak: 'break-all' }}>{i.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              <a href={personalInfo.github} target="_blank" rel="noopener" className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', gap: 8 }}>
                <GithubIcon size={18} /> GitHub Profile
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', gap: 8 }}>
                <LinkedinIcon size={18} /> LinkedIn Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
