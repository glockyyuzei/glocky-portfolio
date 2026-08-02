import { motion } from 'framer-motion';

export type DevStatus = 'active' | 'in-development' | 'offline';

export interface DevExperience {
  name: string;
  role: string;
  duration: string;
  status?: DevStatus;
  logo?: string;
  description: string;
  tech: string[];
}

const STATUS_META: Record<DevStatus, { label: string; dot: string; badge: string }> = {
  active: {
    label: 'Active',
    dot: 'bg-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  'in-development': {
    label: 'In Development',
    dot: 'bg-yellow-400',
    badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  },
  offline: {
    label: 'Offline',
    dot: 'bg-red-400',
    badge: 'bg-red-500/10 text-red-400 border-red-500/20',
  },
};

// Deterministic accent hue per server name so each logo fallback feels
// distinct while staying within the site's monochrome + violet palette.
function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join('');
}

export function ExperienceCard({ experience, index }: { experience: DevExperience; index: number }) {
  const { name, role, duration, status, logo, description, tech } = experience;
  const statusMeta = status ? STATUS_META[status] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(167,139,250,0.15),0_20px_40px_-24px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 shrink-0 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
            {logo ? (
              <img
                src={logo}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="text-sm font-semibold text-violet-300/90">
                {initialsOf(name)}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary group-hover:text-white transition-colors">
              {name}
            </h3>
            <p className="text-sm text-violet-300/80 font-medium">{role}</p>
          </div>
        </div>

        {statusMeta && (
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border shrink-0 ${statusMeta.badge}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.dot} animate-pulse`} />
            {statusMeta.label}
          </span>
        )}
      </div>

      <p className="text-xs font-medium text-muted-foreground/80 uppercase tracking-wider mb-4">
        {duration}
      </p>

      <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs font-medium text-primary/70 uppercase tracking-wide bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
