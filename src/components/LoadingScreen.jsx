import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["AI", "DATA", "CODE", "CREATE"];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((i) => (i + 1 < words.length ? i + 1 : i));
    }, 260);
    const doneTimer = setTimeout(() => setVisible(false), 1400);
    return () => {
      clearInterval(wordTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div className="font-display text-2xl sm:text-3xl tracking-tight text-ink">
            ALISHA<span className="text-violet-light">.</span>KHAN
          </div>
          <div className="mt-3 mono-label text-xs text-dim uppercase">Initializing</div>
          <div className="mt-6 h-6 overflow-hidden">
            <motion.div
              key={wordIndex}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="mono-label text-sm gradient-text"
            >
              {words[wordIndex]}
            </motion.div>
          </div>
          <div className="mt-8 h-[2px] w-40 bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-violet to-blue"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
