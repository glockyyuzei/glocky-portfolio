import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "Minecraft Server Developer",
  "Minecraft Mod & Plugin Developer",
  "Minecraft Software Developer"
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 z-0 pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center text-center max-w-3xl mx-auto mt-[-5dvh]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6"
        >
          Glocky Yuzei
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="h-10 text-xl md:text-2xl text-muted-foreground font-medium mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              {roles[currentRoleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed"
        >
          Nambawan vibe coder. My algorithm is basically: think of stuff, prompt, paste, debug, question my life choices, and welp... now it's a project.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-transparent border border-border text-primary font-medium rounded-xl hover:bg-white/5 transition-colors"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}