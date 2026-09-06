import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile, socialLinks, floatingBadges } from "../data/profile";

const bars = [
  { label: "Python", value: 60 },
  { label: "C++", value: 60 },
  { label: "HTML/CSS", value: 85 },
  { label: "Data Analytics", value: 60 },
];

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-8 sm:h-9 overflow-hidden">
      <motion.p
        key={index}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -24, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="font-display text-lg sm:text-xl text-blue"
      >
        {profile.roles[index]}
      </motion.p>
    </div>
  );
}

const badgePositions = [
  "top-[6%] left-[2%]",
  "top-[18%] -left-[4%]",
  "top-[2%] right-[10%]",
  "top-[36%] -right-[6%]",
  "top-[58%] -left-[6%]",
  "top-[70%] left-[6%]",
  "top-[82%] right-[2%]",
  "top-[46%] right-[0%]",
  "top-[92%] left-[30%]",
  "top-[-4%] left-[38%]",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-28 pb-20 px-4 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mono-label text-xs text-muted mb-5"
          >
            Hi, I&apos;m Alisha Khan 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-ink"
          >
            <span className="gradient-text">AI &amp; Data Science</span>
            <br />
            Student
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5"
          >
            <RotatingRole />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-muted text-base sm:text-lg leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-hover group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-blue px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet/20 transition-transform hover:scale-[1.03]"
            >
              Explore My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumeUrl || "#resume"}
              onClick={(e) => {
                if (!profile.resumeUrl) {
                  e.preventDefault();
                  document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              download={Boolean(profile.resumeUrl)}
              className="cursor-hover glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { icon: GithubIcon, href: socialLinks.github, label: "GitHub" },
              { icon: LinkedinIcon, href: socialLinks.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${socialLinks.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="cursor-hover glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-ink hover:border-white/20"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: floating dashboard visual */}
        <div className="relative mx-auto hidden lg:block h-[420px] w-full max-w-md">
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge}
              className={`glass absolute ${badgePositions[i % badgePositions.length]} rounded-full px-3 py-1.5 text-xs text-muted mono-label`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.4 + i * 0.05 },
                y: { duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
              }}
            >
              {badge}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 shadow-2xl shadow-black/50"
          >
            <div className="flex items-center justify-between mono-label text-[10px] text-dim">
              <span>ALISHA.KHAN</span>
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                <span className="h-1.5 w-1.5 rounded-full bg-pink" />
              </span>
            </div>
            <p className="mt-3 mono-label text-[11px] text-muted">AI / DATA / DEVELOPMENT</p>

            <div className="mt-5 space-y-3">
              {bars.map((bar, i) => (
                <div key={bar.label}>
                  <div className="flex justify-between mono-label text-[11px] text-muted mb-1">
                    <span>{bar.label}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/8 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violet to-blue"
                      initial={{ width: 0 }}
                      animate={{ width: `${bar.value}%` }}
                      transition={{ duration: 1, delay: 0.6 + i * 0.12, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/8 mono-label text-[10px] text-dim tracking-widest">
              BUILD • LEARN • CREATE
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
