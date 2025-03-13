import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white py-24 px-6 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Sparkling Clean, Every Time!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          Experience top-notch cleaning services that leave your home or office
          spotless and fresh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold rounded-lg shadow-md transition"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
