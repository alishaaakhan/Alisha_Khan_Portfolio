import { useEffect, useState, useCallback } from "react";

// Responsive "cards per view" + paging index, shared by the Projects and
// Certificates horizontal carousels.
export function useCarousel(itemCount, perView) {
  const getPerView = useCallback(() => {
    if (typeof window === "undefined") return perView.base;
    const w = window.innerWidth;
    if (w >= 1024 && perView.lg) return perView.lg;
    if (w >= 640 && perView.sm) return perView.sm;
    return perView.base;
  }, [perView]);

  const [cardsPerView, setCardsPerView] = useState(getPerView);
  const [rawIndex, setRawIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setCardsPerView(getPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getPerView]);

  const maxIndex = Math.max(0, itemCount - cardsPerView);
  // Clamp during render instead of syncing via a second effect, so the
  // carousel never briefly points at an out-of-range page after a resize.
  const index = Math.min(rawIndex, maxIndex);

  const next = () => setRawIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setRawIndex((i) => Math.max(i - 1, 0));
  const goTo = (i) => setRawIndex(Math.min(Math.max(i, 0), maxIndex));

  return { index, cardsPerView, maxIndex, next, prev, goTo };
}
