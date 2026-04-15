import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../application/contexts/LanguageContext';

export const Markets: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="markets" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-light text-zinc-900 mb-6"
          >
            {t.markets.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-500 font-light max-w-2xl mx-auto"
          >
            {t.markets.subtitle}
          </motion.p>
        </div>

        <div className="relative w-full aspect-[2/1] min-h-[400px] bg-zinc-50 flex items-center justify-center overflow-hidden border border-zinc-100">
          {/* Abstract map representation or elegant layout */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-400 via-transparent to-transparent"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 relative z-10 w-full px-12">
            {t.markets.regions.map((region, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex flex-col items-center justify-center text-center group cursor-default"
              >
                <div className="w-16 h-16 rounded-full border border-zinc-200 flex items-center justify-center mb-6 group-hover:border-zinc-900 transition-colors duration-500">
                  <div className="w-2 h-2 bg-zinc-300 rounded-full group-hover:bg-zinc-900 transition-colors duration-500" />
                </div>
                <span className="text-sm font-light text-zinc-600 uppercase tracking-widest">{region}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
