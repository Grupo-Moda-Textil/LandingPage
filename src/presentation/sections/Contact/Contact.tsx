import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../application/contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-zinc-900 text-white relative flex flex-col justify-center">
      <div className="absolute inset-0 w-full h-full opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1620619864222-3860533f07a0?q=80&w=2000&auto=format&fit=crop" 
          alt="Contact Background Texture" 
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-5/12 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] mb-6"
            >
              {t.contact.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 font-light leading-relaxed max-w-md"
            >
              {t.contact.subtitle}
            </motion.p>
          </div>

          <div className="lg:w-7/12">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10 flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder={t.contact.form.name} 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-zinc-500 text-sm font-light focus:outline-none focus:border-white transition-colors"
                />
                <input 
                  type="email" 
                  placeholder={t.contact.form.email} 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-zinc-500 text-sm font-light focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <textarea 
                placeholder={t.contact.form.message} 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pt-4 pb-4 text-white placeholder:text-zinc-500 text-sm font-light focus:outline-none focus:border-white transition-colors resize-none mt-4"
              ></textarea>
              <button 
                type="button"
                className="mt-6 self-start px-10 py-5 bg-white text-zinc-950 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors"
              >
                {t.contact.form.submit}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
