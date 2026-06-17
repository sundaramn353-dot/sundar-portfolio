import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/portfolioData';

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-cyber-bg border-y border-cyber-border/40 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className="p-6 bg-cyber-card/40 border border-cyber-border rounded-lg text-center backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-cyber-blue/40 transition duration-300 group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-cyber-blue font-display mb-2 drop-shadow-[0_0_10px_rgba(0,240,255,0.2)] group-hover:text-white transition duration-300">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2.5} />
                ) : (
                  <span>0</span>
                )}
                {stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-mono tracking-wider uppercase group-hover:text-cyber-blue transition duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
