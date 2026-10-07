import { useState } from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/my-photo.png";

const colors = [
  { name: "red", hex: "#EF4444", grad: "from-red-800 via-red-600 to-red-500" },
  { name: "yellow", hex: "#FACC15", grad: "from-yellow-700 via-yellow-500 to-yellow-400" },
  { name: "green", hex: "#22C55E", grad: "from-green-800 via-green-600 to-green-500" },
  { name: "purple", hex: "#A78BFA", grad: "from-purple-950 via-purple-700 to-purple-400" },
  { name: "pink", hex: "#F87171", grad: "from-pink-800 via-pink-600 to-pink-500" },
  { name: "orange", hex: "#FB923C", grad: "from-orange-800 via-orange-600 to-orange-500" },
];

const photoMask =
  "linear-gradient(to bottom, transparent 0%, black 8%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 6%, black 88%, transparent 100%)";

export default function Hero() {
  const [theme, setTheme] = useState(colors[3]);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] ${theme.grad} flex items-center justify-center transition-colors duration-700`}
    >
      <h2 className="absolute text-[16vw] md:text-[15.5vw] font-heading text-white/15 tracking-tight select-none leading-none whitespace-nowrap">
        PORTFOLIO
      </h2>

      <h2
        style={{
          maskImage: `radial-gradient(180px circle at ${pos.x}% ${pos.y}%, black, transparent)`,
          WebkitMaskImage: `radial-gradient(180px circle at ${pos.x}% ${pos.y}%, black, transparent)`,
        }}
        className="absolute text-[16vw] md:text-[15.5vw] font-heading text-white tracking-tight select-none leading-none whitespace-nowrap"
      >
        PORTFOLIO
      </h2>

      <motion.div
        className="relative z-10"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-52 md:w-72 aspect-[3/4]"
        >
          <img
  src={myPhoto}
  alt="profile"
  className="w-full h-full object-cover"
  style={{
    maskImage: photoMask,
    WebkitMaskImage: photoMask,
    maskComposite: "intersect",
    WebkitMaskComposite: "source-in",
  }}
/>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 flex gap-2"
      >
        {colors.map((c) => (
          <motion.button
            key={c.name}
            onClick={() => setTheme(c)}
            style={{ backgroundColor: c.hex }}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            className="w-3.5 h-3.5 rounded-full"
          />
        ))}
      </motion.div>
    </section>
  );
}