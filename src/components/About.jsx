import { motion } from "framer-motion";
import { User } from "lucide-react";
import { profile, stats } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="relative px-4 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet via-blue to-pink opacity-70 blur-md" />
            <div className="glass absolute inset-[6px] rounded-full flex items-center justify-center overflow-hidden">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <User size={72} className="text-dim" aria-hidden="true" />
              )}
            </div>
            <motion.div
              className="absolute inset-[-6px] rounded-full border border-violet-light/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mono-label text-xs text-blue mb-3"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight"
          >
            An AI &amp; Data Science student who builds real-world applications.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-xl"
          >
            I&apos;m a Computer Science Engineering student specializing in{" "} <span className="text-ink">Artificial Intelligence &amp; Data Science</span>, with a strong interest in building intelligent, practical, and user-focused digital solutions. My experience spans AI, data science, analytics, software, web, and mobile application development. I&apos;m driven by curiosity, problem-solving, and continuous learning, with a focus on turning ideas into meaningful projects and real-world impact.
          </motion.p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass cursor-hover rounded-2xl p-4 text-center"
              >
                <p className="font-display gradient-text text-2xl font-semibold">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
