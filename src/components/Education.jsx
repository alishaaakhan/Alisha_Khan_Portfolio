import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/experience";

export default function Education() {
  return (
    <section id="education" className="relative px-4 sm:px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <div className="mt-12 space-y-6">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl p-7"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-blue">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-ink">{item.degree}</h3>
                <p className="mt-1 text-sm text-blue">{item.specialization}</p>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                <p className="mt-1 mono-label text-xs text-dim">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

