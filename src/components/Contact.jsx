import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon, PhoneIcon } from './Icons';

export default function Contact() {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const recruiterLinks = [
    { 
      icon: <MailIcon size={20} />, 
      label: 'Email Address', 
      value: personalInfo.email, 
      actionLabel: 'COPY EMAIL',
      action: () => copyToClipboard(personalInfo.email, 'email'),
      color: 'text-cyber-blue border-cyber-blue/30 bg-cyber-blue/5' 
    },
    { 
      icon: <PhoneIcon size={20} />, 
      label: 'Phone Number', 
      value: personalInfo.phone, 
      actionLabel: 'COPY PHONE',
      action: () => copyToClipboard(personalInfo.phone, 'phone'),
      color: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/5' 
    },
    { 
      icon: <LinkedinIcon size={20} />, 
      label: 'LinkedIn Profile', 
      value: 'linkedin.com/in/sundaram-n', 
      actionLabel: 'VISIT LINKEDIN',
      action: () => window.open(personalInfo.linkedin, '_blank'),
      color: 'text-cyber-purple border-cyber-purple/30 bg-cyber-purple/5' 
    },
    { 
      icon: <GithubIcon size={20} />, 
      label: 'GitHub Repositories', 
      value: 'github.com/sundaramn353-dot', 
      actionLabel: 'VISIT GITHUB',
      action: () => window.open(personalInfo.github, '_blank'),
      color: 'text-gray-400 border-gray-800 bg-gray-900/30' 
    }
  ];

  return (
    <section id="contact" className="py-24 bg-cyber-bg relative z-10 border-b border-cyber-border/40">
      
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(0,240,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-mono border border-cyber-blue/30 rounded-full bg-cyber-blue/5 text-cyber-blue tracking-widest uppercase inline-block mb-3">
            RECRUITER PORTAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Fast-Track Connection & Direct Hiring
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Ready to integrate immediately into enterprise robotics operations, SLAM tuning, or navigation deployment workflows.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel - Recruiter CTAs */}
          <div className="md:col-span-7 space-y-4">
            {recruiterLinks.map((link, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 bg-cyber-card border border-cyber-border rounded-lg flex items-center justify-between gap-4 group hover:border-cyber-blue/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className={`p-3 rounded border ${link.color} flex-shrink-0`}>
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">{link.label}</span>
                    <span className="text-xs sm:text-sm font-mono text-white truncate block mt-0.5">{link.value}</span>
                  </div>
                </div>

                <button 
                  onClick={link.action}
                  className="px-3 py-1.5 border border-gray-800 rounded bg-gray-900/50 hover:bg-cyber-blue hover:text-cyber-bg hover:border-cyber-blue font-mono text-[9px] sm:text-[10px] font-bold text-gray-400 transition duration-300 whitespace-nowrap"
                >
                  {copiedText === link.label.split(' ')[0].toLowerCase() ? 'COPIED!' : link.actionLabel}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Right panel - Resume Spec Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 p-6 bg-cyber-card border border-cyber-border rounded-lg flex flex-col justify-between backdrop-blur-md relative overflow-hidden"
          >
            {/* Scan grid decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_95%,rgba(0,240,255,0.02)_95%)] bg-[size:100%_15px] pointer-events-none" />

            <div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-3 mb-4">
                <span className="text-[9px] font-mono text-cyber-blue font-bold tracking-widest uppercase">📄 RESUME_SPEC_V4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
              </div>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPinIcon size={16} className="text-cyber-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white text-xs">Current Location</span>
                    <span className="text-gray-400 text-xs font-mono">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="space-y-1 bg-cyber-blue/5 border border-cyber-blue/15 p-3 rounded font-mono text-[10px] sm:text-xs">
                  <p className="text-gray-500 font-bold uppercase mb-1">Target Roles:</p>
                  <p className="text-white">• Senior ROS 2 Systems Developer</p>
                  <p className="text-white">• Autonomous Navigation Software Engineer</p>
                  <p className="text-white">• Robotics Software Engineer (AMR / Fleets)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3 relative z-10">
              <a 
                href="resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center block py-3 font-semibold text-xs rounded bg-gradient-to-r from-cyber-blue to-cyber-purple text-cyber-bg shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition duration-300"
              >
                Download Resume (PDF)
              </a>
              
              <div className="flex justify-between font-mono text-[9px] text-gray-600">
                <span>DDS_STATUS: COMMITTED</span>
                <span>PING_OK</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
