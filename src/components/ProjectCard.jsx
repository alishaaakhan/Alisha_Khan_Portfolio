import { motion } from "framer-motion";
import { ExternalLink, ImageOff } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project, onOpen }) {
  const demoLabel = project.demoLabel || "Live Demo";

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="glass flex h-full flex-col overflow-hidden rounded-3xl"
    >
      <button
        onClick={() => onOpen(project)}
        className="cursor-hover relative block h-52 w-full overflow-hidden bg-navy-light text-left"
        aria-label={`View details for ${project.title}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-dim">
            <ImageOff size={28} />
            <span className="mono-label text-[11px]">Preview coming soon</span>
          </div>
        )}
        <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 mono-label text-[10px] text-blue">
          {project.category}
        </div>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-ink">{project.title}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center gap-3">
          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="cursor-hover inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet to-blue px-4 py-2 text-xs font-medium text-white"
            >
              {demoLabel} <ExternalLink size={13} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs text-dim">
              {demoLabel} — Coming Soon
            </span>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="cursor-hover glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs text-ink"
            >
              GitHub <GithubIcon size={13} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs text-dim">
              GitHub — Private
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
