import { motion } from "framer-motion";
import { ExperienceCard, type DevExperience } from "./ExperienceCard";

const DEV_EXPERIENCE: DevExperience[] = [
  {
    name: "Noxara Network",
    role: "Founder & Developer",
    duration: "August 2026 — Present",
    status: "in-development",
    logo: "/assets/noxara_logo.png",
    description:
      "My own Minecraft network currently under development, designed as a multi-server platform featuring different game modes such as SMP, Practice, Prison, and other planned experiences. Building the network's server systems, gameplay features, infrastructure, and supporting software.",
    tech: ["Java", "Paper"],
  },
  {
    name: "Eclipse Network",
    role: "Lead Developer",
    duration: "Jun 2026 — Present",
    status: "in-development",
    logo: undefined,
    description:
      "A Minecraft network currently being developed around multiple server experiences, including SMP, Cobbleverse, Roleplay, and other planned game modes. Leading development of the network's custom gameplay systems, server infrastructure, frameworks, and features across its different experiences.",
    tech: ["Forge", "Fabric", "Java", "Paper"],
  },
  {
    name: "Lumina Forge",
    role: "Developer",
    duration: "Jun 2026 — Aug 2026",
    status: "active",
    logo: "/assets/lumina_logo.png",
    description:
      "A modded Minecraft roleplay and adventure server that evolved through multiple seasons and concepts, including modern sci-fi, post-apocalyptic, medieval fantasy, MMORPG, and modern roleplay experiences. Contributed to the development and maintenance of custom server systems, modded gameplay, progression features, and roleplay mechanics across its different seasons.",
    tech: ["Forge", "Java"],
  },
  {
    name: "Skyvale SMP",
    role: "Founder & Lead Developer",
    duration: "Sept 2025 — Mar 2026",
    status: "offline",
    logo: "/assets/skyvale_logo.png",
    description:
      "A survival multiplayer server built around player progression, competition, and economy. Founded and developed the server from the ground up, working on custom gameplay systems, progression mechanics, leaderboards, dungeons, quests, rewards, and economy features.",
    tech: ["Paper", "Java"],
  },
  {
    name: "Pearl Oasis SMP",
    role: "Developer",
    duration: "May 2025 — Sep 2025",
    status: "offline",
    logo: "/assets/pearloasis_logo.png",
    description:
      "A community-focused survival multiplayer server featuring economy-driven progression and classic SMP gameplay. Contributed to the development and maintenance of server plugins, gameplay features, and server-side tools alongside the development team.",
    tech: ["LeafMC", "Java"],
  },
];

export function DevelopmentExperience() {
  return (
    <section
      id="development-experience"
      className="py-32 px-6 max-w-5xl mx-auto border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
          Development Experience
        </h2>

        <p className="text-muted-foreground text-base mb-12 max-w-2xl">
          Minecraft servers and networks I have developed, contributed to, or
          am currently building.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {DEV_EXPERIENCE.map((experience, index) => (
            <ExperienceCard
              key={experience.name}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}