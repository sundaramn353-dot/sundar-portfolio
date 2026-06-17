import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { rosKnowledge } from '../data/portfolioData';

export default function RosKnowledge() {
  const [selectedId, setSelectedId] = useState('dds');

  const selectedTopic = rosKnowledge.find(k => k.id === selectedId);

  return (
    <section id="knowledge" className="py-24 bg-cyber-bg relative border-b border-cyber-border/40 z-10">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-mono border border-cyber-blue/30 rounded-full bg-cyber-blue/5 text-cyber-blue tracking-widest uppercase inline-block mb-3">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Interactive ROS 2 Subsystem Map
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Select any subsystem node to inspect DDS configuration guidelines, TF2 synchronization rules, and real-time execution parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Block - Interactive Nodes Grid */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-3 self-center">
            {rosKnowledge.map((k) => {
              const isSelected = selectedId === k.id;
              return (
                <button
                  key={k.id}
                  onClick={() => setSelectedId(k.id)}
                  className={`p-4 rounded border font-mono text-[10px] sm:text-xs text-center flex flex-col justify-center items-center h-24 transition duration-300 select-none ${
                    isSelected 
                      ? 'border-cyber-blue text-cyber-blue bg-cyber-blue/5 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold' 
                      : 'border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 bg-cyber-card/20'
                  }`}
                >
                  <span className="block mb-2 font-bold opacity-60">NODE</span>
                  <span className="uppercase tracking-wider font-display text-[9px] sm:text-[10px]">{k.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Block - Inspector Panel */}
          <div className="lg:col-span-6 flex">
            <div className="w-full p-6 md:p-8 bg-cyber-card border border-cyber-border rounded-lg backdrop-blur-md flex flex-col justify-between relative overflow-hidden">
              
              {/* Scanline decoration */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_98%,rgba(0,240,255,0.05)_98%)] bg-[size:100%_20px] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                    <span className="text-[10px] font-mono text-cyber-blue font-bold tracking-widest uppercase">
                      📡 SUBSYSTEM INPSECTOR // {selectedTopic.id}
                    </span>
                    <span className="text-[9px] font-mono text-gray-500">ADDR: 0x0{selectedTopic.id.charCodeAt(0).toString(16)}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-2">
                    {selectedTopic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                    {selectedTopic.summary}
                  </p>

                  <div className="p-4 bg-cyber-blue/5 border border-cyber-blue/15 rounded text-xs sm:text-sm leading-relaxed text-cyber-blue/90 font-mono shadow-inner">
                    <span className="font-bold block text-[9px] text-gray-500 mb-1">PROD INTEGRATION RETROSPECTIVE:</span>
                    {selectedTopic.details}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-4 border-t border-gray-800 flex justify-between font-mono text-[9px] text-gray-600">
                <span>INSPECTING_NODE: {selectedTopic.id.toUpperCase()}</span>
                <span>THREAD: REAL_TIME [FIFO]</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
