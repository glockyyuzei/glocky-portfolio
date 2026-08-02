import { motion } from 'framer-motion';
import { ExperienceCard, type DevExperience } from './ExperienceCard';

// Continuity note: these entries reflect the milestones already referenced
// in the Experience Timeline section below (EclipseRP, LuminaForge,
// Skyvale SMP, PearlOasis SMP). Update dates, logos, and descriptions as
// needed. Set `logo` to a path under /public (e.g. '/logos/eclipserp.png')
// to show a server's actual logo — it falls back to initials otherwise.
const DEV_EXPERIENCE: DevExperience[] = [
  {
    name: 'EclipseRP',
    role: 'Lead Developer',
    duration: 'Jun 2026 — Present',
    status: 'in-development',
    logo: undefined,
    description:
      'Edo-era Japanese-inspired roleplay server featuring katana-based PvP, quests, player progression, a custom economy, and immersive roleplay systems. Leading development across the server’s core gameplay systems, economy, moderation, and custom framework.',
    tech: ['Forge', 'Java'],
  },
  {
    name: 'Skyvale SMP',
    role: 'Founder & Lead Developer',
    duration: 'Sept 2025 — March 2025',
    status: 'offline',
    logo: undefined,
    description:
      'Survival multiplayer economy server built around player progression and competition. Founded and developed the server from the ground up, implementing custom gameplay systems including leaderboards, dungeons, quests, daily rewards, and economy features.',
    tech: ['Paper', 'Java'],
  },
  {
    name: 'PearlOasis SMP',
    role: 'Developer',
    duration: 'May 2025 — Sep 2025',
    status: 'offline',
    logo: undefined,
    description:
      'Community-focused survival multiplayer server featuring an economy-driven progression system and classic SMP gameplay. Contributed to the development and maintenance of server plugins, gameplay features, and server-side tools alongside the development team.',
    tech: ['LeafMC','Java'],
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
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
          Development Experience
        </h2>
        <p className="text-muted-foreground text-base mb-12 max-w-2xl">
          Minecraft servers and communities I currently develop for, or have contributed to.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {DEV_EXPERIENCE.map((experience, index) => (
            <ExperienceCard key={experience.name} experience={experience} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
