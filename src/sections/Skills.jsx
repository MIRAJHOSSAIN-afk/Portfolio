import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const filterCategories = {
  'All': ['Languages', 'Backend & APIs', 'Frontend', 'Databases', 'Tools & Practices', 'AI & Computer Vision', 'Hardware & IoT'],
  'Web': ['Languages', 'Backend & APIs', 'Frontend', 'Databases', 'Tools & Practices'],
  'AI/ML': ['Languages', 'AI & Computer Vision', 'Databases', 'Tools & Practices'],
  'IoT': ['Languages', 'Hardware & IoT', 'AI & Computer Vision', 'Tools & Practices']
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredSkills = portfolioData.skills.filter(skill => 
    filterCategories[activeFilter].includes(skill.category)
  );

  return (
    <section id="skills" className="py-24 px-6 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {Object.keys(filterCategories).map((filter) => (
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((categoryGroup, index) => (
              <SkillCard key={categoryGroup.category} categoryGroup={categoryGroup} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ categoryGroup, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="glass p-6 md:p-8 flex flex-col relative overflow-hidden group hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-6 text-white">{categoryGroup.category}</h3>
      
      <div className="flex flex-wrap gap-3 mb-6 relative z-10">
        {categoryGroup.items.map((skill, i) => (
          <span 
            key={i} 
            className="px-3 py-1.5 bg-[#0A0A0F]/50 border border-white/5 rounded-lg text-sm text-gray-300 font-medium transition-all hover:border-[#7C3AED]/50 hover:text-white hover:bg-[#7C3AED]/10 hover:shadow-[0_0_15px_rgba(124,58,237,0.2)] cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Animated Gradient Progress Bar */}
      <div className="mt-auto pt-4 border-t border-white/5 relative z-10">
        <div className="h-1.5 w-full bg-[#0A0A0F] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#0D9488]"
          />
        </div>
      </div>
      
      {/* Ambient background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
