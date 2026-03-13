import { Instagram, Facebook } from 'lucide-react';
import { mockCompanyInfo } from '../../../infrastructure/mocks/company';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] border-t border-carbon-black pt-16 pb-8 text-bright-snow">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          <div className="flex flex-col items-center md:items-start space-y-6 max-w-sm">
            <div className="flex items-center h-12 mb-2 text-bright-snow">
              <img src="/Logo.png" alt={mockCompanyInfo.name} className="h-full w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-grey-olive text-center md:text-left">
              {mockCompanyInfo.description}
            </p>
            <div className="flex gap-4 pt-2">
              <a href={mockCompanyInfo.socialLinks.instagram} aria-label="Instagram" className="text-grey-olive hover:text-golden-bronze transition-colors">
                <Instagram size={24} />
              </a>
              <a href={mockCompanyInfo.socialLinks.facebook} aria-label="Facebook" className="text-grey-olive hover:text-golden-bronze transition-colors">
                <Facebook size={24} />
              </a>
            </div>
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
