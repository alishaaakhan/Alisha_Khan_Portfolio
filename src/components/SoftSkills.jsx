import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { resolveIcon } from "../lib/iconRegistry";
import { softSkills } from "../data/skills";

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="relative px-4 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Soft Skills"
          title="Beyond the tech stack"
          description="The working habits and people skills that shape how I build, learn and collaborate."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSkills.map((skill, i) => {
            const Icon = resolveIcon(skill.icon);
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                whileHover={{ y: -5 }}
                className="glass cursor-hover rounded-2xl p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <Icon size={19} className="text-violet-light" />
                </div>
                <h3 className="font-display text-base text-ink">{skill.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
