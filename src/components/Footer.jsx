import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { socialLinks } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 px-4 sm:px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-ink">
            Alisha<span className="text-violet-light">.</span>Khan
          </p>
          <p className="mt-1 text-sm text-muted">AI &amp; Data Science Student | Developer</p>
          <p className="mt-1 mono-label text-xs text-dim">Building • Learning • Creating</p>
        </div>

        <div className="flex items-center gap-3">
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
              className="cursor-hover glass flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-ink"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-dim">
        © {year} Alisha Khan. All rights reserved.
      </p>
    </footer>
  );
}
