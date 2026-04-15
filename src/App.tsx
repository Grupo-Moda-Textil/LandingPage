import { Navbar } from './presentation/sections/Navbar/Navbar';
import { Hero } from './presentation/sections/Hero/Hero';
import { About } from './presentation/sections/About/About';
import { FibrasPeruanas } from './presentation/sections/FibrasPeruanas/FibrasPeruanas';
import { StockService } from './presentation/sections/StockService/StockService';
import { SocialProof } from './presentation/sections/SocialProof/SocialProof';
import { Contact } from './presentation/sections/Contact/Contact';
import { Footer } from './presentation/sections/Footer/Footer';
import { SmoothScrollProvider } from './presentation/providers/SmoothScrollProvider';
import { LanguageProvider } from './application/contexts/LanguageContext';
import { FloatingWhatsApp } from './presentation/components/ui/FloatingWhatsApp';

function App() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <div className="min-h-screen bg-white selection:bg-zinc-900 selection:text-white w-full overflow-x-hidden relative">
          <Navbar />
          <main>
            <Hero />
            <About />
            <FibrasPeruanas />
            <StockService />
            <SocialProof />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </SmoothScrollProvider>
    </LanguageProvider>
  );
}

export default App;
