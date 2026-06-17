import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects } from '../data/portfolioData';
import { GithubIcon, RobotIcon, ToolsIcon, CompassIcon, GlobeIcon } from './Icons';

// Custom component to render the ROS 2 node graphs for each project
function ArchitectureGraph({ projectId }) {
  if (projectId === 1) {
    // AMR Nav Stack
    return (
      <div className="bg-cyber-bg/95 border border-cyber-border rounded-lg p-4 font-mono text-xs text-gray-300 my-4 space-y-4 shadow-inner">
        <div className="text-[10px] text-cyber-blue font-bold border-b border-cyber-border pb-1 mb-2">
          📡 ROS 2 TRANSFORMS & DATAFLOW DIAGRAM
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex gap-2">
            <div className="border border-gray-800 bg-gray-900/50 px-2 py-1 rounded text-center">
              <span className="block text-[8px] text-gray-500">SENSOR</span>
              <span>/scan [LaserScan]</span>
            </div>
            <div className="border border-gray-800 bg-gray-900/50 px-2 py-1 rounded text-center">
              <span className="block text-[8px] text-gray-500">SENSOR</span>
              <span>/odom [Odometry]</span>
            </div>
          </div>
          <div className="text-cyber-blue text-sm">↓</div>
          <div className="border border-cyber-blue/30 bg-cyber-blue/5 px-3 py-1.5 rounded text-center max-w-xs">
            <span className="block text-[8px] text-cyber-blue font-bold">EKF ESTIMATOR</span>
            <span>/robot_localization</span>
            <span className="block text-[8px] text-gray-400 mt-1">Publishes TF: odom ➔ base_link</span>
          </div>
          <div className="text-cyber-blue text-sm">↓</div>
          <div className="flex gap-2 items-center justify-center">
            <div className="border border-purple-900/30 bg-purple-900/10 px-2 py-1 rounded text-center">
              <span className="block text-[8px] text-cyber-purple font-bold">LOCALIZER</span>
              <span>AMCL Node</span>
              <span className="block text-[8px] text-gray-400">TF: map ➔ odom</span>
            </div>
            <div className="border border-[#10b981]/30 bg-[#10b981]/5 px-2 py-1 rounded text-center">
              <span className="block text-[8px] text-emerald-500 font-bold">CONTROLLER</span>
              <span>Nav2 Controller (DWB)</span>
              <span className="block text-[8px] text-gray-400">Publishes: /cmd_vel</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (projectId === 2) {
    // Multi-robot Fleet
    return (
      <div className="bg-cyber-bg/95 border border-cyber-border rounded-lg p-4 font-mono text-xs text-gray-300 my-4 space-y-4 shadow-inner">
        <div className="text-[10px] text-cyber-blue font-bold border-b border-cyber-border pb-1 mb-2">
          📡 MULTI-AGENT NAMESPACE COORDINATOR
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="border border-cyber-purple/30 bg-cyber-purple/5 px-3 py-1 rounded text-center">
            <span className="block text-[8px] text-cyber-purple font-bold">OPERATIONS HOST</span>
            <span>React Fleet Dashboard</span>
          </div>
          <div className="text-cyber-blue text-sm">⇅ WebSocket [rosbridge_server]</div>
          <div className="border border-cyber-blue/30 bg-cyber-blue/5 px-3 py-1.5 rounded text-center w-full max-w-[280px]">
            <span className="block text-[8px] text-cyber-blue font-bold">CENTRAL SCHEDULER</span>
            <span>Fleet Manager Node</span>
            <span className="block text-[8px] text-gray-400">Resolves conflicts, sends nav goals</span>
          </div>
          <div className="text-cyber-blue text-sm">↓</div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="border border-gray-800 bg-gray-900/50 p-2 rounded text-center">
              <span className="block text-[9px] font-bold text-gray-400">/robot_1/</span>
              <span>Nav2 Stack</span>
              <span className="block text-[7px] text-gray-500">TF: robot_1/map ➔ odom</span>
            </div>
            <div className="border border-gray-800 bg-gray-900/50 p-2 rounded text-center">
              <span className="block text-[9px] font-bold text-gray-400">/robot_2/</span>
              <span>Nav2 Stack</span>
              <span className="block text-[7px] text-gray-500">TF: robot_2/map ➔ odom</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 3) {
    // SLAM Toolbox
    return (
      <div className="bg-cyber-bg/95 border border-cyber-border rounded-lg p-4 font-mono text-xs text-gray-300 my-4 space-y-4 shadow-inner">
        <div className="text-[10px] text-cyber-blue font-bold border-b border-cyber-border pb-1 mb-2">
          📡 CARTOGRAPHER SLAM SLIP-ROBUST FLOW
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex gap-2">
            <div className="border border-gray-800 bg-gray-900/50 px-2 py-1 rounded text-center">
              <span>IMU Euler / Accel</span>
            </div>
            <div className="border border-gray-800 bg-gray-900/50 px-2 py-1 rounded text-center">
              <span>Lidar Scan Match</span>
            </div>
          </div>
          <div className="text-cyber-blue text-sm">↓</div>
          <div className="border border-cyber-blue/30 bg-cyber-blue/5 px-3 py-1.5 rounded text-center max-w-xs">
            <span className="block text-[8px] text-cyber-blue font-bold">OPTIMIZATION SOLVER</span>
            <span>Ceres Scan Matcher</span>
            <span className="block text-[8px] text-gray-400">Submap loop constraints solver</span>
          </div>
          <div className="text-cyber-blue text-sm">↓</div>
          <div className="border border-[#10b981]/30 bg-[#10b981]/5 px-3 py-1 rounded text-center">
            <span className="block text-[8px] text-emerald-500 font-bold">GRID PUBLISHER</span>
            <span>Occupancy Grid Node ➔ /map</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 4) {
    // MoveIt 2
    return (
      <div className="bg-cyber-bg/95 border border-cyber-border rounded-lg p-4 font-mono text-xs text-gray-300 my-4 space-y-4 shadow-inner">
        <div className="text-[10px] text-cyber-blue font-bold border-b border-cyber-border pb-1 mb-2">
          📡 MOVEIT 2 TRAJECTORY PLANNING DATAFLOW
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="border border-gray-800 bg-gray-900/50 px-2 py-1 rounded text-center">
            <span>Dynamic PointCloud (3D Camera)</span>
          </div>
          <div className="text-cyber-blue text-sm">↓</div>
          <div className="border border-cyber-purple/30 bg-cyber-purple/5 px-3 py-1 rounded text-center">
            <span className="block text-[8px] text-cyber-purple font-bold">PLANNING SCENE</span>
            <span>Octomap Server Node</span>
            <span className="block text-[8px] text-gray-400">3D Obstacle voxel grid creation</span>
          </div>
          <div className="text-cyber-blue text-sm">↓</div>
          <div className="border border-cyber-blue/30 bg-cyber-blue/5 px-3 py-1.5 rounded text-center max-w-xs">
            <span className="block text-[8px] text-cyber-blue font-bold">MOTION PLANNER</span>
            <span>Pilz Industrial Planner</span>
            <span className="block text-[8px] text-gray-400">Computes collision-free joint angles</span>
          </div>
          <div className="text-cyber-blue text-sm">↓</div>
          <div className="border border-[#10b981]/30 bg-[#10b981]/5 px-3 py-1 rounded text-center">
            <span>Joint Trajectory Controller</span>
          </div>
        </div>
      </div>
    );
  }

  // micro-ROS
  return (
    <div className="bg-cyber-bg/95 border border-cyber-border rounded-lg p-4 font-mono text-xs text-gray-300 my-4 space-y-4 shadow-inner">
      <div className="text-[10px] text-cyber-blue font-bold border-b border-cyber-border pb-1 mb-2">
        📡 MICRO-ROS REAL-TIME CLIENT-AGENT BRIDGE
      </div>
      <div className="flex flex-col gap-3 items-center">
        <div className="border border-gray-800 bg-gray-900/50 p-2 rounded text-center w-full">
          <span className="block text-[8px] text-gray-500">HARDWARE LAYER</span>
          <span>ESP32 (Wheel Encoders, IMU, Motor Drivers)</span>
        </div>
        <div className="text-cyber-purple text-sm">↓ CAN Bus / I2C / PWM</div>
        <div className="border border-cyber-purple/30 bg-cyber-purple/5 px-3 py-1.5 rounded text-center w-full">
          <span className="block text-[8px] text-cyber-purple font-bold">EMBEDDED CLIENT (FreeRTOS)</span>
          <span>micro-ROS Client node</span>
          <span className="block text-[7px] text-gray-400">Serial/Wi-Fi transport protocol layer</span>
        </div>
        <div className="text-cyber-blue text-sm">⇅ Serial Transport / Wi-Fi UDP</div>
        <div className="border border-cyber-blue/30 bg-cyber-blue/5 px-3 py-1 rounded text-center w-full">
          <span className="block text-[8px] text-cyber-blue font-bold">ROBOT PC AGENT</span>
          <span>micro-ROS Agent Node ➔ ROS 2 DDS</span>
        </div>
      </div>
    </div>
  );
}

function ProjectMedia({ project }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-cyber-border group shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Decorative scanner frame */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyber-blue/60" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyber-blue/60" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyber-blue/60" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyber-blue/60" />
        
        {/* REC Status Indicator */}
        <div className="absolute top-4 left-10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
          <span className="text-[9px] font-mono text-white/70 uppercase tracking-widest font-bold">CAM_FEED_01</span>
        </div>
      </div>

      {project.type === 'video' ? (
        <>
          <video 
            ref={videoRef}
            src={project.image}
            loop
            muted
            playsInline
            onClick={togglePlay}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300 cursor-pointer"
          />
          {!isPlaying && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer z-20"
            >
              <div className="w-14 h-14 rounded-full bg-cyber-blue/80 flex items-center justify-center text-cyber-bg shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-110 transition duration-300">
                <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </>
      ) : (
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300"
          onError={(e) => {
            // Fallback image in case the local ones are not loaded or not matching
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?fit=crop&w=800&h=450";
          }}
        />
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-6 bg-cyber-card border border-cyber-border rounded-lg backdrop-blur-md flex flex-col justify-between hover:border-cyber-blue/30 transition-all duration-300 shadow-lg relative overflow-hidden group">
      
      {/* Neon border hover */}
      <div className="absolute inset-0 border border-cyber-blue/0 group-hover:border-cyber-blue/10 pointer-events-none transition duration-300 rounded-lg" />
      
      <div>
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyber-blue/5 border border-cyber-blue/20 rounded text-cyber-blue">
              <RobotIcon size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display leading-tight">{project.title}</h3>
              <p className="text-xs text-cyber-blue font-mono mt-0.5">{project.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Media Player */}
        <ProjectMedia project={project} />

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 my-4">
          {project.tech.map(t => (
            <span key={t} className="px-2 py-0.5 text-[10px] font-mono border border-gray-800 bg-gray-900/30 text-gray-400 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Short Summary Description */}
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans">
          {project.problem.slice(0, 110)}... <span className="text-cyber-blue cursor-pointer font-semibold" onClick={() => setIsExpanded(true)}>Read Full Spec →</span>
        </p>
      </div>

      {/* Primary Actions */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
        <button 
          onClick={() => setIsExpanded(true)}
          className="flex-1 text-center py-2 text-xs font-mono font-bold text-cyber-blue border border-cyber-blue/30 bg-cyber-blue/5 rounded hover:bg-cyber-blue hover:text-cyber-bg transition duration-300"
        >
          View System Architecture
        </button>
        {project.github && (
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-gray-800 text-gray-400 hover:text-white hover:border-white rounded transition duration-300"
            aria-label="GitHub Repository"
          >
            <GithubIcon size={16} />
          </a>
        )}
      </div>

      {/* Expanded Spec Modal/Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-cyber-bg border border-cyber-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 font-sans relative shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white font-mono text-sm border border-gray-800 px-2 py-1 rounded bg-gray-900/50 transition"
              >
                ESC ✕
              </button>

              {/* Title Header */}
              <div className="border-b border-gray-800 pb-4 mb-6">
                <span className="text-[10px] font-mono text-cyber-blue uppercase tracking-widest">// DETAILED ROS 2 SYSTEM SPEC</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mt-1">{project.title}</h3>
                <p className="text-xs text-cyber-blue font-mono mt-0.5">{project.subtitle}</p>
              </div>

              {/* Detailed Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold font-display uppercase tracking-wider text-red-400">Problem Statement</h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-display uppercase tracking-wider text-emerald-400">Technical Solution</h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-1">{project.solution}</p>
                  </div>
                </div>
                
                {/* Node Graph Column */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold font-display uppercase tracking-wider text-cyber-blue">DDS Architecture Diagram</h4>
                    <ArchitectureGraph projectId={project.id} />
                  </div>
                </div>
              </div>

              {/* Metrics & Takeaways Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-gray-800">
                {/* Performance Metrics */}
                <div className="md:col-span-5 bg-cyber-card/50 border border-cyber-border/40 p-4 rounded-lg">
                  <h4 className="text-xs font-bold font-display uppercase tracking-wider text-cyber-blue mb-3">Key Performance Metrics</h4>
                  <div className="space-y-2 font-mono text-xs">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-900 pb-1">
                        <span className="text-gray-500">{key}:</span>
                        <span className="text-white font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lessons Learned */}
                <div className="md:col-span-7">
                  <h4 className="text-xs font-bold font-display uppercase tracking-wider text-amber-500 mb-2">Engineering Retrospective</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <span className="font-bold text-amber-500 font-mono">Lessons Learned:</span> {project.lessons}
                  </p>
                  <div className="mt-4 flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue rounded hover:bg-cyber-blue hover:text-cyber-bg transition duration-300"
                      >
                        <GithubIcon size={14} /> View Source Code
                      </a>
                    )}
                    <button 
                      onClick={() => setIsExpanded(false)}
                      className="px-3 py-1.5 text-xs font-mono border border-gray-800 text-gray-400 rounded hover:text-white hover:bg-gray-900 transition"
                    >
                      Close Spec Panel
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-cyber-bg relative border-b border-cyber-border/40 z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(157,78,221,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-mono border border-cyber-blue/30 rounded-full bg-cyber-blue/5 text-cyber-blue tracking-widest uppercase inline-block mb-3">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Production-Grade ROS 2 Deployments
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Full-stack autonomous systems engineering. Click any project card to inspect performance metrics, ROS 2 node architecture pipelines, and engineering retrospectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
