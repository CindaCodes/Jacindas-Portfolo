import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-5 bg-white text-dark px-3 px-md-5">
      <motion.div
        className="container text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="h2 fw-bold mb-4">About Me</h2>
        <p className="lead">
          Hi, I’m Jacinda — a frontend developer with a love for clean design,
          creative code, and an unholy amount of coffee ☕. I specialize in
          crafting sleek, responsive interfaces using React and a dash of ✨good
          energy✨.
          <br />
          <br />
          When I’m not coding, you’ll find me on long walks with my dogs (yes,
          they have more followers than me), experimenting with new recipes, or
          pretending not to cry over a really good novel. I also have a soft
          spot for organizing things — codebases, bookshelves, Notion boards...
          you name it.
          <br />
          <br />
          I’m all about creating intuitive, beautiful web experiences that feel
          just right. Whether it's building a personal project or teaming up on
          something big, I bring passion, precision, and a good playlist.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
