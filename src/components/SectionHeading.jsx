import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mono-label text-xs text-blue mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
