import React from 'react';
import Antigravity from './components/Antigravity';
import MeshGradient from './components/MeshGradient';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import PortraitCard from './components/PortraitCard';
import SocialCard from './components/SocialCard';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import { portfolioData } from './data/portfolio';

function App() {
  return (
    <>
      <CustomCursor />
      <MeshGradient />
      <Antigravity />
      <Navbar />
      
      <main className="relative w-full flex flex-col pt-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
