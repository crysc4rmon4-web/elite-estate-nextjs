"use client";
import { CONFIG } from '@/config/data';

export default function Footer() {
  return (
    <footer className="py-20 bg-linen border-t border-black/5 text-obsidian">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          {/* Cambiado h4 a p para corregir jerarquía SEO, pero se ve igual */}
          <p className="font-serif text-lg mb-2 font-bold">{CONFIG.brand.name}</p>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-80">
            {CONFIG.brand.slogan}
          </p>
        </div>
        
        <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
          {/* Cambiamos el texto para que no sea idéntico a otro link "#contact" */}
          <a href={`mailto:${CONFIG.contact.email}`} className="hover:text-gold transition-colors">Write Us</a>
        </div>

        {/* Subimos la opacidad al 70% para que pase el test de contraste */}
        <p className="text-[9px] uppercase tracking-[0.2em] opacity-70">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}