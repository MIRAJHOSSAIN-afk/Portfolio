import React, { useEffect, useRef } from 'react';

export default function MeshGradient() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let animationId;
    let t = 0;
    
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const animate = () => {
      t += 0.0015;
      if (containerRef.current) {
        // Slow drifting motion by updating CSS custom properties
        containerRef.current.style.setProperty('--x1', `${Math.sin(t) * 10 + 50}%`);
        containerRef.current.style.setProperty('--y1', `${Math.cos(t) * 10 + 50}%`);
        containerRef.current.style.setProperty('--x2', `${Math.sin(t + 2) * 15 + 60}%`);
        containerRef.current.style.setProperty('--y2', `${Math.cos(t + 2) * 10 + 40}%`);
        containerRef.current.style.setProperty('--x3', `${Math.sin(t + 4) * 20 + 30}%`);
        containerRef.current.style.setProperty('--y3', `${Math.cos(t + 4) * 20 + 70}%`);
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-20 pointer-events-none opacity-40 mix-blend-screen overflow-hidden"
      style={{
        '--x1': '50%', '--y1': '50%',
        '--x2': '60%', '--y2': '40%',
        '--x3': '30%', '--y3': '70%'
      }}
    >
      <div 
        className="absolute w-[80vw] h-[80vh] rounded-full blur-[100px] transition-all duration-1000 ease-linear"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, transparent 70%)',
          top: 'calc(var(--y1) - 40vh)',
          left: 'calc(var(--x1) - 40vw)',
        }}
      />
      <div 
        className="absolute w-[70vw] h-[70vh] rounded-full blur-[120px] transition-all duration-1000 ease-linear"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, transparent 70%)',
          top: 'calc(var(--y2) - 35vh)',
          left: 'calc(var(--x2) - 35vw)',
        }}
      />
      <div 
        className="absolute w-[90vw] h-[90vh] rounded-full blur-[140px] transition-all duration-1000 ease-linear"
        style={{
          background: 'radial-gradient(circle, rgba(13, 148, 136, 0.4) 0%, transparent 70%)',
          top: 'calc(var(--y3) - 45vh)',
          left: 'calc(var(--x3) - 45vw)',
        }}
      />
    </div>
  );
}
