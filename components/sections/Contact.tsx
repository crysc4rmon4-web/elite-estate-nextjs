"use client";
import { useState } from 'react';
import { CONFIG } from '@/config/data';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-obsidian text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.8em] text-gold font-bold mb-8">Enquiries</h2>
            <p className="text-5xl md:text-7xl font-serif italic mb-12">Start your <br /> legacy.</p>
            <p className="text-white/40 max-w-sm font-light leading-relaxed">
              Our private advisors are available for a confidential consultation regarding your real estate goals.
            </p>
          </div>

          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="border-b border-white/10 pb-4 focus-within:border-gold transition-colors">
                <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2">Full Name</label>
                <input type="text" className="bg-transparent w-full outline-none text-sm" placeholder="John Doe" />
              </div>
              <div className="border-b border-white/10 pb-4 focus-within:border-gold transition-colors">
                <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2">Email Address</label>
                <input type="email" className="bg-transparent w-full outline-none text-sm" placeholder="john@email.com" />
              </div>
            </div>
            <div className="border-b border-white/10 pb-4 focus-within:border-gold transition-colors">
              <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2">Message</label>
              <textarea className="bg-transparent w-full outline-none text-sm h-32 resize-none" placeholder="I am interested in..." />
            </div>

            <button
              type="button"
              onClick={() => window.open(`https://wa.me/${CONFIG.contact.whatsapp}?text=Hola, quiero solicitar una consultoría privada para una propiedad.`, '_blank')}
              className="w-full py-6 border border-gold text-gold text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-gold hover:text-white transition-all duration-700"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}