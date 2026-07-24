import React, { useState, useEffect } from "react";
import "./Hero.css";

const words = ["Vigilance", "Integrity", "Resilience", "Defense", "Trust"];

export default function HeroTextSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container title">
      <div className="slider-text">
        {words.map((word, i) => (
          <span
            key={i}
            className={`slider-word ${i === index ? "active" : ""}`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
