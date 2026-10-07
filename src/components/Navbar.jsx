import { useState } from "react";

const links = ["About", "Skills", "Work", "Service", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // close mobile menu after clicking
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex flex-col px-5 sm:px-8 md:px-16 py-5 md:py-6 z-20">
      <div className="flex items-center justify-between w-full gap-4">
        {/* logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="font-nav text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight
                     whitespace-nowrap cursor-pointer text-white
                     drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                     transition-transform duration-300 md:hover:scale-105"
        >
          Sakthimari
          <span className="text-yellow-400 md:drop-shadow-[0_0_14px_rgba(250,204,21,0.6)]">
            .Dev
          </span>
        </h1>

        {/* desktop links */}
        <ul className="hidden md:flex gap-8 font-nav text-lg font-bold tracking-[0.15em]">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="cursor-pointer hover:text-accent transition-colors"
            >
              {link.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* hamburger button — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden shrink-0 flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* mobile dropdown menu */}
      <ul
        className={`md:hidden overflow-hidden transition-all duration-300 flex flex-col gap-5 font-nav text-lg font-bold tracking-[0.15em] bg-black/60 backdrop-blur-xl rounded-2xl border border-white/15 ${
          open ? "max-h-96 mt-6 opacity-100 p-6" : "max-h-0 opacity-0 p-0"
        }`}
      >
        {links.map((link) => (
          <li
            key={link}
            onClick={() => scrollToSection(link.toLowerCase())}
            className="cursor-pointer hover:text-accent transition-colors"
          >
            {link.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
}