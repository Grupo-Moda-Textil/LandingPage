import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../application/contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full bg-zinc-950">
        {/* Imagen de fondo local (/public) */}
        <img 
          src="/imagen-5.webp" 
          alt="Textura de fondo premium al inicio" 
          className="w-full h-full object-cover scale-105 transform motion-safe:animate-[pulse_20s_infinite_alternate] opacity-60"
        />
        <div className="absolute inset-0 bg-zinc-950/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto flex flex-col items-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <span className="block text-xs md:text-sm uppercase tracking-[0.3em] font-medium mb-6 text-zinc-300">
            {t.hero.overline}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[1.1] mb-8">
            {t.hero.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
          </h1>
          <p className="text-lg md:text-xl font-light text-zinc-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#fibras" className="px-10 py-5 bg-white text-zinc-950 text-xs font-bold uppercase tracking-[0.2em] rounded-none hover:bg-zinc-200 transition-colors duration-300 w-full sm:w-auto text-center">
            {t.hero.ctaPrimary}
          </a>
          <a href="#products" className="px-10 py-5 bg-transparent border border-white text-white text-xs font-bold uppercase tracking-[0.2em] rounded-none hover:bg-white hover:text-zinc-950 transition-all duration-300 w-full sm:w-auto text-center">
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white opacity-60">{t.hero.scroll}</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            className="w-full h-full bg-white origin-top"
            animate={{ 
              scaleY: [0, 1, 0],
              y: ["-100%", "0%", "100%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
