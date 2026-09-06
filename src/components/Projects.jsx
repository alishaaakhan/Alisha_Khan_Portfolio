import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useCarousel } from "../hooks/useCarousel";
import { projects, projectFilters } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.filterTags.includes(filter));

  const { index, cardsPerView, maxIndex, next, prev, goTo } = useCarousel(filtered.length, {
    base: 1,
    sm: 1,
    lg: 2,
  });

  const handleFilter = (id) => {
    setFilter(id);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <section id="projects" className="relative px-4 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured Projects"
            title="What I've been building"
            description="A mix of AI, mobile and Pega work — swipe, drag, or use the arrows to browse."
          />

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prev}
              disabled={index === 0}
              className="cursor-hover glass rounded-full p-2.5 text-ink disabled:opacity-30"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="cursor-hover glass rounded-full p-2.5 text-ink disabled:opacity-30"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => handleFilter(f.id)}
              className={`cursor-hover rounded-full px-4 py-2 text-xs mono-label transition-colors ${
                filter === f.id
                  ? "bg-gradient-to-r from-violet to-blue text-white"
                  : "glass text-muted hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          className="mt-10 overflow-hidden"
          role="region"
          aria-label="Project carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <motion.div
            className="flex"
            drag={filtered.length > cardsPerView ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(e, info) => {
              if (info.offset.x < -80) next();
              else if (info.offset.x > 80) prev();
            }}
            animate={{ x: `-${index * (100 / cardsPerView)}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
          >
            {filtered.map((project) => (
              <div
                key={project.id}
                className="shrink-0 px-3"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <ProjectCard project={project} onOpen={setActiveProject} />
              </div>
            ))}
          </motion.div>
        </div>

        {maxIndex > 0 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project page ${i + 1}`}
                className={`cursor-hover h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-gradient-to-r from-violet to-blue" : "w-1.5 bg-white/15"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
