import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motionVariants } from '../../../application/animations/variants';
import { Button } from '../../components/ui/Button';

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

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
              En Grupo Moda Textil, nos dedicamos a transformar ideas en realidades tangibles. Con décadas de experiencia en la industria, combinamos técnicas tradicionales con innovación de vanguardia.
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

          {/* Image Placeholder with Parallax */}
          <motion.div 
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="absolute inset-0 bg-carbon-black/5 z-10 pointer-events-none" />
            <motion.img 
              src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Taller de confección y telas" 
              className="absolute top-0 left-0 w-full h-[130%] object-cover grayscale-[20%]"
              style={{ y: yImage }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
