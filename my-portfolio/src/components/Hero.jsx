import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4">
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Jacinda 👋
      </motion.h2>

      <motion.p
        className="text-lg md:text-2xl max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A passionate frontend developer crafting beautiful and responsive web
        experiences.
      </motion.p>

      <motion.a
        href="#projects"
        className="mt-8 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow hover:bg-purple-100 transition"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default Hero;
