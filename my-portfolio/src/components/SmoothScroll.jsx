import React from "react";
import { ReactLenis } from "lenis/react";

const lenisOptions = {
  lerp: 0.1,
  duration: 1.2,
  smoothWheel: true,
  anchors: true,
};

export default function SmoothScroll({ children }) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    return children;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
