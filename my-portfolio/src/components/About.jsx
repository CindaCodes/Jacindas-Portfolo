import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800 px-6 md:px-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm Cinda, a frontend developer with a love for clean design, creative
          code, and coffee ☕. I specialize in building responsive,
          user-friendly interfaces using React, Tailwind CSS, and modern web
          technologies.
          <br />
          <br />
          Whether I’m building a sleek portfolio or coding up an app, I’m always
          focused on delivering beautiful, performant results.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
