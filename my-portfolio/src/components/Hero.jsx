import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import HeroTextSlider from "./HeroTextSlider";
import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <div className="hero-img-frame">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/163/627/original/27733051-9FE7-4185-B9DA-740C19C9D50D_4_5005_c-removebg-preview.png?1745157595"
                alt="Jacinda"
                className="hero-img"
              />
            </div>
          </div>
          <div className="hero-text col-md-8 d-flex flex-column align-items-center justify-content-center text-center">
            <motion.h2
              className="title hero-title display-4 text-center fw-bold mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm Jacinda 👋
            </motion.h2>
            <h1>
              Front-end developer, where precision meets <HeroTextSlider />
            </h1>
            <a
              href="/Jacinda_Bietz_FrontEnd_Resume_2025.pdf"
              className="btn btn-primary resume-download"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download My Résumé
            </a>
            <Link to="/about" className="next-page text-muted mt-3">
              Would you like to learn more about me.
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
