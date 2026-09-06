import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

// Lightweight canvas-based particle + mouse-glow field. Pure decoration,
// kept behind content and marked aria-hidden.
export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height, dpr;
    let particles = [];
    let animationId;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(60, Math.floor((width * height) / 26000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }));
    };

    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // mouse glow
      const { x, y } = mouseRef.current;
      const glow = ctx.createRadialGradient(x, y, 0, x, y, 320);
      glow.addColorStop(0, "rgba(124, 92, 252, 0.10)");
      glow.addColorStop(1, "rgba(124, 92, 252, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(148, 163, 220, 0.35)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reducedMotion) {
      window.addEventListener("mousemove", handleMouse, { passive: true });
      draw();
    } else {
      draw();
      cancelAnimationFrame(animationId);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animationId);
    };
  }, [reducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-void" />
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(circle at 50% 20%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 20%, black 0%, transparent 75%)",
        }}
      />
      {/* aurora orbs */}
      <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-violet/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-blue/15 blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-pink/10 blur-[130px]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
