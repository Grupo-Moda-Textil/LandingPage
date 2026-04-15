import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../../application/contexts/LanguageContext';

const carouselImages = [
  'https://images.unsplash.com/photo-1558584670-9116fd99pre5?q=80&w=2670&auto=format&fit=crop', // Textile craft 1
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop', // Textile fabric 2
  'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=2670&auto=format&fit=crop', // Close up wool 3
  'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=2670&auto=format&fit=crop', // Loom 4
];

export const About = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Soft parallax for image
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  return (
    <section ref={containerRef} id="about" className="py-32 bg-white w-full overflow-hidden border-t border-zinc-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start gap-8"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-zinc-400">
              {t.about.overline}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-zinc-900 leading-[1.1]">
              {t.about.title}
            </h2>
            <div className="flex flex-col gap-6 text-lg text-zinc-500 font-light leading-relaxed">
               <p>{t.about.desc1}</p>
               <p>{t.about.desc2}</p>
            </div>
            
            <a href="#fibras" className="mt-4 px-10 py-5 bg-zinc-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors duration-300">
              {t.about.cta}
            </a>
          </motion.div>

          {/* Image Area with Frame & Carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[700px] w-full bg-zinc-100 overflow-hidden group shadow-sm border border-zinc-100"
          >
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={currentIndex}
                src={carouselImages[currentIndex]} 
                alt="Proceso Textil Premium" 
                className="absolute top-0 left-0 w-full h-[120%] object-cover grayscale-[30%] opacity-90"
                style={{ y: yImage }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Subtle Controls */}
            <div className="absolute inset-x-8 bottom-8 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex gap-2 pointer-events-auto">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-[2px] transition-all duration-500 ${
                      idx === currentIndex ? 'w-12 bg-white' : 'w-4 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-4 pointer-events-auto">
                <button 
                  onClick={prevImage}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-zinc-900 transition-all"
                >
                  <ChevronLeft size={18} strokeWidth={1} />
                </button>
                <button 
                  onClick={nextImage}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-zinc-900 transition-all"
                >
                  <ChevronRight size={18} strokeWidth={1} />
                </button>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-zinc-950/10 mix-blend-overlay pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
