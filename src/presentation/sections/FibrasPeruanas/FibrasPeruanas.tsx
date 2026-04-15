import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../application/contexts/LanguageContext';

export const FibrasPeruanas: React.FC = () => {
  const { t } = useLanguage();

  const getFibrasData = () => [
    {
      id: 1,
      title: t.fibers.items[0].title,
      description: t.fibers.items[0].desc,
      image: 'https://images.unsplash.com/photo-1596775685764-77ab1f1e0df1?q=80&w=1500&auto=format&fit=crop',
    },
    {
      id: 2,
      title: t.fibers.items[1].title,
      description: t.fibers.items[1].desc,
      image: 'https://images.unsplash.com/photo-1582966772680-e8894ec7102e?q=80&w=1500&auto=format&fit=crop',
    },
    {
      id: 3,
      title: t.fibers.items[2].title,
      description: t.fibers.items[2].desc,
      image: 'https://images.unsplash.com/photo-1620619864222-3860533f07a0?q=80&w=1500&auto=format&fit=crop',
    },
    {
      id: 4,
      title: t.fibers.items[3].title,
      description: t.fibers.items[3].desc,
      image: 'https://images.unsplash.com/photo-1606170033648-5d55a3edf314?q=80&w=1500&auto=format&fit=crop',
    },
  ];

  return (
    <>
      <section id="products" className="py-0 -mt-1" />
      <section id="fibras" className="py-32 bg-white w-full">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] font-semibold text-zinc-400 block mb-6"
          >
            {t.fibers.overline}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-zinc-900 leading-[1.1] mb-8"
          >
            {t.fibers.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-500 font-light leading-relaxed max-w-2xl"
          >
            {t.fibers.subtitle}
          </motion.p>
        </div>

        {/* Container: Flex (Carousel) on mobile, Grid on desktop */}
        <div className="relative">
          <motion.div 
            className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-x-visible hide-scrollbar snap-x snap-mandatory gap-6 pb-8 lg:pb-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {getFibrasData().map((fibra) => (
              <motion.article 
                key={fibra.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="group cursor-pointer flex flex-col gap-6 min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 snap-center"
              >
                {/* Contenedor Imagen */}
                <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100 relative">
                  <img 
                    src={fibra.image} 
                    alt={fibra.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out select-none grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Textos de la Card */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-light text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors">
                    {fibra.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6 flex-grow">
                    {fibra.description}
                  </p>
                  <span className="text-xs uppercase tracking-widest font-bold text-zinc-900 group-hover:text-zinc-600 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    {t.fibers.discover}
                    <span className="w-6 h-[1px] bg-current inline-block transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          {/* Scroll Progress Indicator (Mobile only) */}
          <div className="flex lg:hidden justify-center gap-2 mt-4">
            {getFibrasData().map((_, idx) => (
              <div 
                key={idx}
                className="w-1.5 h-1.5 rounded-full bg-zinc-200"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
  );
};
