import { motion, useScroll, useTransform } from 'framer-motion';
import { motionVariants } from '../../../application/animations/variants';
import { Button } from '../../components/ui/Button';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-carbon-black">
      
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1558769132-cb1fac0840c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30 origin-top"
        style={{ y: yBg }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent z-0" />
      <div className="absolute inset-0 bg-carbon-black/20 z-0 mix-blend-multiply" />
      
      <motion.div 
        className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-20"
        style={{ opacity: opacityText, y: yText }}
      >
        <div className="max-w-4xl space-y-8">
          
          <div className="flex flex-col items-center">
            <motion.div 
              variants={motionVariants.maskContainer}
              initial="initial"
              whileInView="whileInView"
              className="flex flex-col items-center"
            >
              <div className="overflow-hidden pb-2 leading-[1.1]">
                <motion.h1 
                  variants={motionVariants.maskItem}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-bright-snow"
                >
                  ELEVANDO EL
                </motion.h1>
              </div>
              <div className="overflow-hidden pb-4 leading-[1.1] pt-1 mt-[-8px] sm:mt-0">
                <motion.h1 
                  variants={motionVariants.maskItem}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-golden-bronze"
                >
                  ESTÁNDAR TEXTIL
                </motion.h1>
              </div>
            </motion.div>
          </div>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-grey-olive font-light max-w-2xl mx-auto px-4"
            variants={motionVariants.fadeInUpSpring}
            initial="initial"
            whileInView="whileInView"
          >
            Especialistas en tejeduría de alta calidad: suéteres, vestidos, bufandas, gorros y más. Diseño innovador y manufactura para el mercado global.
          </motion.p>
          
          <motion.div 
            className="pt-10 space-x-4"
            variants={motionVariants.zoomInSpring}
            initial="initial"
            whileInView="whileInView"
          >
            <a href="#about">
              <Button size="lg" className="text-lg px-8 py-4 rounded-full shadow-[0_0_40px_-10px_rgba(197,160,89,0.5)]">
                Descubre Nuestra Esencia
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};
