import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";

const STATUS_COLORS = {
  Active:
    "bg-violet-500/10 text-violet-400 border border-violet-500/20",
  "In Development":
    "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  Completed:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  Planned:
    "bg-slate-500/10 text-slate-300 border border-slate-500/20",
  Archived:
    "bg-red-500/10 text-red-400 border border-red-500/20",
};

const CATEGORIES = [
  "All",
  "Desktop Apps",
  "Website Apps",
  "Discord Bots",
  "Minecraft Mods",
  "Minecraft Plugins",
] as const;

type Category = (typeof CATEGORIES)[number];

interface Project {
  name: string;
  status: keyof typeof STATUS_COLORS;
  description: string;
  category: Exclude<Category, "All">;
  link: string;
}

const PROJECTS: Project[] = [
  {
    name: "YuzeiLabs",
    status: "Active",
    description:
      "An all-in-one development platform for Minecraft mod and plugin developers. YuzeiLabs automates JAR builds, deployment to local and remote servers, Discord release publishing, AI-powered error analysis, and project management to streamline the development workflow.",
    category: "Desktop Apps",
    link: "#"
  },
  {
    name: "EclipseLauncher",
    status: "In Development",
    description:
      "A modern Minecraft launcher supporting Microsoft and offline accounts, multi-instance management, built-in mod installation, automatic updates, and developer-focused tools.",
    category: "Desktop Apps",
    link: "#"
  },
  {
    name: "Compound G",
    status: "In Development",
    description:
      "An AI-powered coding assistant that runs as a lightweight desktop overlay for any IDE. It supports both online and offline AI models, portable execution without installation, and productivity-focused tools for developers.",
    category: "Desktop Apps",
    link: "#"
  },
  {
    name: "EclipseFramework",
    status: "Active",
    description:
      "The shared foundation of the Eclipse ecosystem, providing reusable libraries, APIs, networking, configuration management, and common systems for every Eclipse module.",
    category: "Minecraft Mods",
    link: "#"
  },
  {
    name: "EclipseCurrency",
    status: "Active",
    description:
      "A modern banking and economy system for the Eclipse ecosystem featuring physical currency, bank accounts, ATMs, secure transactions, and persistent financial management.",
    category: "Minecraft Mods",
    link: "#"
  },
  {
    name: "EclipseUtilities",
    status: "Active",
    description:
      "A growing collection of utility modules for the Eclipse ecosystem, including Simple Voice Chat broadcast integration, EasyNPC shop support, horse utilities, stash management, and additional gameplay enhancements.",
    category: "Minecraft Mods",
    link: "#"
  },
  {
    name: "EclipseRoleplay",
    status: "Active",
    description:
      "An immersive roleplay framework featuring jobs, government systems, player licenses, HUD customization, and advanced progression mechanics.",
    category: "Minecraft Mods",
    link: "#"
  },
  {
    name: "EclipseModeration",
    status: "In Development",
    description:
      "A moderation toolkit providing staff utilities, administrative commands, player management, and quality-of-life tools for server administration.",
    category: "Minecraft Mods",
    link: "#"
  },
  {
    name: "EclipseCapabilities",
    status: "Active",
    description:
      "A flexible player capability system providing persistent attributes, custom statistics, synchronized HUD data, and extensible gameplay mechanics across the Eclipse ecosystem.",
    category: "Minecraft Mods",
    link: "#"
  },
  {
    name: "EclipseAgriculture",
    status: "In Development",
    description:
      "An agriculture expansion introducing custom farming, fishing, crops, progression systems, quests, and immersive survival mechanics.",
    category: "Minecraft Mods",
    link: "#"
  },
  {
    name: "EclipseBirthSystem",
    status: "In Development",
    description:
      "A roleplay-focused origin system allowing players to choose a home region on first join, establishing their village of origin, spawn location, and character identity.",
    category: "Minecraft Mods",
    link: "#"
  },
  {
    name: "DiscordPinataAnnouncer",
    status: "Completed",
    description:
      "A Paper plugin that integrates with the PinataParty API to automatically announce Pinata spawns to Discord using customizable webhooks.",
    category: "Minecraft Plugins",
    link: "#"
  },
  {
    name: "EchoMeet",
    status: "In Development",
    description:
      "An AI-powered Discord meeting assistant that records voice channels, transcribes conversations in English and Tagalog, generates intelligent summaries, and captures key discussion points.",
    category: "Discord Bots",
    link: "#"
  }
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProjects = PROJECTS.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section
      id="projects"
      className="py-32 px-6 max-w-5xl mx-auto border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">
          Featured Projects
        </h2>

        <div
          className="flex md:flex-wrap gap-3 mb-12 overflow-x-auto md:overflow-visible scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
        >
          {CATEGORIES.map((category) => {
            const isActive = category === selectedCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isActive}
                className={`relative shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                  isActive
                    ? "bg-violet-500 text-white shadow-[0_0_0_1px_rgba(167,139,250,0.4),0_0_20px_rgba(167,139,250,0.35)]"
                    : "bg-transparent text-muted-foreground border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="text-xl font-semibold text-primary group-hover:text-white transition-colors">
                      {project.name}
                    </h3>

                    <span
                      className={`inline-flex mt-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                        STATUS_COLORS[project.status]
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <SiGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}