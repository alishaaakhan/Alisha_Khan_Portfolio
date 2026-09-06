import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 sm:px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've applied what I've learned"
        />

        <div className="mt-14 relative pl-8 sm:pl-10">
          <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-violet via-blue to-transparent" />

          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-8 sm:-left-10 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-void border border-violet-light/60">
                <Briefcase size={11} className="text-blue" />
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg text-ink">{item.title}</h3>
                  <span className="mono-label text-[11px] text-dim">
                    {item.type}
                    {item.period ? ` · ${item.period}` : ""}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
