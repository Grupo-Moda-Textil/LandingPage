import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../application/contexts/LanguageContext';

const certifications = [
  "WRAP Certified",
  "Oeko-Tex Standard 100",
  "ISO 9001:2015",
  "GOTS (Global Organic)",
  "Fair Trade Textile",
  "B Corp Certified",
  "Carbon Neutral",
];

export const SocialProof: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-24 border-y border-zinc-100 bg-white overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-light text-zinc-900 mb-6"
        >
          {t.social.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-500 font-light max-w-2xl mx-auto"
        >
          {t.social.subtitle}
          <span className="block mt-3 text-xs uppercase tracking-widest text-zinc-400 font-medium">
            {t.social.regions}
          </span>
        </motion.p>
      </div>

      <div className="w-full relative flex items-center">
        <div className="flex w-[200%] sm:w-[150%] md:w-[120%] lg:w-full overflow-hidden">
           <motion.div 
            className="flex flex-nowrap items-center min-w-max gap-16 lg:gap-24 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
           >
            {[...certifications, ...certifications].map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer text-zinc-400 hover:text-zinc-900"
              >
                <div className="px-6 py-4 border border-zinc-200 text-sm font-semibold tracking-widest uppercase">
                  {cert}
                </div>
              </div>
            ))}
           </motion.div>
        </div>
        
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
