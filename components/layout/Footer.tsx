"use client";
import { CONFIG } from '@/config/data';

export default function Footer() {
  return (
    <footer className="py-20 bg-linen border-t border-black/5 text-obsidian">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="font-serif text-lg mb-2">{CONFIG.brand.name}</h4>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">
            {CONFIG.brand.slogan}
          </p>
        </div>
        
        <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
          <a href={`mailto:${CONFIG.contact.email}`} className="hover:text-gold transition-colors">Contact</a>
        </div>

        <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}