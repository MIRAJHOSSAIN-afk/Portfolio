import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Code2, BookOpen, Languages, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const smallTiles = [
    { icon: MapPin, label: "Location", value: "Gazipur, Dhaka", color: "text-red-400" },
    { icon: GraduationCap, label: "Education", value: "CGPA 3.31", color: "text-violet-400" },
    { icon: Briefcase, label: "Status", value: "Open to Software Engineer Intern roles", color: "text-teal-400" },
    { icon: Code2, label: "Core Stack", value: "React, PHP, Python", color: "text-blue-400" },
    { icon: BookOpen, label: "Publication", value: "1 peer-reviewed paper", color: "text-[#FF9FFC]" },
    { icon: Languages, label: "Languages", value: "Bengali, English", color: "text-emerald-400" }
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Large Bio Tile */}
          <motion.div 
            variants={itemVariants}
            className="glass p-8 md:p-10 flex flex-col justify-between md:col-span-2 group hover:-translate-y-1 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
          >
            {/* Soft decorative glow behind text */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="label-mono text-gray-400 mb-4 inline-block px-3 py-1 bg-white/5 rounded-md border border-white/10">Background</h3>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 font-light">
                Computer Science & Engineering graduate (AI & Information Systems). I build full-stack web applications with React, PHP, and MySQL, including REST APIs, secure authentication, and role-based access control. I also deploy low-latency deep learning models on edge hardware.
              </p>
            </div>
            
            <div className="relative z-10 mt-auto">
              <a 
                href={portfolioData.about.resumeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 w-fit"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Small Tiles */}
          {smallTiles.map((tile, idx) => {
            const Icon = tile.icon;
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="glass p-6 flex flex-col justify-center items-start group hover:-translate-y-1 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" style={{ background: 'radial-gradient(circle at center, white 0%, transparent 70%)' }}></div>
                
                <Icon className={`w-8 h-8 mb-4 ${tile.color} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                <span className="label-mono text-gray-400 mb-2">{tile.label}</span>
                <span className="text-white font-medium text-lg leading-snug">{tile.value}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
