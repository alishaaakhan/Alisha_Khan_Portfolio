import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { achievements } from "../data/experience";

const icons = { Trophy, Star };

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-4 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Achievements" title="Moments worth highlighting" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((item, i) => {
            const Icon = icons[item.icon] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass cursor-hover flex items-start gap-4 rounded-2xl p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet/25 to-blue/25 border border-white/10">
                  <Icon size={20} className="text-violet-light" />
                </div>
                <div>
                  <h3 className="font-display text-base text-ink">{item.title}</h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
