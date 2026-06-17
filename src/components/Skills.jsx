import { motion } from 'framer-motion';
import { skillsGrouped } from '../data/portfolioData';

function SkillCard({ title, list, accentColor }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-cyber-card border border-cyber-border rounded-lg backdrop-blur-md relative overflow-hidden group hover:border-cyber-blue/30 transition-all duration-300"
    >
      {/* Decorative scanning line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-0 group-hover:opacity-75 group-hover:animate-pulse" />
      
      <h3 className="text-lg font-bold font-display tracking-wider mb-6 flex items-center gap-2" style={{ color: accentColor }}>
        <span className="w-1.5 h-4 bg-current rounded-sm inline-block" />
        {title.toUpperCase()}
      </h3>

      <div className="space-y-4">
        {list.map((skill, index) => (
          <div key={skill} className="space-y-1">
            <div className="flex justify-between text-xs sm:text-sm font-mono text-gray-300">
              <span>{skill}</span>
              <span className="text-[10px] text-gray-500">// ACTIVE</span>
            </div>
            <div className="h-1.5 bg-cyber-bg/85 border border-gray-800 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05 }}
                className="h-full rounded-full relative"
                style={{ 
                  background: `linear-gradient(90deg, ${accentColor}cc, ${accentColor})`,
                  boxShadow: `0 0 8px ${accentColor}aa`
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] w-1/3 animate-[scan_2s_linear_infinite]" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-cyber-bg relative border-b border-cyber-border/40 z-10">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(rgba(0,240,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,1)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-mono border border-cyber-blue/30 rounded-full bg-cyber-blue/5 text-cyber-blue tracking-widest uppercase inline-block mb-3">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Production-Grade Robotics Stack
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Specialized engineering capabilities across hardware integration, real-time communications, and autonomous behavior frameworks.
          </p>
        </div>

        {/* 5-Column-like Grouped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <SkillCard 
            title="Robotics Core" 
            list={skillsGrouped.robotics} 
            accentColor="#00f0ff" 
          />

          <SkillCard 
            title="Systems & Embedded" 
            list={skillsGrouped.systems} 
            accentColor="#9d4edd" 
          />

          <SkillCard 
            title="Communication & DDS" 
            list={skillsGrouped.communication} 
            accentColor="#10b981" 
          />

          <SkillCard 
            title="Programming" 
            list={skillsGrouped.programming} 
            accentColor="#f59e0b" 
          />

          <SkillCard 
            title="Simulation Suites" 
            list={skillsGrouped.simulation} 
            accentColor="#ec4899" 
          />

          {/* Quick HUD status info block */}
          <div className="p-6 bg-cyber-card/20 border border-dashed border-gray-800 rounded-lg flex flex-col justify-between font-mono text-xs text-gray-400">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-cyber-blue font-bold">📡 CORE MIDDLEWARE</span>
                <span className="text-emerald-500">ONLINE</span>
              </div>
              <div className="space-y-2">
                <p><span className="text-gray-500">RMW_IMPLEMENTATION:</span> rmw_fastrtps_cpp</p>
                <p><span className="text-gray-500">DDS_DISCOVERY:</span> AUTO_DISCOVERY</p>
                <p><span className="text-gray-500">QOS_STRICTNESS:</span> PRODUCTION_VERIFIED</p>
                <p><span className="text-gray-500">TF_POLLING_RATE:</span> 120 Hz</p>
              </div>
            </div>
            
            <div className="mt-8 p-3 bg-cyber-blue/5 border border-cyber-blue/20 rounded text-cyber-blue/90 leading-relaxed">
              <span className="font-bold text-cyber-blue">INFO_NODE:</span> DDS participants configured with customized quality of service profiles for high reliability and low latency under flaky physical links.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
