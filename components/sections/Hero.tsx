"use client";
import Image from 'next/image';
import { CONFIG } from '@/config/data';
import { sendWhatsAppLead } from '@/services/leadService';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Zoom suave infinito en el fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000"
          alt="Luxury Architectural Detail"
          fill
          priority
          className="object-cover scale-100 transition-transform duration-[10s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-grayscale-[20%]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-5xl">
          <p className="text-gold tracking-[0.6em] uppercase text-[10px] mb-8 font-bold animate-pulse">
            Private Collection 2026
          </p>

          <h1 className="text-white text-6xl md:text-[120px] font-light leading-[0.9] mb-10 tracking-tighter">
            ELEGANCE <br />
            <span className="font-serif italic text-white/90">Redefined.</span>
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <button
              onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-16 py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-all duration-700 w-full lg:w-auto"
            >
              Enter The Gallery
            </button>
            <p className="text-white/40 text-sm max-w-xs font-light leading-relaxed border-l border-white/20 pl-6 hidden lg:block">
              Exclusively managing the most prestigious portfolios in the Spanish Mediterranean.
            </p>
          </div>
        </div>
      </div>

      {/* Indicador de scroll minimalista */}
      <div className="absolute bottom-12 right-12 flex items-center gap-4 text-white/30">
        <span className="text-[10px] uppercase tracking-widest rotate-90 origin-right">Scroll</span>
        <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}