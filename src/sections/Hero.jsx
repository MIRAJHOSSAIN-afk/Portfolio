import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ChevronDown, Brain, Eye, Cpu, Network, Layers, Crosshair } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiReact, SiPhp, SiMysql, SiPython, SiOpencv, SiNodedotjs, SiDocker, SiPytorch, SiFastapi, SiScikitlearn } from 'react-icons/si';
import { portfolioData } from '../data/portfolio';
import PortraitCard from '../components/PortraitCard';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const techStack = ["React", "PHP", "MySQL", "Python", "OpenCV", "Node.js", "Docker", "OpenCV",
    "PyTorch",
    "YOLO",
    "Deep Learning",
    "Computer Vision",
    "ONNX",
    "Edge AI",
    "NCNN",
    "FastAPI",
    "Scikit-Learn"];

  const techIcons = {
    "React": SiReact,
    "PHP": SiPhp,
    "MySQL": SiMysql,
    "Python": SiPython,
    "OpenCV": SiOpencv,
    "Node.js": SiNodedotjs,
    "Docker": SiDocker,
    "PyTorch": SiPytorch,
    "YOLO": Crosshair,
    "Deep Learning": Brain,
    "Computer Vision": Eye,
    "ONNX": Network,
    "Edge AI": Cpu,
    "NCNN": Layers,
    "FastAPI": SiFastapi,
    "Scikit-Learn": SiScikitlearn
  };

  const uniqueTechStack = [...new Set(techStack)];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-24 overflow-hidden">

      <div className="flex-1 flex flex-col justify-center items-center w-full px-6 max-w-7xl mx-auto z-10 mt-8">

        {/* 2-Column Grid */}
        <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-between">

          {/* Left Column: Glass Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:col-span-7 xl:col-span-7 glass p-8 md:p-12 text-center relative shadow-2xl rounded-3xl flex flex-col items-center justify-center"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="label-mono px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 shadow-sm backdrop-blur-md">
                // B.SC. CSE · AIUB · 2026
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1' }}
            >
              Miraj Hossain
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-2xl font-semibold text-gray-200 mb-6"
            >
              Software Engineer | Full-Stack & AI Developer
            </motion.h2>

            {/* Intro */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-gray-400 max-w-xl mb-10 leading-relaxed mx-auto"
            >
              Computer Science & Engineering graduate focused on clean, secure backend code and deep learning at the edge.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-8 w-full">
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                View Projects
              </a>
              <a href={portfolioData.about.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto">
                Download CV
              </a>
            </motion.div>

            {/* Social Glass Chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
              <a href={portfolioData.contact.socialNetworks[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all hover:-translate-y-1 hover:border-white/20 text-gray-300 hover:text-white group text-xs">
                <FiGithub className="w-3.5 h-3.5 group-hover:text-[#2563EB] transition-colors" />
                <span>GitHub</span>
              </a>
              <a href={portfolioData.contact.socialNetworks[1].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all hover:-translate-y-1 hover:border-white/20 text-gray-300 hover:text-white group text-xs">
                <FiLinkedin className="w-3.5 h-3.5 group-hover:text-[#2563EB] transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 px-3 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all hover:-translate-y-1 hover:border-white/20 text-gray-300 hover:text-white group text-xs">
                <Mail className="w-3.5 h-3.5 group-hover:text-[#2563EB] transition-colors" />
                <span>Email</span>
              </a>
              <a href={`tel:${portfolioData.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 px-3 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all hover:-translate-y-1 hover:border-white/20 text-gray-300 hover:text-white group text-xs">
                <Phone className="w-3.5 h-3.5 group-hover:text-[#2563EB] transition-colors" />
                <span>Phone</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait Card */}
          <div className="w-full lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <PortraitCard />
          </div>

        </div>

        {/* Scroll Down Chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 z-10 hidden lg:flex"
        >
          <a href="#about" className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group relative shadow-lg backdrop-blur-md">
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-white animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Tech Marquee */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-black/30 backdrop-blur-md py-3 overflow-hidden z-20">
        <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
          {[...uniqueTechStack, ...uniqueTechStack, ...uniqueTechStack].map((tech, idx) => {
            const Icon = techIcons[tech] || Cpu;
            return (
              <div key={idx} className="flex items-center justify-center min-w-[150px]">
                <span className="text-xs font-medium text-gray-400 tracking-wider flex items-center gap-2 group transition-colors hover:text-white">
                  <Icon className="w-4 h-4 text-[#7C3AED] group-hover:text-[#FF9FFC] transition-colors" />
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
