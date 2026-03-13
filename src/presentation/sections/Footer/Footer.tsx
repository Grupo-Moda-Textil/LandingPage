import { mockCompanyInfo } from '../../../infrastructure/mocks/company';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] border-t border-carbon-black pt-16 pb-8 text-bright-snow">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter text-bright-snow">
              {mockCompanyInfo.name}
            </h2>
            <p className="text-grey-olive max-w-md">
              {mockCompanyInfo.description}
            </p>
            <div className="flex gap-4 pt-4">
              <a href={mockCompanyInfo.socialLinks.instagram} className="text-grey-olive hover:text-golden-bronze transition-colors">
                Instagram
              </a>
              <a href={mockCompanyInfo.socialLinks.linkedin} className="text-grey-olive hover:text-golden-bronze transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-b border-grey-olive/20 pb-2 inline-block">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-grey-olive hover:text-golden-bronze transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-grey-olive hover:text-golden-bronze transition-colors">Nuestra Esencia</a></li>
              <li><a href="#services" className="text-grey-olive hover:text-golden-bronze transition-colors">Nuestras Líneas</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-b border-grey-olive/20 pb-2 inline-block">
              Contacto
            </h4>
            <ul className="space-y-3 text-grey-olive">
              <li>{mockCompanyInfo.email}</li>
              <li>{mockCompanyInfo.phone}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-grey-olive/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-grey-olive gap-4 text-center md:text-left">
          <p>© {currentYear} {mockCompanyInfo.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bright-snow transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-bright-snow transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
