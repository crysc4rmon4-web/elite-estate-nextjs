"use client";
import { useState, useEffect } from 'react';
import { CONFIG } from '@/config/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-linen/95 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-10'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-serif tracking-tighter transition-colors ${
          isScrolled ? 'text-obsidian' : 'text-white'
        }`}>
          CARMONA<span className="italic text-gold italic">·</span>ARCH
        </a>
        
        <div className="hidden md:flex gap-12">
          {['Properties', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold hover:text-gold transition-colors ${
                isScrolled ? 'text-obsidian' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <a 
          href="#contact"
          className={`hidden md:block border px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
            isScrolled 
              ? 'border-obsidian text-obsidian hover:bg-obsidian hover:text-white' 
              : 'border-white/20 text-white hover:bg-white hover:text-obsidian'
          }`}
        >
          Book a Visit
        </a>
      </div>
    </nav>
  );
}