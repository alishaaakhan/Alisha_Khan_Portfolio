import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ImageOff } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-0"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              className="cursor-hover absolute right-4 top-4 z-10 rounded-full glass p-2 text-ink"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="h-56 sm:h-64 w-full bg-navy-light">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-dim">
                  <ImageOff size={30} />
                  <span className="mono-label text-xs">Preview coming soon</span>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <p className="mono-label text-xs text-blue">{project.category}</p>
              <h3 id="project-modal-title" className="mt-2 font-display text-2xl sm:text-3xl text-ink">
                {project.title}
              </h3>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs mono-label text-dim uppercase mb-1.5">Problem</h4>
                  <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs mono-label text-dim uppercase mb-1.5">Solution</h4>
                  <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs mono-label text-dim uppercase mb-2">Key Features</h4>
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-light" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-xs mono-label text-dim uppercase mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-hover inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet to-blue px-5 py-2.5 text-sm font-medium text-white"
                  >
                    {project.demoLabel || "Live Demo"} <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 text-sm text-dim">
                    {project.demoLabel || "Live Demo"} — Coming Soon
                  </span>
                )}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-hover glass inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm text-ink"
                  >
                    GitHub <GithubIcon size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 text-sm text-dim">
                    GitHub — Private
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
