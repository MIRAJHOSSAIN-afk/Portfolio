import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import SocialCard from '../components/SocialCard';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormState('loading');
    
    // TODO: Integrate EmailJS, Formspree, or your backend here
    
    // Simulating network request for UI demo
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form state after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <div className="glass p-8 md:p-12 border border-white/5 hover:border-white/10 transition-colors shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side: Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Let's build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#FF9FFC]">something.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light">
                Open to internships, freelance projects, and collaborations. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-col gap-6">
                {/* Email Copy Button */}
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl transition-all group w-full max-w-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-[#FF9FFC]" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Email me at</p>
                      <p className="text-gray-200 font-medium tracking-wide">{portfolioData.contact.email}</p>
                    </div>
                  </div>
                  <div className="relative w-5 h-5">
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute inset-0">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        </motion.div>
                      ) : (
                        <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute inset-0">
                          <Copy className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
                
                {/* Phone */}
                <div className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Call me at</p>
                    <p className="text-gray-200 font-medium tracking-wide">{portfolioData.contact.phone}</p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-[#0D9488]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-200 font-medium tracking-wide">{portfolioData.contact.address}</p>
                  </div>
                </div>
                
                {/* Social Media Card */}
                <div className="mt-2">
                  <SocialCard socials={portfolioData.contact.socialNetworks} />
                </div>
              </div>
            </div>
            
            {/* Right Side: Form */}
            <div className="bg-[#0A0A0F]/50 p-6 md:p-8 rounded-2xl border border-white/5 relative">
              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className="absolute inset-0 z-20 bg-[#0A0A0F]/90 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-emerald-500/20"
                  >
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { type: "spring", delay: 0.2 } }}>
                      <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Floating Label Input: Name */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#FF9FFC] transition-colors placeholder-transparent" 
                    placeholder="John Doe"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#FF9FFC] peer-focus:text-sm cursor-text"
                  >
                    Name
                  </label>
                </div>
                
                {/* Floating Label Input: Email */}
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#FF9FFC] transition-colors placeholder-transparent" 
                    placeholder="john@example.com"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#FF9FFC] peer-focus:text-sm cursor-text"
                  >
                    Email address
                  </label>
                </div>
                
                {/* Floating Label Textarea: Message */}
                <div className="relative">
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#FF9FFC] transition-colors placeholder-transparent resize-none" 
                    placeholder="Hello there..."
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#FF9FFC] peer-focus:text-sm cursor-text"
                  >
                    Message
                  </label>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={formState === 'loading'}
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
