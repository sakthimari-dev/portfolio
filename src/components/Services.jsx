import { useState, useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "BUSINESS WEBSITE\nDEVELOPMENT",
    desc: "Modern, fast websites built to grow your business online.",
    card: "bg-[#0F1F14]",
    accent: "text-green-400",
    glow: "shadow-[0_0_40px_-10px_rgba(74,222,128,0.4)]",
    num: "01",
  },
  {
    title: "ADMIN DASHBOARD\nDEVELOPMENT",
    desc: "Powerful dashboards to manage data, users, and analytics.",
    card: "bg-gradient-to-br from-orange-600 to-orange-700",
    accent: "text-white",
    glow: "shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)]",
    num: "02",
  },
  {
    title: "FULL STACK WEB\nDEVELOPMENT",
    desc: "End-to-end web apps — frontend, backend, and database.",
    card: "bg-[#0A0A0A]",
    accent: "text-white",
    glow: "shadow-[0_0_40px_-10px_rgba(255,255,255,0.25)]",
    num: "03",
  },
  {
    title: "E-COMMERCE\nSTORE SETUP",
    desc: "Complete online stores with payments and product management.",
    card: "bg-gradient-to-br from-purple-700 to-purple-900",
    accent: "text-purple-200",
    glow: "shadow-[0_0_40px_-10px_rgba(147,51,234,0.5)]",
    num: "04",
  },
  {
    title: "PORTFOLIO WEBSITE\nDESIGN",
    desc: "Sleek personal portfolios that showcase your work beautifully.",
    card: "bg-white",
    accent: "text-gray-800",
    glow: "shadow-[0_0_40px_-10px_rgba(0,0,0,0.25)]",
    num: "05",
  },
];

const loopServices = [...services, ...services];

export default function Services() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#C2782E]">
      <h2 className="font-heading font-black text-5xl md:text-7xl tracking-tight mb-16 px-8 md:px-20 text-dark">
        SERVICES
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {loopServices.map((s, i) => (
            <div
              key={i}
              className={`group relative flex-shrink-0 w-64 md:w-72 h-96 rounded-3xl ${s.card} ${s.glow} p-6 flex flex-col justify-between border border-white/10 transition-transform duration-300 hover:-translate-y-2`}
            >
              {/* top row: dots + number */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-current opacity-20" />
                  <span className="w-2 h-2 rounded-full bg-current opacity-20" />
                </div>
                <span className={`font-heading text-sm tracking-widest opacity-30 ${s.accent}`}>
                  {s.num}
                </span>
              </div>

              {/* title */}
              <div className="mt-2">
                <h3
                  className={`font-heading font-bold text-2xl leading-[1.15] whitespace-pre-line tracking-tight ${s.accent}`}
                >
                  {s.title}
                </h3>
              </div>

              {/* spacer */}
              <div className="flex-1" />

              {/* description + button */}
              <div className="flex flex-col gap-4">
                <div className="w-full rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/25 p-4 flex items-start gap-2 shadow-inner backdrop-blur-sm">
                  <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${s.accent} bg-current opacity-70`} />
                  <p className={`text-[13px] leading-relaxed font-medium tracking-wide ${s.accent} opacity-90`}>
                    {s.desc}
                  </p>
                </div>

                <button
                  className={`self-start text-[11px] font-nav tracking-[0.15em] rounded-full px-5 py-2.5 border transition-colors duration-300 ${
                    s.accent === "text-gray-800"
                      ? "bg-gray-800 text-white border-gray-800 hover:bg-black"
                      : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-black"
                  }`}
                >
                  GET STARTED →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}