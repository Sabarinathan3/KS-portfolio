import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/60 dark:bg-slate-950/60 border-b border-slate-800/60 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-lg md:text-xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Sabarinathan
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-slate-300 hover:text-white transition-all duration-200 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:via-indigo-500 after:to-purple-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300 hover:text-white text-2xl transition-all focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-6 py-6 space-y-5 border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-xl shadow-lg"
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 text-base hover:text-white transition-all duration-200 hover:pl-1"
              >
                {label}
              </a>
            ))}

            <div className="pt-4">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
