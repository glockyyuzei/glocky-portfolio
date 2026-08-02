import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Blocks,
  Globe,
  Monitor,
  Server,
  Palette,
  Cloud,
} from "lucide-react";

const FEATURES = [
  {
    icon: Blocks,
    title: "Minecraft Development",
    description:
      "Building custom Paper plugins, Fabric/Forge mods, gameplay systems, utilities, and server features tailored for unique Minecraft experiences.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Creating responsive web applications using React, TypeScript, Tailwind CSS, and modern frontend technologies with a focus on clean user experiences.",
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    description:
      "Developing desktop tools and launchers with modern technologies while exploring cross-platform development using Tauri and Rust.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building APIs, authentication systems, databases, and server-side applications using Node.js and Express.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Designing modern interfaces with responsive layouts, smooth animations, accessibility, and attention to detail.",
  },
  {
    icon: Cloud,
    title: "Dev Tools & Deployment",
    description:
      "Working with Git, GitHub, deployment platforms, automation, and development workflows to efficiently ship projects.",
  },
];

const TECH_STACK = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Minecraft",
    items: [
      "Paper API",
      "Spigot API",
      "Fabric",
      "Forge",
      "Gradle",
      "Adventure API",
      "PlaceholderAPI",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman"],
  },
  {
    category: "Currently Learning",
    items: ["Rust", "Tauri", "Docker", "PostgreSQL"],
  },
];

const EXPERTISE = [
  {
    name: "Minecraft Plugin Development",
    value: 90,
    description: "Developing custom plugins using the Paper and Spigot APIs.",
  },
  {
    name: "Minecraft Mod Development",
    value: 75,
    description: "Building gameplay features and systems using Forge and Fabric.",
  },
  {
    name: "Frontend Development",
    value: 80,
    description: "Creating responsive user interfaces with React and TypeScript.",
  },
  {
    name: "Backend Development",
    value: 70,
    description: "Developing APIs, server logic, authentication, and databases.",
  },
  {
    name: "UI / UX Design",
    value: 65,
    description: "Designing intuitive, responsive, and modern interfaces.",
  },
  {
    name: "Desktop Development",
    value: 55,
    description: "Learning cross-platform desktop development using Tauri and Rust.",
  },
];

function ExpertiseBar({
  name,
  value,
  description,
  index,
}: {
  name: string;
  value: number;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-baseline justify-between mb-2 gap-4">
        <h4 className="text-base font-medium text-primary">{name}</h4>
        <span className="text-sm font-semibold text-violet-400 shrink-0">
          {value}%
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>

      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.5)]"
        />
      </div>
    </motion.div>
  );
}

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
          The technologies I work with and the types of software I enjoy
          building.
        </p>

        {/* Section 1 — Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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

        {/* Section 2 — Tech stack */}
        <div className="mb-24">
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
                transition={{ duration: 0.5, delay: index * 0.08 }}
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

        {/* Section 3 — Core expertise */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            Core Expertise
          </h3>

          <div className="flex flex-col gap-4">
            {EXPERTISE.map((skill, index) => (
              <ExpertiseBar
                key={skill.name}
                name={skill.name}
                value={skill.value}
                description={skill.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}