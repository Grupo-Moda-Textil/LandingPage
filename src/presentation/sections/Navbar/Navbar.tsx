import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../../application/contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.stock, href: '#stock' },
    { label: t.nav.fibers, href: '#fibras' },
    { label: t.nav.certifications, href: '#certifications' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md text-zinc-900 border-b border-zinc-100 py-6 shadow-sm'
            : 'bg-transparent text-white border-none py-10'
        }`}
      >
        <div className="w-full mx-auto px-8 lg:px-24 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#">
              <img 
                src="/Logo-1.png" 
                alt="Grupo Moda Textil" 
                className="h-16 lg:h-24 w-auto object-contain transition-all duration-300" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-widest uppercase">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:opacity-60 transition-opacity duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center">
              <button 
                onClick={toggleLanguage} 
                className={`w-12 h-10 flex items-center justify-center border transition-colors duration-300 text-[11px] font-bold tracking-widest uppercase ${
                  isScrolled 
                    ? 'border-zinc-300 text-zinc-900 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white' 
                    : 'border-white/30 text-white hover:border-white hover:bg-white hover:text-zinc-900'
                }`}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
            
            <a 
              href="#contact"
              className={`hidden lg:inline-flex px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase border transition-colors duration-300 ${
                isScrolled 
                  ? 'border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-zinc-900'
              }`}
            >
              {t.nav.contact}
            </a>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center text-zinc-900"
          >
            <button
              className="absolute top-8 right-6 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="flex flex-col items-center gap-8 mb-12">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-2xl font-serif tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center mb-8">
              <button 
                onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }} 
                className="w-16 h-12 flex items-center justify-center border border-zinc-300 text-zinc-900 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors duration-300 text-sm font-bold tracking-widest uppercase"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>

            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-4 bg-zinc-900 text-white text-xs font-bold tracking-widest uppercase"
            >
              {t.nav.contact}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
