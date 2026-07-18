import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Architecture', href: 'architecture' },
  { name: 'Experience', href: 'experience' },
  { name: 'GitHub', href: 'github' },
  { name: 'ROS 2 Knowledge', href: 'knowledge' },
  { name: 'Recruiter Direct', href: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
      scrolled 
        ? 'py-3.5 bg-cyber-bg/90 border-b border-cyber-border/30 backdrop-blur-xl shadow-[0_8px_40px_-10px_rgba(0,229,255,0.1)]' 
        : 'py-5 bg-transparent border-b border-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => scrollTo('home')} 
          className="font-display text-lg font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple drop-shadow-[0_0_15px_rgba(0,240,255,0.15)]"
        >
          &lt;MS/&gt;
        </button>

        {/* Links */}
        <div className="hidden lg:flex gap-1 items-center bg-cyber-card/10 border border-gray-900 px-2 py-1 rounded-full backdrop-blur-sm">
          {navLinks.map(link => {
            const isActive = active === link.href;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                  isActive 
                    ? 'text-cyber-blue bg-cyber-blue/10 border border-cyber-blue/20' 
                    : 'text-gray-400 hover:text-cyber-blue hover:bg-cyber-blue/5 border border-transparent'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <a 
          href="mailto:sundaramn353@gmail.com" 
          className="px-4 py-2 font-mono text-[10px] sm:text-xs font-bold tracking-wider text-cyber-bg bg-cyber-blue rounded hover:scale-102 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition duration-300"
        >
          GET IN TOUCH
        </a>

      </div>
    </nav>
  );
}
