import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    category: "Minecraft",
    skills: [
      "Forge",
      "NeoForge",
      "Fabric",
      "Paper",
      "Spigot",
      "Bukkit",
      "Arclight"
    ]
  },
  {
    category: "Programming",
    skills: [
      "Java",
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SQL"
    ]
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Electron",
      "Node.js"
    ]
  },
  {
    category: "Databases",
    skills: [
      "SQLite",
      "MySQL",
      "MongoDB"
    ]
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Gradle",
      "IntelliJ IDEA",
      "VS Code",
      "Linux",
      "npm"
    ]
  },
  {
  category: "Currently Learning",
  skills: [
    "Rust",
    "Tauri",
    "Software Architecture",
    "System Design"
  ]
}
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-5xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-12">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-lg font-medium text-primary mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 text-sm text-primary/80 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
