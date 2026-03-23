import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motionVariants } from '../../../application/animations/variants';
import { Button } from '../../components/ui/Button';

const carouselImages = [
  '/imagen-1.jpeg',
  '/imagen-2.webp',
  '/imagen-3.jpg',
  '/imagen-4.jpeg',
];

export const About = () => {
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
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Slow smooth movement for the image Parallax
  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-bright-snow w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            className="space-y-6"
            variants={motionVariants.zoomInSpring}
            initial="initial"
            whileInView="whileInView"
            viewport={motionVariants.zoomInSpring.viewport}
          >
            <h2 className="text-sm font-semibold tracking-widest text-golden-bronze uppercase">
              Nuestra Esencia
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-carbon-black leading-tight">
              Diseñando el Futuro de la Tela
            </h3>
            <p className="text-lg text-grey-olive leading-relaxed">
              En Grupo Moda Textil, somos expertos en servicios de tejeduría, creando prendas de punto como suéteres, vestidos, bufandas y gorros con la más alta calidad. Combinamos décadas de experiencia con innovación de vanguardia.
            </p>
            <p className="text-lg text-grey-olive leading-relaxed pb-4">
              Nuestro compromiso con la sostenibilidad y la calidad nos ha permitido posicionarnos como líderes en el mercado global, ofreciendo soluciones textiles que no solo visten, sino que inspiran.
            </p>
            <a href="#services">
              <Button variant="outline" className="px-8 py-3">
                Nuestras Líneas
              </Button>
            </a>
          </motion.div>

          {/* Image Carousel with Parallax */}
          <motion.div 
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl mt-8 lg:mt-0 group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="absolute inset-0 bg-carbon-black/5 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
            
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={currentIndex}
                src={carouselImages[currentIndex]} 
                alt={`Taller de confección y telas ${currentIndex + 1}`} 
                className="absolute top-0 left-0 w-full h-[130%] object-cover grayscale-[10%]"
                style={{ y: yImage }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute inset-0 z-20 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevImage}
                className="p-2 rounded-full bg-bright-snow/80 text-carbon-black hover:bg-golden-bronze hover:text-bright-snow transition-colors shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="p-2 rounded-full bg-bright-snow/80 text-carbon-black hover:bg-golden-bronze hover:text-bright-snow transition-colors shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-golden-bronze scale-125' : 'bg-bright-snow/60 hover:bg-bright-snow'
                  }`}
                  aria-label={`Ir a la imagen ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
