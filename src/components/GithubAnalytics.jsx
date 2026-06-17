import { motion } from 'framer-motion';
import { githubAnalytics } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export default function GithubAnalytics() {
  return (
    <section id="github" className="py-24 bg-cyber-bg relative border-b border-cyber-border/40 z-10">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-mono border border-cyber-blue/30 rounded-full bg-cyber-blue/5 text-cyber-blue tracking-widest uppercase inline-block mb-3">
            ANALYTICS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            GitHub Developer Analytics
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Tracking active development cycles, source code contributions, and public repository statistics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Block - Stats & Contribution Graph */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Contribution heat map */}
            <div className="p-6 bg-cyber-card border border-cyber-border rounded-lg backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-gray-400 font-bold flex items-center gap-1.5">
                  <GithubIcon size={14} /> CONTRIBUTION HEATMAP (LAST 12 WEEKS)
                </span>
                <span className="text-[10px] font-mono text-emerald-500">SYS_SYNC: OK</span>
              </div>
              
              <div className="flex gap-1 overflow-x-auto pb-2">
                {githubAnalytics.contributions.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1 flex-shrink-0">
                    {week.days.map((day, dIdx) => {
                      // Get green color density based on commit count
                      const colors = [
                        'bg-gray-900 border-gray-950', // 0 commits
                        'bg-emerald-950 border-emerald-900/40', // 1 commit
                        'bg-emerald-800 border-emerald-700/40', // 2 commits
                        'bg-emerald-600 border-emerald-500/40', // 3 commits
                        'bg-emerald-500 border-emerald-400/40', // 4 commits
                        'bg-cyber-blue border-cyber-blue/40 shadow-[0_0_8px_rgba(0,240,255,0.2)]' // 5 commits
                      ];
                      const val = Math.min(day, 5);
                      return (
                        <div 
                          key={dIdx} 
                          className={`w-3.5 h-3.5 rounded-sm border ${colors[val]}`}
                          title={`${day} commits`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-4">
                <span>Less</span>
                <div className="flex gap-1 items-center">
                  <div className="w-2.5 h-2.5 bg-gray-900 border border-gray-950 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-emerald-950 border border-emerald-900 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-emerald-800 border border-emerald-700 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-emerald-600 border border-emerald-500 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-cyber-blue border border-cyber-blue/40 rounded-sm" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Pinned Repos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "AMR-Cleaning-Robot", desc: "ROS 2 navigation stack for industrial differential drive cleaning robots.", lang: "C++", stars: 12, forks: 4 },
                { name: "Scrub_Bot", desc: "Autonomous scrubbing robot fleet simulation and dashboard integrations.", lang: "Python", stars: 10, forks: 3 },
                { name: "ros2-cafe-butler-robot", desc: "Gazebo Harmonic cafe robot coordinating ordering and preemption logic.", lang: "Python", stars: 8, forks: 2 },
                { name: "KKR-Robotics-Community", desc: "ROS 2 Troubleshooting Log and community knowledge guides.", lang: "Markdown", stars: 12, forks: 5 }
              ].map(repo => (
                <div 
                  key={repo.name}
                  className="p-5 bg-cyber-card border border-cyber-border rounded-lg flex flex-col justify-between hover:border-cyber-blue/30 transition duration-300 group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-bold text-white font-mono group-hover:text-cyber-blue transition duration-300">
                        {repo.name}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500">PUBLIC</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {repo.desc}
                    </p>
                  </div>
                  
                  <div className="flex gap-4 font-mono text-[10px] text-gray-500 items-center">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyber-blue" />
                      {repo.lang}
                    </span>
                    <span className="flex items-center gap-1">
                      ★ {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      ⑂ {repo.forks}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Block - Stats Panel & Recent Commits */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Stats */}
            <div className="p-6 bg-cyber-card border border-cyber-border rounded-lg backdrop-blur-md grid grid-cols-3 gap-2 text-center font-mono">
              <div>
                <span className="text-lg font-bold text-white block">★ {githubAnalytics.stats.stars}</span>
                <span className="text-[9px] text-gray-500">STARS</span>
              </div>
              <div className="border-x border-gray-800">
                <span className="text-lg font-bold text-white block">{githubAnalytics.stats.followers}</span>
                <span className="text-[9px] text-gray-500">FOLLOWERS</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white block">{githubAnalytics.stats.commitsThisYear}</span>
                <span className="text-[9px] text-gray-500">COMMITS</span>
              </div>
            </div>

            {/* Recent Commit Log */}
            <div className="p-6 bg-cyber-card border border-cyber-border rounded-lg backdrop-blur-md">
              <h3 className="text-xs font-mono font-bold text-cyber-blue mb-4 uppercase tracking-wider">
                ⚡ RECENT COMMIT ACTIVITY
              </h3>
              
              <div className="space-y-4">
                {githubAnalytics.recentCommits.map((commit, idx) => (
                  <div key={idx} className="border-b border-gray-900 pb-3 last:border-b-0 last:pb-0 font-mono text-xs">
                    <div className="flex justify-between items-center text-[10px] text-cyber-purple mb-1">
                      <span>{commit.repo}</span>
                      <span className="text-gray-600">{commit.date}</span>
                    </div>
                    <p className="text-gray-300 leading-normal text-[11px]">
                      {commit.msg}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
