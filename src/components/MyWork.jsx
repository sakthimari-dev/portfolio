import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// x / y = final offset from the folder's center (vw / vh)
// depth = 0.6 (far) → 1.2 (near): drives final size + mouse parallax strength
const collage = [
  { title: "Deepfake Detector", img: "/projects/deepfake.png", x: -34, y: -22, rotate: -8, depth: 0.7, url: "https://your-deepfake-detector-url.com" },
  { title: "Fertilizer System", img: "/projects/fertilizer.png", x: 34, y: -24, rotate: 6, depth: 0.8, url: "https://your-fertilizer-system-url.com" },
  { title: "Rehoboth Refrigeration Hub", img: "/projects/rehoboth.png", x: -39, y: 2, rotate: 5, depth: 1.0, url: "https://rehobothrefrigerationhub.online" },
  { title: "Sri Vinayagar Temple", img: "/projects/temple.png", x: 39, y: 2, rotate: -5, depth: 1.0, url: "https://vinayagartempleambasamudram.netlify.app" },
  { title: "Theerthapathi School", img: "/projects/theerthapathi.png", x: -30, y: 26, rotate: 7, depth: 1.2, url: "https://your-theerthapathi-school-url.com" },
  { title: "Sri Kamaraj School", img: "/projects/kamaraj.png", x: 31, y: 26, rotate: -6, depth: 1.2, url: "https://your-kamaraj-school-url.com" },
];

const EXPO_OUT = [0.16, 1, 0.3, 1]; // long, silky deceleration

function ProjectCard({ p, i, fx, fy, riseY, sx, sy, reduce }) {
  // mouse parallax: nearer cards (higher depth) shift more, opposite to cursor
  const px = useTransform(sx, (v) => v * p.depth * -22);
  const py = useTransform(sy, (v) => v * p.depth * -22);

  const finalScale = 0.88 + p.depth * 0.14; // far cards slightly smaller
  const sway = (i % 2 === 0 ? -1 : 1) * 22;
  const delay = i * 0.14;

  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      // starts hidden, tiny and blurred, between the folder's back and front panels
      initial={{ opacity: 0, scale: 0.35, x: 0, y: 0, rotate: 0, filter: "blur(14px)" }}
      animate={{
        opacity: [0, 1, 1],
        scale: [0.35, 0.8, finalScale],
        x: [0, sway, fx],
        y: [0, riseY, fy],
        rotate: [0, p.rotate * 0.5, p.rotate],
        filter: ["blur(14px)", "blur(6px)", "blur(0px)"],
        transition: {
          duration: 2.6,
          delay,
          times: [0, 0.38, 1],
          ease: ["easeOut", EXPO_OUT],
          opacity: { duration: 0.7, delay },
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.35,
        x: 0,
        y: 0,
        rotate: 0,
        filter: "blur(10px)",
        transition: { duration: 0.6, delay: (collage.length - 1 - i) * 0.05, ease: "easeIn" },
      }}
      whileHover={{
        scale: finalScale * 1.08,
        rotate: 0,
        zIndex: 30,
        boxShadow: "0 40px 70px -15px rgba(0,0,0,0.45)",
        transition: { duration: 0.4, ease: EXPO_OUT },
      }}
      className="group absolute left-1/2 top-1/2 -ml-[104px] -mt-[72px] md:-ml-32 md:-mt-[88px] w-52 h-36 md:w-64 md:h-44 rounded-xl cursor-pointer z-10 block"
    >
      {/* layer 2: mouse parallax */}
      <motion.div style={{ x: px, y: py }} className="w-full h-full">
        {/* layer 3: idle float (separate so it never fights the layers above) */}
        <motion.div
          className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/25"
          animate={reduce ? undefined : { y: [0, -9, 0] }}
          transition={{
            duration: 5 + i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.6 + delay,
          }}
        >
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* index + arrow */}
          <span className="absolute top-3 left-4 font-heading text-[10px] tracking-[0.25em] text-white/70">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="absolute top-2.5 right-3 w-7 h-7 rounded-full bg-white/90 text-black text-sm flex items-center justify-center opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
            ↗
          </span>

          <h3 className="absolute bottom-4 left-4 right-4 font-heading font-bold text-sm md:text-base text-white leading-tight">
            {p.title}
          </h3>
        </motion.div>
      </motion.div>
    </motion.a>
  );
}

export default function MyWork() {
  const [showProjects, setShowProjects] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();

  // cursor position (-1 → 1), smoothed with a spring
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const hasWindow = typeof window !== "undefined";
  const isMobile = hasWindow && window.innerWidth < 768;
  const vw = hasWindow ? window.innerWidth / 100 : 12;
  const vh = hasWindow ? window.innerHeight / 100 : 8;
  const xScale = isMobile ? 0.5 : 1;
  const riseY = isMobile ? -160 : -200; // enough to fully clear the folder's top edge

  // shared by back + front panels so they stay perfectly aligned
  const panelBox =
    "absolute left-1/2 top-1/2 -ml-32 md:-ml-40 -mt-[88px] md:-mt-28 w-64 md:w-80 h-44 md:h-56";
  const hoverScale = hovered ? 1.03 : 1;

  return (
    <section
      id="work"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative min-h-screen w-full bg-[#F5F0E8] flex flex-col items-center overflow-hidden pt-16"
    >
      <h2 className="font-heading font-black text-6xl md:text-[9vw] tracking-tight text-dark z-0">
        MY WORK
      </h2>

      <div className="relative flex-1 w-full">
        {/* BACK panel of the folder (z-0): the dark inside + tab */}
        <motion.div
          className={`${panelBox} z-0`}
          animate={{ scale: hoverScale }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="absolute -top-4 left-0 w-24 h-6 bg-accent brightness-[0.82] rounded-t-md" />
          <div className="absolute inset-0 rounded-lg bg-accent brightness-[0.82] shadow-2xl shadow-black/30" />
        </motion.div>

        {/* CARDS (z-10): live between the back and front panels */}
        <AnimatePresence>
          {showProjects &&
            collage.map((p, i) => (
              <ProjectCard
                key={p.title}
                p={p}
                i={i}
                fx={p.x * xScale * vw}
                fy={p.y * vh}
                riseY={riseY}
                sx={sx}
                sy={sy}
                reduce={reduce}
              />
            ))}
        </AnimatePresence>

        {/* FRONT panel (z-20): tilts open like a real folder flap */}
        <motion.button
          onClick={() => setShowProjects((s) => !s)}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          aria-label={showProjects ? "Close projects" : "Open projects"}
          aria-expanded={showProjects}
          className={`${panelBox} z-20 cursor-pointer`}
          style={{ transformPerspective: 1100, transformOrigin: "50% 100%" }}
          animate={{ rotateX: showProjects ? -16 : 0, scale: hoverScale }}
          transition={{ type: "spring", stiffness: 90, damping: 16 }}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-yellow-300 shadow-2xl shadow-black/30 ring-1 ring-white/30 flex items-center justify-center">
            {/* top highlight for a glassy edge */}
            <div className="absolute inset-x-0 top-0 h-px bg-white/60 rounded-t-lg" />

            <motion.div
              animate={{ rotate: showProjects ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 14 }}
              className="w-14 h-14 rounded-full bg-black/75 flex items-center justify-center"
            >
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-[14px] border-l-white ml-1" />
            </motion.div>

            <span className="absolute bottom-4 left-5 font-heading text-[10px] md:text-xs tracking-[0.25em] text-black/55 uppercase">
              {showProjects ? "Close" : "View projects"}
            </span>
          </div>
        </motion.button>
      </div>
    </section>
  );
}