import { motion } from 'framer-motion';
import { experienceTimeline } from '../data/portfolioData';

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  // Visual formatting based on item type
  const getTypeStyles = (type) => {
    switch (type) {
      case 'internship':
        return { label: 'INTERNSHIP', color: 'text-cyber-blue border-cyber-blue/30 bg-cyber-blue/5' };
      case 'research':
        return { label: 'RESEARCH', color: 'text-cyber-purple border-cyber-purple/30 bg-cyber-purple/5' };
      case 'project':
        return { label: 'SYSTEM INTEGRATION', color: 'text-[#10b981] border-[#10b981]/30 bg-[#10b981]/5' };
      case 'certification':
        return { label: 'CERTIFICATION', color: 'text-amber-500 border-amber-500/30 bg-amber-500/5' };
      default:
        return { label: 'PROJECT', color: 'text-gray-400 border-gray-800 bg-gray-900/30' };
    }
  };

  const { label, color } = getTypeStyles(item.type);

  return (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-12">
      {/* Central Connector Node */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1.5 z-10">
        <div className="w-4 h-4 rounded-full bg-cyber-bg border-2 border-cyber-blue shadow-[0_0_10px_rgba(0,240,255,0.4)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
        </div>
      </div>

      {/* Content box */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`p-6 bg-cyber-card border border-cyber-border rounded-lg backdrop-blur-md relative ${
          isEven ? 'md:col-start-1 md:text-right' : 'md:col-start-2'
        }`}
      >
        <div className={`flex flex-col mb-3 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
          <div className="flex gap-2 items-center mb-1">
            <span className={`px-2.5 py-0.5 text-[9px] font-mono border rounded ${color}`}>
              {label}
            </span>
            <span className="text-xs font-mono text-gray-500">{item.date}</span>
          </div>
          <h3 className="text-lg font-bold text-white font-display mt-1">{item.title}</h3>
          <span className="text-xs text-cyber-blue font-mono font-semibold">{item.organization}</span>
        </div>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
          {item.description}
        </p>

        {item.tech && (
          <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            {item.tech.map(t => (
              <span key={t} className="px-2 py-0.5 text-[9px] font-mono border border-gray-800 bg-gray-900/30 text-gray-400 rounded">
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-cyber-bg relative border-b border-cyber-border/40 z-10">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="px-3 py-1 text-xs font-mono border border-cyber-blue/30 rounded-full bg-cyber-blue/5 text-cyber-blue tracking-widest uppercase inline-block mb-3">
            JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Professional Experience & Timeline
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Tracking research publications, embedded hardware projects, certifications, and developer roles in the autonomous systems space.
          </p>
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central spine */}
          <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-transparent opacity-30" />

          <div className="space-y-4">
            {experienceTimeline.map((item, idx) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={idx} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
