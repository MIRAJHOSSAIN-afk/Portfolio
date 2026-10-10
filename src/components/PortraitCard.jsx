import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function PortraitCard() {
  const [imageError, setImageError] = useState(false);
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    // Only apply tilt on fine pointers (desktop) and if not reduced motion
    if (shouldReduceMotion || window.matchMedia('(pointer: coarse)').matches) return;
    
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[4/5] mx-auto perspective-1000">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/30 to-[#2563EB]/30 rounded-3xl blur-3xl transform scale-90" />

      {/* Main Glass Frame */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.96, filter: 'blur(12px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass w-full h-full rounded-3xl relative z-10 group overflow-visible"
      >
        {/* Animated Gradient Ring */}
        <div 
          className={`absolute inset-0 rounded-3xl opacity-70 pointer-events-none -inset-[2px] -z-10 ${shouldReduceMotion ? '' : 'animate-spin-slow'}`}
          style={{
            background: 'conic-gradient(from 0deg, #7C3AED, #2563EB, #0D9488, #7C3AED)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '2px'
          }}
        />

        {/* Photo Container */}
        <div className="absolute inset-[4px] rounded-[1.4rem] overflow-hidden bg-[#0A0A0F] border border-white/5">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#FF9FFC]">
                {portfolioData.hero.portrait.fallbackInitials}
              </span>
            </div>
          ) : (
            <img 
              src={portfolioData.hero.portrait.image}
              alt={portfolioData.hero.name || "Miraj Hossain"}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />
          )}

          {/* Shine overlay */}
          <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-45deg] pointer-events-none ${shouldReduceMotion ? '' : 'group-hover:animate-shine'}`} />
        </div>
      </motion.div>

      {/* Floating Chips */}
      <motion.div 
        animate={{ y: shouldReduceMotion ? 0 : [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-6 z-20"
      >
        <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 shadow-lg backdrop-blur-md">
          <div className={`w-2 h-2 rounded-full bg-emerald-400 ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
          <span className="label-mono text-[10px] text-gray-200 m-0 leading-none">{portfolioData.hero.portrait.chip1}</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: shouldReduceMotion ? 0 : [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-6 z-20"
      >
        <div className="glass px-3 py-1.5 rounded-full border border-white/10 shadow-lg backdrop-blur-md">
          <span className="label-mono text-[10px] text-gray-200 m-0 leading-none">{portfolioData.hero.portrait.chip2}</span>
        </div>
      </motion.div>
    </div>
  );
}
