import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { socialLinks } from "../data/profile";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Connect with me",
    href: socialLinks.linkedin,
    external: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "See my code",
    href: socialLinks.github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 sm:px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Amazing Together."
          description="I'm always open to internships, collaborations, learning opportunities and exciting technology projects."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="cursor-hover glass flex items-center gap-3 rounded-2xl p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <card.icon size={18} className="text-violet-light" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-dim">{card.label}</p>
                <p className="truncate text-sm text-ink">{card.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
