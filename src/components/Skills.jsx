import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { resolveIcon } from "../lib/iconRegistry";
import { skillCategories } from "../data/skills";

function SkillIcon({ name }) {
  const Icon = resolveIcon(name);
  return <Icon size={18} className="text-blue" />;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative px-4 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="An interactive skills dashboard"
          description="Technologies I work with across software development, AI/ML, data, mobile and Pega — organized by category."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`cursor-hover rounded-full px-4 py-2 text-xs mono-label transition-colors ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-violet to-blue text-white"
                : "glass text-muted hover:text-ink"
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-hover rounded-full px-4 py-2 text-xs mono-label transition-colors ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-violet to-blue text-white"
                  : "glass text-muted hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {visibleCategories.map((cat) => (
                <div key={cat.id}>
                  {activeCategory === "all" && (
                    <h3 className="mb-4 font-display text-sm text-muted tracking-wide">
                      {cat.label}
                    </h3>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {cat.skills.map((skill) => (
                      <motion.div
                        key={cat.id + skill.name}
                        whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.2)" }}
                        className="glass cursor-hover flex items-center gap-2.5 rounded-xl px-3.5 py-3"
                      >
                        <SkillIcon name={skill.icon} />
                        <span className="text-sm text-ink">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
