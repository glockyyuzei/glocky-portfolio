import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/portfolio/LoadingScreen';
import { Nav } from '@/components/portfolio/Nav';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { DevelopmentExperience } from '@/components/portfolio/DevelopmentExperience';
import { Experience } from '@/components/portfolio/Experience';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-white/20 selection:text-white font-sans antialiased overflow-x-hidden">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!loading && <Nav />}

      <main className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevelopmentExperience />
        <Experience />
        <Contact />
      </main>
      
      {!loading && <Footer />}
    </div>
  );
}
