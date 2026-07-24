import { motion } from "framer-motion";

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
          I'm Jacinda, an aspiring cybersecurity professional who loves
          digging into how systems work so I can help keep them safe.
          Whether I'm studying threats, exploring networks, or picking apart
          a vulnerability, I'm always sharpening my skills. I bring a
          developer's eye for detail to a security mindset — curious,
          methodical, and always asking "what if?"
          <br />
          <br />
          When I’m not learning, you’ll find me on long walks with my dogs (yes,
          they have more followers than me), experimenting with new recipes, or
          pretending not to cry over a really good novel.
          <br />
          <br />
          I’m all about protecting the systems and people behind the screen —
          spotting risks before they become problems. Whether it's a personal
          challenge or teaming up on something bigger, I bring curiosity,
          precision, and a good playlist.
          <br />
          <br />
          <strong>My Philosophy:</strong> Driven to investigate, to question
          assumptions, to challenge the expected, and to collaborate with
          those who push me to grow.
        </p>
        <br />
        <br />
        <p className="lead">
          If you're interested in collaborating or just want to chat, feel free
          to reach out. I'd love to connect!
        </p>
      </motion.div>
    </section>
  );
}

export default About; 
