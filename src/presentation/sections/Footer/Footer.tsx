import React from 'react';
import { useLanguage } from '../../../application/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-8 font-sans">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

        {/* Columna 1 */}
        <div className="flex flex-col pr-6">
          <a href="#" className="mb-6 block">
            <img
              src="/Logo-1.png"
              alt="Grupo Moda Textil"
              className="h-10 lg:h-19 w-auto object-contain brightness-0 invert"
            />
          </a>
          <p className="text-sm font-light text-zinc-400 leading-relaxed mb-6">
            {t.footer.brandDesc}
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6 block">
            {t.footer.col1}
          </span>
          <ul className="flex flex-col gap-3">
            {[
              { label: t.nav.about, href: '#about' },
              { label: t.nav.products, href: '#products' },
              { label: t.nav.fibers, href: '#fibras' },
              { label: t.nav.certifications, href: '#certifications' }
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm font-light text-zinc-400 hover:text-white transition-colors duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6 block">
            {t.footer.col2}
          </span>
          <ul className="flex flex-col gap-3">
            {[
              t.footer.legal1,
              t.footer.legal2,
              t.footer.legal3,
              t.footer.legal4
            ].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm font-light text-zinc-400 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4 */}
        <div>
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6 block">
            {t.footer.col3}
          </span>
          <address className="not-italic flex flex-col gap-3 text-sm font-light text-zinc-400">
            <p className="text-white font-medium">{t.footer.hq}</p>
            <p>Av. Industrial 1234, Lima - Perú</p>
            <a href="mailto:info@grupomodatextil.com" className="hover:text-white transition-colors">info@grupomodatextil.com</a>
            <p>+51 (01) 999 9999</p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">LN</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">IG</a>
            </div>
          </address>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 lg:px-12 border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs font-light tracking-widest gap-4 uppercase">
        <p>{t.footer.rights}</p>
        <p>{t.footer.credit}</p>
      </div>
    </footer>
  );
};
