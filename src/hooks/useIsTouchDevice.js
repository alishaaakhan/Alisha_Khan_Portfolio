import { useEffect, useState } from "react";

function getInitialTouch() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(getInitialTouch);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const handler = (e) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isTouch;
}
