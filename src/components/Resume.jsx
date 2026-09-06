import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";
import { profile } from "../data/profile";

export default function Resume() {
  const hasResume = Boolean(profile.resumeUrl);

  return (
    <section id="resume" className="relative px-4 sm:px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-16"
        >
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet/25 blur-[100px]" />
          <h2 className="relative font-display text-2xl sm:text-3xl font-semibold text-ink">
            Want to know more about my journey?
          </h2>
          <p className="relative mt-4 text-muted max-w-lg mx-auto">
            Explore my experience, skills, projects, certifications and achievements.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            {hasResume ? (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink"
              >
                <Eye size={16} /> View Resume
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-dim">
                <Eye size={16} /> Resume coming soon
              </span>
            )}

            {hasResume ? (
              <a
                href={profile.resumeUrl}
                download
                className="cursor-hover inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-blue px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet/20"
              >
                <Download size={16} /> Download Resume
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-dim">
                <Download size={16} /> Download coming soon
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
