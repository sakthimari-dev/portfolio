import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useMotionValueEvent,
  useAnimationFrame,
  useTransform,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  FiCode,
  FiMonitor,
  FiSmartphone,
  FiZap,
  FiShield,
  FiBarChart2,
  FiUsers,
  FiDatabase,
  FiLock,
  FiServer,
  FiLayers,
  FiShoppingCart,
  FiCreditCard,
  FiPackage,
  FiTrendingUp,
  FiImage,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

/* screen = which mini UI is drawn inside the laptop; c = accent color for that UI */
const services = [
  {
    key: "business",
    lines: [{ t: "BUSINESS" }, { t: "WEBSITE", hl: true }, { t: "DEVELOPMENT" }],
    desc: "Modern, fast websites built to grow your business online.",
    bg: "bg-gradient-to-br from-[#0b2a16] via-[#0f3a1f] to-[#071a0e]",
    text: "text-white",
    hl: "text-lime-400",
    btn: "bg-lime-400 text-black",
    tone: "text-lime-300 border-lime-300/40",
    screen: "site",
    c: "#a3e635",
    features: [
      [FiMonitor, "Modern Design"],
      [FiSmartphone, "Responsive & Mobile Friendly"],
      [FiZap, "Fast Performance"],
      [FiShield, "Secure & Reliable"],
    ],
    footer: "Let's build a website that works for you.",
  },
  {
    key: "admin",
    lines: [{ t: "ADMIN" }, { t: "DASHBOARD", hl: true }, { t: "DEVELOPMENT" }],
    desc: "Powerful dashboards to manage data, users, and analytics.",
    bg: "bg-gradient-to-br from-orange-500 to-red-600",
    text: "text-white",
    hl: "text-[#2a0d02]",
    btn: "bg-white text-orange-700",
    tone: "text-orange-100 border-orange-100/50",
    screen: "dash",
    c: "#fb923c",
    features: [
      [FiBarChart2, "Live Analytics"],
      [FiUsers, "User Management"],
      [FiDatabase, "Data Control"],
      [FiLock, "Role Access"],
    ],
    footer: "Manage everything from one place.",
  },
  {
    key: "fullstack",
    lines: [{ t: "FULL STACK" }, { t: "WEB", hl: true }, { t: "DEVELOPMENT" }],
    desc: "End-to-end web apps: frontend, backend, and database.",
    bg: "bg-gradient-to-br from-rose-600 to-red-700",
    text: "text-[#1c0408]",
    hl: "text-white",
    btn: "bg-[#1c0408] text-white",
    tone: "text-[#1c0408] border-[#1c0408]/40",
    screen: "stack",
    c: "#fb7185",
    features: [
      [FiCode, "Clean Frontend"],
      [FiServer, "Solid Backend"],
      [FiDatabase, "Database"],
      [FiLayers, "End-to-End"],
    ],
    footer: "From idea to deployed product.",
  },
  {
    key: "ecommerce",
    lines: [{ t: "E-COMMERCE" }, { t: "STORE" }, { t: "SETUP", hl: true }],
    desc: "Complete online stores with payments and product management.",
    bg: "bg-gradient-to-br from-purple-700 to-indigo-950",
    text: "text-white",
    hl: "text-fuchsia-300",
    btn: "bg-fuchsia-300 text-purple-950",
    tone: "text-fuchsia-200 border-fuchsia-200/40",
    screen: "store",
    c: "#e879f9",
    features: [
      [FiShoppingCart, "Product Management"],
      [FiCreditCard, "Secure Payments"],
      [FiPackage, "Order Tracking"],
      [FiTrendingUp, "Built to Sell"],
    ],
    footer: "Launch your store and start selling.",
  },
  {
    key: "portfolio",
    lines: [{ t: "PORTFOLIO" }, { t: "WEBSITE" }, { t: "DESIGN", hl: true }],
    desc: "Sleek personal portfolios that showcase your work beautifully.",
    bg: "bg-gradient-to-br from-yellow-300 to-amber-400",
    text: "text-[#1a1400]",
    hl: "text-orange-600",
    btn: "bg-[#1a1400] text-yellow-300",
    tone: "text-[#1a1400] border-[#1a1400]/40",
    screen: "folio",
    c: "#fbbf24",
    features: [
      [FiImage, "Showcase Work"],
      [FiSmartphone, "Mobile Ready"],
      [FiZap, "Fast Loading"],
      [FiUser, "Personal Brand"],
    ],
    footer: "Let your work speak for you.",
  },
];

const n = services.length;
// shortest signed distance on a ring: result is always in [-n/2, n/2)
const wrap = (v) => ((((v + n / 2) % n) + n) % n) - n / 2;
const layoutFor = () =>
  typeof window !== "undefined" && window.innerWidth < 768
    ? { spacing: 240, base: 0.82 }
    : { spacing: 370, base: 1 };

/* ---------- tiny UI drawn inside the laptop screen ---------- */
function Screen({ type, c }) {
  if (type === "site")
    return (
      <div className="h-full flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <div className="w-3 h-1.5 rounded-sm" style={{ background: c }} />
          <div className="flex gap-1">
            {[0, 1, 2].map((k) => (
              <div key={k} className="h-[3px] w-2.5 rounded bg-white/30" />
            ))}
          </div>
        </div>
        <div className="flex-1 flex gap-2">
          <div className="flex-1 flex flex-col justify-center gap-1">
            <div className="h-[5px] w-[90%] rounded bg-white/80" />
            <div className="h-[5px] w-[65%] rounded bg-white/80" />
            <div className="h-[3px] w-[80%] rounded bg-white/25" />
            <div className="mt-1 h-3 w-8 rounded-sm" style={{ background: c }} />
          </div>
          <div
            className="flex-1 rounded-md"
            style={{ background: `linear-gradient(135deg, ${c}, transparent)` }}
          />
        </div>
      </div>
    );

  if (type === "dash")
    return (
      <div className="h-full flex gap-1.5">
        <div className="w-3 rounded-sm bg-white/10 flex flex-col gap-1 p-0.5">
          {[0, 1, 2, 3].map((k) => (
            <div
              key={k}
              className="h-1 rounded-sm"
              style={{ background: k === 0 ? c : "rgba(255,255,255,.25)" }}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex gap-1">
            {[0, 1, 2].map((k) => (
              <div key={k} className="flex-1 h-4 rounded-sm bg-white/10 p-0.5">
                <div className="h-[3px] w-1/2 rounded" style={{ background: c }} />
              </div>
            ))}
          </div>
          <div className="flex-1 flex items-end gap-[3px]">
            {[40, 65, 50, 80, 60, 90, 70].map((h, k) => (
              <div
                key={k}
                className="flex-1 rounded-t-sm"
                style={{ height: `${h}%`, background: c, opacity: 0.5 + k * 0.07 }}
              />
            ))}
          </div>
        </div>
      </div>
    );

  if (type === "stack")
    return (
      <div className="h-full flex flex-col items-center justify-center">
        {["UI", "API", "DB"].map((t, k) => (
          <div key={t} className="w-full flex flex-col items-center">
            <div
              className="w-[70%] text-center text-[7px] font-bold rounded-md py-1"
              style={{
                background: k === 0 ? c : "rgba(255,255,255,.12)",
                color: k === 0 ? "#111" : "#fff",
              }}
            >
              {t}
            </div>
            {k < 2 && <div className="w-px h-1.5 bg-white/40" />}
          </div>
        ))}
      </div>
    );

  if (type === "store")
    return (
      <div className="h-full grid grid-cols-2 gap-1.5">
        {[0, 1, 2, 3].map((k) => (
          <div key={k} className="rounded-sm bg-white/10 p-1 flex flex-col">
            <div
              className="flex-1 rounded-sm"
              style={{ background: `linear-gradient(135deg, ${c}66, transparent)` }}
            />
            <div className="mt-0.5 flex items-center justify-between">
              <div className="h-[3px] w-4 rounded bg-white/50" />
              <div className="h-2 w-2 rounded-full" style={{ background: c }} />
            </div>
          </div>
        ))}
      </div>
    );

  // folio
  return (
    <div className="h-full flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 rounded-full" style={{ background: c }} />
        <div className="flex flex-col gap-[3px]">
          <div className="h-[3px] w-10 rounded bg-white/80" />
          <div className="h-[3px] w-7 rounded bg-white/30" />
        </div>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-1">
        {[0, 1, 2, 3, 4, 5].map((k) => (
          <div
            key={k}
            className="rounded-sm"
            style={{ background: k % 2 ? "rgba(255,255,255,.12)" : `${c}66` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- one card ---------- */
function ServiceCard({ s, i, pos, spacing, base, isActive, onSelect }) {
  // d = signed distance from the center (negative = left, positive = right)
  const d = useTransform(pos, (p) => wrap(i - p));
  const x = useTransform(d, (v) => v * spacing);
  const y = useTransform(d, (v) => Math.min(Math.abs(v), 2) * 26);
  const rotate = useTransform(d, (v) => Math.max(-14, Math.min(14, v * 9)));
  const scale = useTransform(d, (v) => base * (1 - Math.min(Math.abs(v), 2) * 0.1));
  const zIndex = useTransform(d, (v) => 20 - Math.round(Math.abs(v) * 4));
  // fades out right before it wraps to the other side, so the jump is invisible
  const opacity = useTransform(d, (v) =>
    Math.max(0, Math.min(1, 1 - (Math.abs(v) - 2) * 2))
  );
  const dim = useTransform(d, (v) => Math.min(Math.abs(v), 1) * 0.4);

  const goContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.div
      style={{ x, y, rotate, scale, zIndex, opacity }}
      // clicking a side card brings it to the center instead of firing its button
      onClickCapture={(e) => {
        if (!isActive) {
          e.stopPropagation();
          e.preventDefault();
          onSelect(i);
        }
      }}
      className={`absolute left-1/2 top-1/2 -ml-[160px] -mt-[230px] w-[320px] h-[460px] ${
        isActive ? "" : "cursor-pointer"
      }`}
    >
      <div
        className={`relative w-full h-full rounded-[30px] ${s.bg} ${s.text} border-[7px] border-white ring-1 ring-black/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-5 flex flex-col overflow-hidden`}
      >
        {/* header: logo + dot grid */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] font-heading font-black tracking-tight">
            <FiCode className={s.hl} />
            <span>
              Sakthimari<span className={s.hl}>.Dev</span>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-[3px] opacity-40">
            {Array.from({ length: 9 }).map((_, k) => (
              <span key={k} className="w-[3px] h-[3px] rounded-full bg-current" />
            ))}
          </div>
        </div>

        {/* title */}
        <h3 className="mt-3 font-heading font-black text-[28px] leading-[1.02] tracking-tight">
          {s.lines.map((l) => (
            <span key={l.t} className={`block ${l.hl ? s.hl : ""}`}>
              {l.t}
            </span>
          ))}
        </h3>

        <p className="mt-2 text-[11px] leading-snug opacity-80 max-w-[220px]">{s.desc}</p>

        <button
          onClick={goContact}
          className={`mt-3 self-start inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[10px] font-nav font-bold tracking-[0.15em] ${s.btn}`}
        >
          GET STARTED <FiArrowRight />
        </button>

        {/* laptop */}
        <div className="mt-3 flex-1 min-h-0 flex flex-col items-center justify-center">
          <div className="w-[200px] h-[104px] rounded-t-lg border-[3px] border-[#1c1c1f] bg-[#0e1117] p-1.5 overflow-hidden">
            <Screen type={s.screen} c={s.c} />
          </div>
          <div className="h-[7px] w-[228px] rounded-b-xl bg-gradient-to-b from-zinc-200 to-zinc-500" />
        </div>

        {/* feature icons */}
        <div className="mt-2 grid grid-cols-4 gap-1 text-center">
          {s.features.map(([Icon, label]) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span
                className={`w-6 h-6 rounded-full border flex items-center justify-center text-[12px] ${s.tone}`}
              >
                <Icon />
              </span>
              <span className="text-[7.5px] leading-tight font-medium opacity-90">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className="mt-2 flex items-center justify-center gap-1 text-[9px] font-medium opacity-90">
          <FaWhatsapp className={s.hl} />
          <span>{s.footer}</span>
        </div>

        {/* dim overlay for non-center cards */}
        <motion.div
          style={{ opacity: dim }}
          className="absolute inset-0 bg-black pointer-events-none"
        />
      </div>
    </motion.div>
  );
}

/* ---------- section ---------- */
const SPEED = 0.28; // cards per second (bigger = faster). 0.28 ≈ one card every 3.5s
const HOVER_SLOW = 0.4; // speed multiplier while the mouse is over the cards

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  const reduce = useReducedMotion();

  const [layout, setLayout] = useState(layoutFor);
  const [active, setActive] = useState(0); // only used for the dots + click handling
  const pos = useMotionValue(0); // continuous position: 0, 0.01, 0.02 ... never stops

  const inViewRef = useRef(false);
  const hoverRef = useRef(false);
  const seekRef = useRef(false);
  const seekCtl = useRef(null);
  const speedRef = useRef(SPEED);

  useEffect(() => {
    inViewRef.current = inView;
  }, [inView]);

  // The engine: every frame, drift a little further. No steps, no waiting.
  useAnimationFrame((_, delta) => {
    if (!inViewRef.current || seekRef.current || reduce) return;
    const dt = Math.min(delta, 50) / 1000; // ignore huge gaps (e.g. tab was hidden)
    const target = hoverRef.current ? SPEED * HOVER_SLOW : SPEED;
    speedRef.current += (target - speedRef.current) * Math.min(1, dt * 6); // ease speed changes
    pos.set(pos.get() + speedRef.current * dt);
  });

  // which card is nearest the center right now
  useMotionValueEvent(pos, "change", (v) =>
    setActive((((Math.round(v) % n) + n) % n))
  );

  useEffect(() => {
    const onResize = () => setLayout(layoutFor());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // dots / clicking a side card: glide there, then keep drifting from that spot
  const goTo = (target) => {
    const a = Math.round(pos.get());
    let diff = (((target - (((a % n) + n) % n)) % n) + n) % n;
    if (diff > n / 2) diff -= n;
    seekCtl.current?.stop();
    seekRef.current = true;
    seekCtl.current = animate(pos, a + diff, {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        seekRef.current = false;
      },
    });
  };

  return (
    <section
      id="service"
      ref={ref}
      className="relative w-full py-20 md:py-24 overflow-hidden bg-[#C2782E]"
    >
      <h2 className="font-heading font-black text-5xl md:text-7xl tracking-tight mb-10 md:mb-12 px-8 md:px-20 text-dark">
        SERVICES
      </h2>

      <div
        className="relative w-full h-[480px] md:h-[560px]"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") hoverRef.current = true;
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") hoverRef.current = false;
        }}
      >
        {services.map((s, i) => (
          <ServiceCard
            key={s.key}
            s={s}
            i={i}
            pos={pos}
            spacing={layout.spacing}
            base={layout.base}
            isActive={i === active}
            onSelect={goTo}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {services.map((s, i) => (
          <button
            key={s.key}
            aria-label={`Show ${s.lines.map((l) => l.t).join(" ")}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full bg-dark transition-all duration-500 ${
              i === active ? "w-7 opacity-100" : "w-2 opacity-30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}