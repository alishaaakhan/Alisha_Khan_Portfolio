import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import CertificateCard from "./CertificateCard";
import { useCarousel } from "../hooks/useCarousel";
import { certificates } from "../data/certificates";

export default function Certificates() {
  const { index, cardsPerView, maxIndex, next, prev, goTo } = useCarousel(certificates.length, {
    base: 1,
    sm: 2,
    lg: 3,
  });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <section id="certificates" className="relative px-4 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Certificates"
            title="Courses & credentials"
            description="Welcome to my Certificates section,
This section showcases certifications and learning milestones that reflect my commitment to continuous growth, skill development, and staying updated with emerging technologies. Each certificate represents an opportunity to learn, explore new concepts, and strengthen my technical and professional capabilities.
"
          />
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prev}
              disabled={index === 0}
              className="cursor-hover glass rounded-full p-2.5 text-ink disabled:opacity-30"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="cursor-hover glass rounded-full p-2.5 text-ink disabled:opacity-30"
              aria-label="Next certificate"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden"
          role="region"
          aria-label="Certificate carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(e, info) => {
              if (info.offset.x < -80) next();
              else if (info.offset.x > 80) prev();
            }}
            animate={{ x: `-${index * (100 / cardsPerView)}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
          >
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="shrink-0 px-3"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <CertificateCard certificate={cert} />
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
                aria-label={`Go to certificate page ${i + 1}`}
                className={`cursor-hover h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-gradient-to-r from-violet to-blue" : "w-1.5 bg-white/15"
                }`}
              />
            ))}
          </div>
        )}

        {/* <p className="mt-8 text-center text-sm text-dim">
          Certificate verification links will be added as they become available.
        </p> */}
      </div>
    </section>
  );
}
