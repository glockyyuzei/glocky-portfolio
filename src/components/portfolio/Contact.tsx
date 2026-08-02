import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SiGithub, SiDiscord } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const SOCIALS = [
  { name: "GitHub", icon: <SiGithub className="w-5 h-5" />, link: "https://github.com/glockyyuzei" },
  { name: "Discord", icon: <SiDiscord className="w-5 h-5" />, link: "https://discord.com/users/739036265323823105" },
  { name: "LinkedIn", icon: <FaLinkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/danmil-balotol-299365422/" },
  { name: "Email", icon: <Mail className="w-5 h-5" />, link: "mailto:glockyyuzei@gmail.com" }
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
<div className="mb-12 text-center">
  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
    Building today for tomorrow's ideas.
  </h2>

  <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
    The secret of change is to focus all of your energy, not on fighting the old, but on building the new. - Socrates
  </p>
</div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {SOCIALS.map((social) => (
            <a 
              key={social.name}
              href={social.link}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 text-primary"
            >
              {social.icon}
              <span className="font-medium text-sm md:text-base">{social.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
