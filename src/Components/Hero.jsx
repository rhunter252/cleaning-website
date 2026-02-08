import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-[url('/office-hero2.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-white/10"></div>
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-emerald-400/25 blur-3xl"></div>
      <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl"></div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start text-left text-white px-6 py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Kingdom Care Cleaning
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-5 max-w-2xl text-lg md:text-xl text-white/90"
        >
          A veteran-owned, owner operated commercial cleaning company serving
          offices and medical offices throughout Greensboro and surrounding
          areas. We deliver dependable professional cleaning services with clear
          communication and consistent results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get a Quote
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
