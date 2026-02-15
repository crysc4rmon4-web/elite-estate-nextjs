import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Properties from '@/components/sections/Properties';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Contenido Principal */}
      <main id="home" className="min-h-screen">
        <Hero />
        
        {/* Espacio de respiración - Estética Minimal */}
        <div className="h-32 bg-linen" />

        <Properties />

        {/* Sección de Valor (Storytelling) */}
        <section id="about" className="py-32 bg-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-[10px] uppercase tracking-[0.8em] text-gold font-bold mb-10">
                The Studio
              </h3>
              <p className="text-3xl md:text-4xl font-serif leading-relaxed text-obsidian italic">
                "We provide a bespoke service for those who view real estate as an extension of their personal identity."
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      {/* El Footer va FUERA del main */}
      <Footer />
    </>
  );
}