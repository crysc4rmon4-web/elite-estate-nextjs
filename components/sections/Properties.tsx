"use client";
import { CONFIG } from '@/config/data';
import { sendWhatsAppLead } from '@/services/leadService';

export default function Properties() {
  return (
    <section id="properties" className="py-32 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-12">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.8em] text-gold font-bold mb-4">Curated Assets</h2>
            <p className="text-5xl font-serif text-obsidian italic">Selected Works</p>
          </div>
          <p className="text-gray-400 text-sm max-w-xs mt-4 md:mt-0 font-light italic">
            "Architecture is a visual art, and the buildings speak for themselves."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {CONFIG.properties?.map((prop, index) => (
            <div key={prop.id} className={`group ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button 
                    onClick={() => sendWhatsAppLead(prop.title)}
                    className="text-white text-xs uppercase tracking-widest font-bold"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
              <div className="mt-10 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif text-obsidian">{prop.title}</h3>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-2">{prop.location}</p>
                </div>
                <span className="text-gold font-mono text-sm">{prop.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}