export default function Contact() {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* heading */}
      <h2 className="font-heading font-black text-5xl md:text-8xl text-white tracking-tight mb-12 text-center">
        LET'S TALK
      </h2>

      {/* social icons row */}
      <div className="flex items-center gap-5 md:gap-7 mb-16">
        <a
          href="https://wa.me/919345258241"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
            <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8.2 8.2 0 01-2.4-1.5 9.1 9.1 0 01-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5.2-.3a.5.5 0 000-.5c-.1-.1-.7-1.7-1-2.3s-.5-.5-.7-.5h-.6a1.1 1.1 0 00-.8.4 3.5 3.5 0 00-1 2.5 6 6 0 001.3 3.2 13.7 13.7 0 005.3 4.7c.7.3 1.3.5 1.8.7a4.3 4.3 0 002 .1 3.3 3.3 0 002.1-1.5 2.6 2.6 0 00.2-1.5c-.1-.1-.3-.2-.6-.3z" />
            <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1112 20z" />
          </svg>
        </a>

        <a
        
          href="https://linkedin.com/in/sakthimari07"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.9.2 2.3.4a4 4 0 011.5.9 4 4 0 01.9 1.5c.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.9-.4 2.3a4 4 0 01-.9 1.5 4 4 0 01-1.5.9c-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.9-.2-2.3-.4a4 4 0 01-1.5-.9 4 4 0 01-.9-1.5c-.2-.4-.4-1.1-.4-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c0-1.2.2-1.9.4-2.3a4 4 0 01.9-1.5 4 4 0 011.5-.9c.4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1 0-1.5.2-1.9.3a2.2 2.2 0 00-.8.5 2.2 2.2 0 00-.5.8c-.1.4-.3.9-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c0 1 .2 1.5.3 1.9a2.2 2.2 0 00.5.8 2.2 2.2 0 00.8.5c.4.1.9.3 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1 0 1.5-.2 1.9-.3a2.2 2.2 0 00.8-.5 2.2 2.2 0 00.5-.8c.1-.4.3-.9.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c0-1-.2-1.5-.3-1.9a2.2 2.2 0 00-.5-.8 2.2 2.2 0 00-.8-.5c-.4-.1-.9-.3-1.9-.3-1.3-.1-1.7-.1-4.8-.1z" />
            <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4z" />
            <circle cx="17.4" cy="6.6" r="1.2" />
          </svg>
        </a>

        <a
        href="https://linkedin.com/in/sakthimari07"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
            <path d="M6.9 8.4H3.6V20h3.3V8.4zM5.3 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.4 20h-3.3v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20H9.5V8.4h3.2v1.6h.1a3.5 3.5 0 013.1-1.7c3.3 0 4 2.2 4 5V20z" />
          </svg>
        </a>

        <a
         
          href="https://github.com/sakthimari-dev"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.6 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c1.9-1.3 2.8-1 2.8-1 .6 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0022 12c0-5.5-4.5-10-10-10z"
            />
          </svg>
        </a>
      </div>
{/* contact form */}
      <form className="w-full max-w-md flex flex-col gap-6 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/40 py-3 px-1 focus:outline-none focus:border-white transition-colors"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/40 py-3 px-1 focus:outline-none focus:border-white transition-colors"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/40 py-3 px-1 focus:outline-none focus:border-white transition-colors resize-none"
        />
        <button
          type="submit"
          className="mt-2 self-center px-10 py-3 rounded-full bg-white text-black font-nav tracking-widest text-sm hover:bg-white/80 transition-colors"
        >
          SEND MESSAGE
        </button>
      </form>
          
    </section>
  );
}