import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const EMAIL = "sakthimari9345@gmail.com";
const socials = [
  { label: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/919345258241" },
  { label: "Instagram", icon: FaInstagram, href: "https://instagram.com/sakthimari_007" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sakthimari07" },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/sakthimari-dev" },
];

/* ---------- fireflies: drift around while the lamp is on ---------- */
function Fireflies({ count = 16 }) {
  const flies = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        dx: (Math.random() - 0.5) * 90,
        dy: (Math.random() - 0.5) * 90,
        dur: 6 + Math.random() * 6,
        delay: Math.random() * 3,
        size: 3 + Math.random() * 3,
      })),
    [count]
  );

  return (
    <>
      {flies.map((f, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-yellow-300"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            boxShadow: "0 0 10px 3px rgba(250,204,21,0.7)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0.3, 1, 0],
            x: [0, f.dx, -f.dx / 2, f.dx / 3, 0],
            y: [0, f.dy, -f.dy / 2, f.dy / 3, 0],
          }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          transition={{
            duration: f.dur,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

/* ---------- form reveal: fields appear one by one when the lamp is on ---------- */
const reveal = {
  box: {
    off: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    on: { transition: { staggerChildren: 0.14, delayChildren: 0.4 } },
  },
  item: {
    off: { opacity: 0, y: 14, filter: "blur(6px)", transition: { duration: 0.35 } },
    on: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

/* ---------- the lamp (SVG) ---------- */
function Lamp({ on, onToggle }) {
  const [pulled, setPulled] = useState(false);

  const handleClick = () => {
    setPulled(true);
    setTimeout(() => setPulled(false), 180);
    onToggle();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={on}
      aria-label="Toggle lamp"
      className="relative w-full h-full cursor-pointer focus:outline-none"
    >
      <svg
        viewBox="0 0 300 440"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="lampCone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fde68a" stopOpacity="0.65" />
            <stop offset="1" stopColor="#facc15" stopOpacity="0.04" />
          </linearGradient>
          <radialGradient id="lampPool" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#facc15" stopOpacity="0.4" />
            <stop offset="1" stopColor="#facc15" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="lampHalo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#fde68a" stopOpacity="0.5" />
            <stop offset="1" stopColor="#fde68a" stopOpacity="0" />
          </radialGradient>
          <filter id="lampSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* light: cone + halo + floor pool (fades in/out) */}
        <motion.g
          initial={false}
          animate={{ opacity: on ? 1 : 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <circle cx="150" cy="122" r="100" fill="url(#lampHalo)" />
          <polygon
            points="112,124 188,124 288,404 12,404"
            fill="url(#lampCone)"
            filter="url(#lampSoft)"
          />
          <ellipse cx="150" cy="404" rx="145" ry="24" fill="url(#lampPool)" />
        </motion.g>

        {/* pole + base */}
        <rect x="148" y="122" width="4" height="276" rx="2" fill="#2a2a2a" />
        <ellipse cx="150" cy="399" rx="34" ry="7" fill="#1a1a1a" />

        {/* shade */}
        <path
          d="M108 124 A42 42 0 0 1 192 124 Z"
          fill="#0c0c0c"
          stroke="#2c2c2c"
          strokeWidth="1"
        />
        <motion.ellipse
          cx="150"
          cy="124"
          rx="42"
          ry="4"
          initial={false}
          animate={{ fill: on ? "#fff3c4" : "#1c1c1c" }}
          transition={{ duration: 0.6 }}
        />

        {/* pull cord */}
        <motion.g
          animate={{ y: pulled ? 14 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 14 }}
        >
          <line x1="180" y1="126" x2="180" y2="178" stroke="#666" strokeWidth="1.5" />
          <circle cx="180" cy="182" r="4.5" fill="#facc15" />
        </motion.g>
      </svg>
    </button>
  );
}

/* ---------- section ---------- */
export default function Contact() {
  const [on, setOn] = useState(false);
  const [touched, setTouched] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  // Switch the lamp on by itself once the section is on screen,
  // so visitors see the effect without hunting for the cord.
  useEffect(() => {
    if (inView && !touched) {
      const t = setTimeout(() => setOn(true), 900);
      return () => clearTimeout(t);
    }
  }, [inView, touched]);

  const toggle = () => {
    setTouched(true);
    setOn((o) => !o);
  };

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend yet: opens the visitor's mail app, pre-filled.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full bg-transparent border-b py-4 text-base text-white outline-none placeholder:text-white/40 transition-colors duration-700 focus:border-yellow-400 " +
    (on ? "border-yellow-200/30" : "border-white/20");

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen w-full bg-black text-white flex flex-col items-center px-5 py-20 overflow-hidden"
    >
      <h2 className="font-heading font-black text-5xl sm:text-7xl md:text-[8vw] leading-none tracking-tight text-center">
        {"LET'S TALK"}
      </h2>

      {/* socials */}
      <div className="flex gap-4 md:gap-6 mt-10">
        {socials.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white flex items-center justify-center text-xl md:text-2xl transition-all duration-300 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black hover:-translate-y-1"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* scene: lamp (left) + form card (right) */}
      <div className="relative w-full max-w-5xl mt-14">
        {/* warm light spilling onto the card */}
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 35% 55%, rgba(250,204,21,0.12), transparent 70%)",
          }}
          initial={false}
          animate={{ opacity: on ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        />

        {/* fireflies */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <AnimatePresence>{on && !reduce && <Fireflies />}</AnimatePresence>
        </div>

        <div className="relative z-10 grid md:grid-cols-[1fr_1.1fr] gap-6 md:gap-10 items-center">
          {/* lamp */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[360px] h-[300px] md:h-[470px]">
              <Lamp on={on} onToggle={toggle} />
            </div>
            <motion.p
              className="mt-3 text-xs tracking-[0.3em] uppercase text-white/50"
              animate={{ opacity: on ? 0 : [0.3, 1, 0.3] }}
              transition={
                on ? { duration: 0.3 } : { duration: 2.4, repeat: Infinity }
              }
            >
              Pull the cord
            </motion.p>
          </div>

          {/* form card: contents only visible while the lamp is on */}
          <form
            onSubmit={handleSubmit}
            className={`rounded-3xl border p-8 md:p-10 transition-all duration-1000 ${
              on
                ? "border-yellow-300/25 bg-[#12100a]/90 shadow-[0_0_80px_-10px_rgba(250,204,21,0.18)]"
                : "border-white/5 bg-[#070707] shadow-none"
            }`}
          >
            {/* disabled while off: no clicking or tabbing into invisible fields */}
            <motion.fieldset
              disabled={!on}
              variants={reveal.box}
              initial={false}
              animate={on ? "on" : "off"}
              className="border-0 p-0 m-0 min-w-0"
            >
              <motion.div variants={reveal.item}>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your Name"
                  required
                  className={field}
                />
              </motion.div>

              <motion.div variants={reveal.item} className="mt-4">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="Your Email"
                  required
                  className={field}
                />
              </motion.div>

              <motion.div variants={reveal.item} className="mt-4">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className={`${field} resize-none`}
                />
              </motion.div>

              <motion.div variants={reveal.item} className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-full px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase bg-yellow-400 text-black transition-colors duration-300 hover:bg-yellow-300"
                >
                  Send Message
                </button>
              </motion.div>
            </motion.fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}