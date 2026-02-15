import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Properties from '@/components/sections/Properties';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero />
        
        {/* Espacio de respiración - Estética Minimal */}
        <div className="h-32 bg-linen" />

        <Properties />

        {/* Sección de Valor para el correo de ventas */}
        <section id="about" className="py-32 bg-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-[10px] uppercase tracking-[0.8em] text-gold font-bold mb-10">The Studio</h3>
              <p className="text-3xl md:text-4xl font-serif leading-relaxed text-obsidian italic">
                "We provide a bespoke service for those who view real estate as an extension of their personal identity."
              </p>
            </div>
          </div>
        </section>

        <Contact />

        <footer className="py-20 bg-linen border-t border-black/5">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[9px] uppercase tracking-[0.5em] text-obsidian/40">
              © 2026 CARMONA ARCH // ALL RIGHTS RESERVED
            </p>
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] font-bold">
              <a href="#" className="hover:text-gold">Instagram</a>
              <a href="#" className="hover:text-gold">LinkedIn</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}