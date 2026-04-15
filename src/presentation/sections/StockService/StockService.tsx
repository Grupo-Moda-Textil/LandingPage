import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../application/contexts/LanguageContext';

export const StockService: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="stock" className="py-32 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        <div className="w-full lg:w-5/12 flex flex-col items-start gap-8 z-10">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-400"
          >
            {t.stock.overline}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-serif font-light leading-[1.1] text-zinc-900"
          >
            {t.stock.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-lg font-light leading-relaxed"
          >
            {t.stock.subtitle1}
            <strong>{t.stock.subtitleBold}</strong>
            {t.stock.subtitle2}
            <br /><br />
            {t.stock.subtitle3}
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="#contact"
            className="mt-4 px-8 py-4 bg-zinc-900 text-white text-xs font-semibold uppercase tracking-widest hover:bg-zinc-800 transition-colors duration-300"
          >
            {t.stock.cta}
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full lg:w-7/12 aspect-square lg:aspect-[4/3] bg-zinc-200 overflow-hidden relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7450940?q=80&w=2670&auto=format&fit=crop" 
            alt="Infraestructura Logística B2B" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out grayscale-[15%]"
          />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 backdrop-blur-md border border-white/20 z-10 hidden lg:block" />
        </motion.div>
        
      </div>
    </section>
  );
};
