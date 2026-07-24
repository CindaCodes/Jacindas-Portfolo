import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const HOVER_SELECTOR =
  'a, button, [role="button"], .card, .cert-card, .presence-card';
const TEXT_SELECTOR = "input, textarea";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia(
      "(pointer: fine) and (hover: hover)"
    ).matches;
    if (!isFinePointer) return;

    document.body.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frameId;

    const setDotPosition = (x, y) => {
      dot.style.transform = `translate(${x}px, ${y}px)`;
    };
    const setRingPosition = (x, y) => {
      ring.style.transform = `translate(${x}px, ${y}px)`;
    };

    setDotPosition(mouseX, mouseY);
    setRingPosition(ringX, ringY);

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotPosition(mouseX, mouseY);
      if (prefersReducedMotion) {
        setRingPosition(mouseX, mouseY);
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      setRingPosition(ringX, ringY);
      frameId = requestAnimationFrame(tick);
    };
    if (!prefersReducedMotion) {
      frameId = requestAnimationFrame(tick);
    }

    const handleOver = (e) => {
      if (e.target.closest(TEXT_SELECTOR)) {
        document.body.classList.add("custom-cursor-hidden");
        return;
      }
      document.body.classList.remove("custom-cursor-hidden");
      if (e.target.closest(HOVER_SELECTOR)) {
        document.body.classList.add("custom-cursor-hover");
      }
    };
    const handleOut = (e) => {
      if (!e.target.closest(HOVER_SELECTOR)) {
        document.body.classList.remove("custom-cursor-hover");
      }
    };
    const handleDown = () => document.body.classList.add("custom-cursor-down");
    const handleUp = () => document.body.classList.remove("custom-cursor-down");
    const handleLeave = () => document.body.classList.add("custom-cursor-hidden");
    const handleEnter = () => document.body.classList.remove("custom-cursor-hidden");

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      document.body.classList.remove(
        "custom-cursor-active",
        "custom-cursor-hover",
        "custom-cursor-down",
        "custom-cursor-hidden"
      );
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
