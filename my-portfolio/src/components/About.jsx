import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <section
      id="about"
      className="about py-5 text-dark px-3 px-md-5 min-vh-100 align-items-center d-flex"
    >
      <motion.div
        className="container text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="h2 fw-bold mb-4 title">About Me</h2>
        <p className="lead">
          I'm Jacinda, a Junior Front-end developer who loves turning ideas into
          interactive experiences. Whether I'm coding, designing, I'm always
          building something exciting. I specialize in crafting sleek,
          responsive interfaces using React and a dash of ✨good energy✨.
          <br />
          <br />
          When I’m not coding, you’ll find me on long walks with my dogs (yes,
          they have more followers than me), experimenting with new recipes, or
          pretending not to cry over a really good novel.
          <br />
          <br />
          I’m all about creating intuitive, beautiful web experiences that feel
          just right. Whether it's building a personal project or teaming up on
          something big, I bring passion, precision, and a good playlist.
          <br />
          <br />
          <strong>My Philosophy:</strong> Driven to build, to explore new ideas,
          to challenge the expected, and to collaborate with those who push me
          to grow.
        </p>
        <br />
        <br />
        <p className="lead">
          If you're interested in collaborating or just want to chat, feel free
          to reach out. I'd love to connect!{" "}
          <Link to="/contact" className="next-page text-dark  mt-3">
            Contact Me for More Information.
          </Link>
        </p>

        <br />
        <br />
        <Link to="/projects" className="next-page text-muted mt-3">
          Lets Go To My Projects Page.
          <span className="arrow">→</span>
        </Link>
      </motion.div>
    </section>
  );
}

export default About; 
