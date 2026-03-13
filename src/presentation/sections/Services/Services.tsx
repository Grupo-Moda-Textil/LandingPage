import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { motionVariants } from '../../../application/animations/variants';
import { mockServices } from '../../../infrastructure/mocks/services';

const IconComponent = ({ iconName }: { iconName: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon size={32} className="text-golden-bronze" /> : null;
};

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-carbon-black w-full">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          variants={motionVariants.fadeInUpSpring}
          initial="initial"
          whileInView="whileInView"
          viewport={motionVariants.fadeInUpSpring.viewport}
        >
          <h2 className="text-sm font-semibold tracking-widest text-golden-bronze uppercase">
            Nuestras Líneas
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-bright-snow">
            Soluciones Textiles Integrales
          </h3>
          <p className="text-base sm:text-lg text-grey-olive">
            Ofrecemos un espectro completo de servicios diseñados para llevar tu marca al siguiente nivel.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1000px]"
          variants={motionVariants.staggerCardsContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={motionVariants.staggerCardsContainer.viewport}
        >
          {mockServices.map((service) => (
            <motion.div
              key={service.id}
              variants={motionVariants.staggerCardItem}
              className="group relative bg-[#222222] border border-grey-olive/20 rounded-xl p-8 transition-all hover:bg-[#2A2A2A] hover:border-golden-bronze hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(197,160,89,0.15)] flex flex-col items-start preserve-3d"
            >
              <div className="mb-6 p-4 bg-carbon-black rounded-lg inline-block group-hover:bg-carbon-black group-hover:scale-110 transition-transform">
                {service.icon && <IconComponent iconName={service.icon} />}
              </div>
              <h4 className="text-xl font-bold text-bright-snow mb-3 group-hover:text-golden-bronze transition-colors">
                {service.title}
              </h4>
              <p className="text-grey-olive leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-golden-bronze transition-all duration-300 group-hover:w-full rounded-b-xl" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
