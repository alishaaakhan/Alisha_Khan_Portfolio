import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsTouchDevice } from "../hooks/useIsTouchDevice";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reducedMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 26, stiffness: 260, mass: 0.4 };
  const ringX = useSpring(x, springConfig);
  const ringY = useSpring(y, springConfig);

  useEffect(() => {
    if (isTouch || reducedMotion) return;

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e) => {
      const interactive = e.target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-hover"
      );
      setIsHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [isTouch, reducedMotion, visible, x, y]);

  if (isTouch || reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block" aria-hidden="true">
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-blue"
        style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-violet-light/60"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 52 : 28,
          height: isHovering ? 52 : 28,
          borderColor: isHovering ? "rgba(56,189,248,0.7)" : "rgba(167,139,250,0.5)",
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
