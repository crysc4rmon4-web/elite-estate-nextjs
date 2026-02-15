"use client";
import { useState, useEffect } from 'react';
import { CONFIG } from '@/config/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-xl font-serif tracking-tighter transition-colors ${
          isScrolled || isOpen ? 'text-black' : 'text-white'
        }`}>
          CARMONA<span className="text-gold italic">·</span>ARCH
        </a>

        <div className="hidden md:flex gap-10 items-center">
          {CONFIG.navLinks.map((item) => (
            <a key={item.name} href={item.href} 
               className={`text-[10px] uppercase tracking-[0.3em] font-bold hover:text-gold transition-colors ${
                 isScrolled ? 'text-black' : 'text-white'
               }`}>
              {item.name}
            </a>
          ))}
          <a href="#contact" className={`px-6 py-2 border text-[10px] uppercase tracking-widest font-bold transition-all ${
            isScrolled ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white/60 text-white hover:bg-white hover:text-black'
          }`}>
            Book a Visit
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
        >
          <div className={`w-6 h-0.5 transition-all ${isScrolled || isOpen ? 'bg-black' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 ${isScrolled || isOpen ? 'bg-black' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 transition-all ${isScrolled || isOpen ? 'bg-black' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`absolute top-full left-0 w-full bg-white transition-all duration-500 overflow-hidden ${isOpen ? 'h-screen border-t' : 'h-0'}`}>
        <div className="flex flex-col items-center pt-20 gap-10">
          {CONFIG.navLinks.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)}
               className="text-black text-xl font-serif italic uppercase tracking-[0.2em]">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}