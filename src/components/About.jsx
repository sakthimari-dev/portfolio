
import { motion } from "framer-motion";
import myPhoto from "../assets/my-photo.png";

export default function About() {
  return (
    <section className="relative min-h-screen w-full bg-dark flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <span className="inline-block text-xs tracking-[0.3em] text-accent font-nav mb-4">
          CREATIVE WEB ARCHITECT
        </span>

        <h2 className="font-heading font-black text-5xl md:text-7xl leading-[0.95] mb-6 tracking-tight">
          HELLO,
          <br />
          I'M SAKTHI
          <br />
          <span className="text-white/20">DEVELOPER</span>
        </h2>

        <p className="text-white/90 font-semibold text-sm md:text-base max-w-md leading-relaxed">
          Passionate Full Stack Developer crafting modern, interactive and
          premium digital experiences with clean code, creative UI
          animations and futuristic design aesthetics.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30, filter: "blur(15px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.03 }}
          className="relative w-64 md:w-80 aspect-[3/4] transition-transform duration-300"
        >
        <motion.span
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.08, borderColor: "rgba(255,122,26,0.6)" }}
            className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm border border-white/20 text-white/80 text-[10px] tracking-widest font-nav px-3 py-1 cursor-default"
          >
            FULL STACK DEVELOPER
          </motion.span>

          <img
            src={myPhoto}
            alt="Sakthi"
            className="w-full h-full object-cover grayscale contrast-125"
          />

         <motion.span
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.08, borderColor: "rgba(255,122,26,0.6)" }}
            className="absolute bottom-3 right-3 z-10 bg-black/60 backdrop-blur-sm border border-white/20 text-white/80 text-[10px] tracking-widest font-nav px-3 py-1 cursor-default"
          >
            10+ PROJECTS DONE
          </motion.span>

        </motion.div>
      </motion.div>
    </section>
  );
}