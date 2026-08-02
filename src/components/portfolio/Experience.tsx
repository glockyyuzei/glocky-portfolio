import { motion } from 'framer-motion';

const MILESTONES = [
  { title: "Currently Building EclipseRP", active: true },
  { title: "Started Minecraft Mod Development (Forge & Fabric)" },
  { title: "Started Minecraft Plugin Development (Bukkit, Spigot & Paper)" },
  { title: "Founded Skyvale SMP" },
  { title: "Started Minecraft Server Development (PearlOasis SMP)" }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-12">Experience Timeline</h2>
        
        <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12 ml-4">
          {MILESTONES.map((milestone, index) => (
            <motion.div 
              key={milestone.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`absolute -left-[31px] md:-left-[39px] w-3 h-3 rounded-full border-2 border-background ${milestone.active ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
              <div className={`text-lg md:text-xl font-medium ${milestone.active ? 'text-primary' : 'text-muted-foreground'}`}>
                {milestone.title}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
