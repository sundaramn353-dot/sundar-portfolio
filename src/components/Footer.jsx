import { personalInfo } from '../data/portfolioData';
import { MapPinIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-cyber-bg border-t border-cyber-border/40 relative z-10 text-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">

          {/* Brand */}
          <div className="md:col-span-6 space-y-4">
            <div 
              onClick={() => scrollTo('home')}
              className="font-display text-xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple cursor-pointer inline-block"
            >
              &lt;MS/&gt;
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Meenatchi Sundaram N — Robotics Software Engineer. Designing custom SLAM optimization pipelines, namespaced fleet controls, and embedded real-time nodes.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-[10px] font-bold font-display uppercase tracking-wider text-white">System Nodes</h4>
            <div className="grid grid-cols-2 gap-2">
              {['home', 'skills', 'projects', 'architecture', 'experience', 'github', 'knowledge', 'contact'].map(id => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-gray-500 hover:text-cyber-blue transition uppercase"
                >
                  /{id}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="text-[10px] font-bold font-display uppercase tracking-wider text-white">Diagnostics</h4>
            <div className="space-y-1.5 text-gray-500">
              <a href={`mailto:${personalInfo.email}`} className="block hover:text-cyber-blue transition">{personalInfo.email}</a>
              <a href={`tel:${personalInfo.phone}`} className="block hover:text-cyber-blue transition">{personalInfo.phone}</a>
              <div className="flex items-center gap-1.5 pt-1 text-[10px]">
                <MapPinIcon size={12} className="text-gray-600" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-600">
          <span>© {year} MEENATCHI SUNDARAM. ALL RIGHTS RESERVED.</span>
          <span>BUILD: HUMBLE_JAZZY_NODE // RMW_FASTRTPS</span>
        </div>
      </div>
    </footer>
  );
}
