import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motionVariants } from '../../../application/animations/variants';
import { Button } from '../../components/ui/Button';
import { mockCompanyInfo } from '../../../infrastructure/mocks/company';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-bright-snow w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Animated large background text for visual impact */}
        <motion.div 
          className="hidden md:block absolute w-full left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden opacity-5"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.03 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-[15rem] font-bold text-carbon-black whitespace-nowrap">
            CONTACTA CON NOSOTROS
          </span>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 item-center">
          
          <motion.div 
            className="space-y-8"
            variants={motionVariants.fadeInUpSpring}
            initial="initial"
            whileInView="whileInView"
            viewport={motionVariants.fadeInUpSpring.viewport}
          >
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-golden-bronze uppercase mb-4">
                Ponte en Contacto
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-carbon-black leading-tight mb-6">
                Hagamos Realidad <br className="hidden sm:block" /> Tu Próxima Colección
              </h3>
              <p className="text-base sm:text-lg text-grey-olive leading-relaxed">
                Estamos listos para transformar tus ideas. Déjanos tus datos y un asesor especializado se pondrá en contacto contigo en las próximas 24 horas.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-carbon-black rounded-full group-hover:bg-golden-bronze transition-colors">
                  <Mail className="text-bright-snow" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-carbon-black">Email Corporativo</h4>
                  <p className="text-grey-olive">{mockCompanyInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-carbon-black rounded-full group-hover:bg-golden-bronze transition-colors">
                  <Phone className="text-bright-snow" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-carbon-black">Teléfono</h4>
                  <p className="text-grey-olive">{mockCompanyInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-carbon-black rounded-full group-hover:bg-golden-bronze transition-colors">
                  <MapPin className="text-bright-snow" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-carbon-black">Sede Principal</h4>
                  <p className="text-grey-olive">Distrito Textil, Ciudad Global 10012</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-carbon-black p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl border border-grey-olive/20"
            variants={motionVariants.zoomInSpring}
            initial="initial"
            whileInView="whileInView"
            viewport={motionVariants.zoomInSpring.viewport}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-grey-olive">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#222222] border border-grey-olive/30 rounded-lg px-4 py-3 text-bright-snow focus:outline-none focus:border-golden-bronze transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-grey-olive">Empresa</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#222222] border border-grey-olive/30 rounded-lg px-4 py-3 text-bright-snow focus:outline-none focus:border-golden-bronze transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-grey-olive">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-[#222222] border border-grey-olive/30 rounded-lg px-4 py-3 text-bright-snow focus:outline-none focus:border-golden-bronze transition-colors"
                  placeholder="ejemplo@empresa.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-grey-olive">Mensaje</label>
                <textarea 
                  className="w-full bg-[#222222] border border-grey-olive/30 rounded-lg px-4 py-3 text-bright-snow focus:outline-none focus:border-golden-bronze transition-colors min-h-[120px]"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <Button size="lg" className="w-full py-4 text-base">
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
