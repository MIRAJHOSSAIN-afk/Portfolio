import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative z-10 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Education & Research</h2>
        </motion.div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7C3AED] via-[#2563EB] to-transparent md:-translate-x-1/2 rounded-full opacity-50 z-0"></div>
          
          {/* Education Entries */}
          {portfolioData.education.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={edu.id} className={`relative flex flex-col md:flex-row items-start md:items-center w-full mb-16 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Glowing Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#FF9FFC] shadow-[0_0_15px_#FF9FFC] transform -translate-x-[7px] md:-translate-x-1/2 mt-8 md:mt-0 z-10"></div>
                
                {/* Empty Space for Desktop Alignment */}
                <div className="hidden md:block md:w-[45%]"></div>
                
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                  className={`w-full pl-12 md:pl-0 md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
                >
                  <div className={`glass p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 relative group overflow-hidden border border-white/5 hover:border-white/20 ${isLeft ? 'md:text-right' : 'text-left'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    <div className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                      <span className="label-mono flex items-center justify-center gap-1.5 text-[#FF9FFC] bg-[#FF9FFC]/10 border border-[#FF9FFC]/20 px-3 py-1 rounded-md shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                    </div>
                    
                    <h4 className={`text-lg text-gray-300 mb-4 font-medium flex items-center gap-2 ${isLeft ? 'md:justify-end md:flex-row-reverse' : ''}`}>
                      <GraduationCap className="w-5 h-5 text-[#2563EB]" />
                      {edu.institution}
                    </h4>
                    
                    <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
          
          {/* Publication Entry */}
          <div className="relative flex flex-col items-center w-full mt-24">
             {/* Center Dot for Publication */}
             <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#0D9488] shadow-[0_0_15px_#0D9488] transform -translate-x-[7px] md:-translate-x-1/2 mt-8 md:mt-0 z-10"></div>
             
             {/* Center Card */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="w-full pl-12 md:pl-0 flex justify-center"
             >
               <div className="glass p-8 md:p-10 hover:-translate-y-1 transition-transform duration-300 relative group max-w-3xl w-full border border-white/5 hover:border-[#0D9488]/30">
                 {/* Teal Glow */}
                 <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/0 to-[#0D9488]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                 
                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-[#0D9488]" />
                      <h3 className="text-xl font-bold text-white">Publication</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="label-mono flex items-center gap-1.5 text-gray-400 bg-white/5 px-3 py-1 rounded-md border border-white/10">
                        <Calendar className="w-3.5 h-3.5" />
                        {portfolioData.publications[0].date}
                      </span>
                      <span className="label-mono flex items-center gap-1.5 text-gray-400 bg-white/5 px-3 py-1 rounded-md border border-white/10">
                        <MapPin className="w-3.5 h-3.5" />
                        {portfolioData.publications[0].location}
                      </span>
                    </div>
                 </div>
                 
                 <h4 className="text-lg md:text-xl text-gray-200 mb-4 font-semibold leading-snug">
                   "{portfolioData.publications[0].title}"
                 </h4>
                 
                 <p className="text-gray-400 font-light italic mb-4 border-l-2 border-[#0D9488]/50 pl-4 py-1">
                   Published in: {portfolioData.publications[0].conference}
                 </p>
                 <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                   {portfolioData.publications[0].description}
                 </p>
               </div>
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
