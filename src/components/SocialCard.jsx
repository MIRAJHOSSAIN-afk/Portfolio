import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaXTwitter, 
  FaWhatsapp, 
  FaDiscord 
} from 'react-icons/fa6';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  whatsapp: FaWhatsapp,
  discord: FaDiscord
};

export default function SocialCard({ socials }) {
  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg md:text-xl font-medium text-gray-300 mb-5">
        Find me on <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#FF9FFC]">SOCIAL MEDIA</span>
      </h3>
      
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {socials.map((social) => {
          const Icon = iconMap[social.icon] || FaGithub;
          const isTodo = social.url === 'TODO';
          
          return (
            <a
              key={social.name}
              href={isTodo ? '#' : social.url}
              target={isTodo ? '_self' : '_blank'}
              rel={isTodo ? '' : 'noopener noreferrer'}
              aria-label={`Visit my ${social.name}`}
              className={`group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl transition-all duration-300 ${
                isTodo ? 'opacity-60 cursor-not-allowed' : 'motion-safe:hover:-translate-y-[3px] hover:shadow-[0_4px_20px_rgba(124,58,237,0.15)] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50'
              }`}
              title={isTodo ? 'Coming soon' : social.name}
              onClick={(e) => { if(isTodo) e.preventDefault(); }}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#FF9FFC] transition-colors" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {social.name}
                </span>
              </div>
              
              {!isTodo && (
                <ArrowUpRight className="w-4 h-4 text-gray-500 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
