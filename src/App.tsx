import { Navbar } from './presentation/sections/Navbar/Navbar';
import { Hero } from './presentation/sections/Hero/Hero';
import { About } from './presentation/sections/About/About';
import { Services } from './presentation/sections/Services/Services';
import { Contact } from './presentation/sections/Contact/Contact';
import { Footer } from './presentation/sections/Footer/Footer';
import { SmoothScrollProvider } from './presentation/providers/SmoothScrollProvider';
import { FloatingWhatsApp } from './presentation/components/ui/FloatingWhatsApp';

function App() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-bright-snow selection:bg-golden-bronze selection:text-carbon-black w-full overflow-x-hidden relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
    </SmoothScrollProvider>
  );
}

export default App;
