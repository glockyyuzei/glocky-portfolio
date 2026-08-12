import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const STATS = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Programming Languages", value: 5, suffix: "+" },
  { label: "Years of Experience", value: 2, suffix: "+" },
  { label: "Technologies Used", value: 8, suffix: "+" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 max-w-5xl mx-auto border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-12">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT — ABOUT DESCRIPTION */}
          <div className="text-lg text-primary/90 leading-relaxed font-light">
            <p className="mb-6">
              I'm Danmil F. Balotol, also known online as Glocky Yuzei. I'm a
              second-year Bachelor of Science in Information Technology (BSIT)
              student at ACLC College of Tacloban with a passion for software
              development. I enjoy turning ideas into real, working
              applications, with most of my work focused on the Minecraft
              ecosystem. From mods and plugins to server systems, web
              applications, launchers, and developer tools, I like building
              projects that challenge me to learn, experiment, and improve
              along the way.
            </p>

            <p>
              Beyond Minecraft development, I'm continuously exploring new
              technologies and expanding my knowledge in software engineering.
              My goal is to become a versatile developer who creates reliable,
              scalable, and well-designed applications while constantly
              refining my skills through hands-on experience and personal
              projects.
            </p>
          </div>

          {/* RIGHT — PHOTO + STATS */}
          <div className="flex flex-col">
            {/* PORTRAIT PHOTO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-center"
            >
              <div className="relative w-full max-w-[360px] aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <img
                  src="/assets/my_pic.jpg"
                  alt="Danmil F. Balotol"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-8 mt-10">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="min-w-0"
                >
                  <div className="text-2xl sm:text-3xl font-semibold text-primary">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>

                  <div className="mt-2 text-xs text-muted-foreground font-medium leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}