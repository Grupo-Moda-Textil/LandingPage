import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (!targetId || !targetId.startsWith('#')) return;

    const element = document.querySelector(targetId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nuestra Esencia', href: '#about' },
    { name: 'Nuestras Líneas', href: '#services' },
  ];

  return (
    <>
      <motion.header 
        className={`fixed inset-x-0 mx-auto z-50 transition-all duration-500 max-w-7xl ${
          isScrolled 
            ? '-top-32 md:top-4 w-[95%] bg-bright-snow/80 backdrop-blur-xl shadow-lg border border-carbon-black/5 md:rounded-full py-3 px-6 md:px-8' 
            : 'top-0 w-full bg-transparent py-4 px-6 md:px-8'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between w-full relative">
          {/* Espacio Reservado para Futuro Logo Corporativo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center transition-opacity hover:opacity-80"
            aria-label="Volver a Inicio"
          >
             <img src="/Logo.png" alt="Logo Grupo Moda Textil" className="h-14 md:h-16 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 bg-transparent">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-golden-bronze ${
                  isScrolled ? 'text-carbon-black/70' : 'text-bright-snow/80 hover:text-bright-snow'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-current opacity-20 mx-2 hidden lg:block" />
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              <Button variant="primary" size="sm" className="rounded-full px-6">Contáctanos</Button>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-full backdrop-blur-md transition-colors ${
              isScrolled ? 'bg-carbon-black/5 text-carbon-black' : 'bg-bright-snow/10 text-bright-snow'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-carbon-black/95 backdrop-blur-md flex flex-col justify-center px-6 md:hidden"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="flex flex-col gap-8 text-center mt-20"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  className="text-bright-snow text-3xl font-bold tracking-tight py-2 hover:text-golden-bronze transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                  variants={{
                    closed: { opacity: 0, y: 20 },
                    open: { opacity: 1, y: 0 }
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-8"
                variants={{
                  closed: { opacity: 0, scale: 0.9 },
                  open: { opacity: 1, scale: 1 }
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <Button variant="primary" size="lg" className="w-full rounded-full">Contáctanos</Button>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
