import { motion } from "framer-motion";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center bg-purple-600 text-white vh-100 px-4"
      style={{
        background: "linear-gradient(to bottom right, #9b4d96, #f687b3)",
      }}
    >
      <motion.h2
        className="display-4 font-weight-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Jacinda 👋
      </motion.h2>

      <motion.p
        className="lead mx-auto mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A passionate frontend developer crafting beautiful and responsive web
        experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="light"
          size="lg"
          href="#projects"
          className="mt-4 px-6 py-3 text-purple-600 font-semibold rounded-pill shadow"
        >
          View My Work
        </Button>
      </motion.div>
    </section>
  );
}

export default Hero;
