import { motion } from "framer-motion";
import {
  Blocks,
  Globe,
  Monitor,
  Server,
  Palette,
  Wrench,
} from "lucide-react";

const FEATURES = [
  {
    icon: Blocks,
    title: "Minecraft Development",
    description:
      "Developing Minecraft mods, plugins, gameplay systems, server utilities, and custom features using Java and the Minecraft modding and server ecosystems.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building personal, project, and server websites with modern frontend technologies, focusing on responsive layouts, clean interfaces, and practical user experiences.",
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    description:
      "Building developer tools, launchers, and other desktop applications, with experience working with modern web-based desktop technologies and exploring native development.",
  },
  {
    icon: Server,
    title: "Server & Backend Systems",
    description:
      "Working with Minecraft server infrastructure, server software, APIs, databases, configurations, and systems that connect different parts of an application or server.",
  },
  {
    icon: Palette,
    title: "UI / UX",
    description:
      "Designing interfaces for websites, desktop applications, and Minecraft-related tools with a focus on usability, responsive layouts, consistency, and visual clarity.",
  },
  {
    icon: Wrench,
    title: "Development & Tooling",
    description:
      "Using Git, GitHub, Gradle, IDEs, deployment tools, and development workflows to build, test, maintain, and manage software projects.",
  },
];

const TECH_STACK = [
  {
    category: "Minecraft",
    items: [
      "Java",
      "Fabric",
      "Forge",
      "NeoForge",
      "Paper",
      "Purpur",
      "Spigot",
      "Bukkit",
      "Arclight",
    ],
  },
  {
    category: "Web",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    category: "Desktop",
    items: [
      "Tauri",
      "Rust",
      "React",
      "TypeScript",
    ],
  },
  {
    category: "Data & Backend",
    items: [
      "SQL",
      "SQLite",
      "MySQL",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    category: "Development Tools",
    items: [
      "Git",
      "GitHub",
      "Gradle",
      "npm",
      "IntelliJ IDEA",
      "VS Code",
    ],
  },
  {
    category: "Currently Learning",
    items: [
      "Rust",
      "Tauri",
      "System Design",
      "Software Architecture",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 max-w-5xl mx-auto border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
          What I Build
        </h2>

        <p className="text-muted-foreground max-w-2xl mb-14">
          Most of my development work revolves around Minecraft software and
          server systems, with additional experience in web development,
          desktop applications, and development tooling.
        </p>

        {/* Section 1 — Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-violet-500/30 hover:shadow-[0_0_0_1px_rgba(167,139,250,0.15),0_20px_40px_-24px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 mb-5 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-violet-400" />
                </div>

                <h3 className="text-lg font-semibold text-primary group-hover:text-white transition-colors mb-2">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Section 2 — Tech Stack */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            Tech Stack
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <h4 className="text-sm font-medium text-primary mb-4">
                  {group.category}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 text-xs font-medium text-primary/80 bg-white/5 border border-white/10 rounded-full hover:-translate-y-0.5 hover:border-violet-500/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}