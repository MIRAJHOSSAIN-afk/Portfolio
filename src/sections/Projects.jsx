import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Star } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const filters = ['All', 'Web', 'AI/ML', 'IoT'];
const projectCategoryMap = {
  1: ['Web'], // EcoRise
  2: ['AI/ML', 'IoT'] // AgriBot
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = portfolioData.projects.filter(project => {
    if (activeFilter === 'All') return true;
    return projectCategoryMap[project.id]?.includes(activeFilter);
  });

  // Handle Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10 border-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#0A0A0F]/80 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass relative w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col bg-[#0A0A0F]/90 border border-white/20 shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-[#0A0A0F]/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 transition-colors z-20"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 relative overflow-hidden border-b border-white/10">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent opacity-90"></div>
                 {/* Placeholder for actual image */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="text-5xl font-bold tracking-widest">{selectedProject.title.split(':')[0]}</span>
                 </div>
              </div>
              
              <div className="p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="label-mono px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2">
                    <FiGithub className="w-5 h-5" />
                    GitHub Source
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onClick }) {
  const isEcoRise = project.id === 1; // Spans 2 columns on desktop

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className={`glass group cursor-pointer flex flex-col relative overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] ${
        isEcoRise ? 'lg:col-span-2' : 'lg:col-span-1'
      }`}
      onClick={onClick}
    >
      {/* Featured Badge */}
      {isEcoRise && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#FF9FFC] text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md">
          <Star className="w-3.5 h-3.5 fill-current" />
          Featured
        </div>
      )}

      {/* Thumbnail */}
      <div className="w-full h-48 sm:h-64 bg-gray-900 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent opacity-90"></div>
        
        {/* Placeholder typography instead of missing image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700 ease-out">
            <span className="text-3xl font-bold tracking-widest">{project.title.split(':')[0]}</span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10 bg-[#0A0A0F]/30">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
          {project.title}
        </h3>
        
        {/* 2-line description clamp */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tags.map((tag, i) => (
            <span key={i} className="label-mono px-2 py-1 bg-white/5 border border-white/5 rounded text-gray-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()}
            className="btn-primary !py-2 !px-4 !text-sm flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()}
            className="btn-ghost !py-2 !px-4 !text-sm flex items-center gap-2"
          >
            <FiGithub className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      {/* Ambient background glow on hover behind the card */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 via-[#7C3AED]/0 to-[#2563EB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
