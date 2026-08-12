import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const collage = [
  {
    title: "Deepfake Detector",
    img: "/projects/deepfake.png",
    pos: "top-[18%] left-[8%]",
    rotate: -8,
    url: "https://your-deepfake-detector-url.com",
  },
  {
    title: "Fertilizer System",
    img: "/projects/fertilizer.png",
    pos: "top-[15%] right-[10%]",
    rotate: 6,
    url: "https://your-fertilizer-system-url.com",
  },
  {
    title: "Rehoboth Refrigeration Hub",
    img: "/projects/rehoboth.png",
    pos: "top-[45%] left-[2%]",
    rotate: 5,
    url: "https://rehobothrefrigerationhub.online",
  },
  {
    title: "Sri Vinayagar Temple",
    img: "/projects/temple.png",
    pos: "top-[45%] right-[2%]",
    rotate: -5,
    url: "https://vinayagartempleambasamudram.netlify.app",
  },
  {
    title: "Theerthapathi School",
    img: "/projects/theerthapathi.png",
    pos: "bottom-[10%] left-[10%]",
    rotate: 7,
    url: "https://your-theerthapathi-school-url.com",
  },
  {
    title: "Sri Kamaraj School",
    img: "/projects/kamaraj.png",
    pos: "bottom-[10%] right-[8%]",
    rotate: -6,
    url: "https://your-kamaraj-school-url.com",
  },
];

export default function MyWork() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <section className="relative min-h-screen w-full bg-[#F5F0E8] flex flex-col items-center overflow-hidden pt-16">
      <h2 className="font-heading font-black text-6xl md:text-[9vw] tracking-tight text-dark z-0">
        MY WORK
      </h2>

      <div className="relative flex-1 w-full flex items-center justify-center">
        <AnimatePresence>
          {showProjects &&
            collage.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: p.rotate }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
                className={`absolute ${p.pos} w-52 h-36 md:w-64 md:h-44 rounded-lg overflow-hidden cursor-pointer shadow-2xl z-10 block`}
              >
                {/* screenshot */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* dark gradient so text stays readable over any screenshot */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <h3 className="absolute bottom-4 left-4 font-heading font-bold text-sm md:text-base text-white leading-tight z-10">
                  {p.title}
                </h3>
              </motion.a>
            ))}
        </AnimatePresence>

        <motion.button
          onClick={() => setShowProjects(!showProjects)}
          whileHover={{ scale: 1.03 }}
          className="relative z-20 w-64 md:w-80 h-44 md:h-56 cursor-pointer"
        >
          {/* folder tab (top-left) */}
          <div className="absolute -top-4 left-0 w-24 h-6 bg-accent rounded-t-md" />

          {/* folder body */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-yellow-300 flex items-center justify-center shadow-2xl shadow-black/30">
            <motion.div
              animate={{ rotate: showProjects ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 rounded-full bg-black/70 flex items-center justify-center"
            >
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-[14px] border-l-white ml-1" />
            </motion.div>
          </div>
        </motion.button>
      </div>
    </section>
  );
}