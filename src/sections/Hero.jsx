import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative w-full min-h-screen overflow-hidden flex flex-col justify-center
        px-6 md:px-10 lg:px-16 pt-28
        bg-gradient-to-br from-[#DCEAFF] via-[#EEF2FF] to-[#F4E9FF]
        dark:bg-gradient-to-br dark:from-[#0E1628] dark:via-[#1E2335] dark:to-[#2F295A]
        transition-all duration-500
      "
    >
      {/* === Background Glow (Full Screen Soft Art) === */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_15%_30%,rgba(59,130,246,0.28),transparent_45%)]
          dark:bg-[radial-gradient(circle_at_85%_50%,rgba(139,92,246,0.32),transparent_55%)]
          blur-3xl opacity-70
        "
      />

      {/* === Animated Data Visual Elements === */}
      <div className="absolute right-10 bottom-20 hidden md:flex flex-col items-center gap-6 pointer-events-none select-none">
        
        {/* Live Trend Line */}
        <motion.svg width="380" height="170" viewBox="0 0 380 170">
          <motion.path
            d="M10 140 L70 100 L120 120 L190 60 L260 80 L320 40 L370 75"
            stroke="url(#lineGrad)"
            strokeWidth="5"
            fill="transparent"
            animate={{ pathLength: [0, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 15px rgba(139,92,246,0.7))" }}
          />
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Animated Bars */}
        <motion.div className="flex gap-3 h-44 items-end">
          {[60, 95, 130, 85, 120].map((height, i) => (
            <motion.div
              key={i}
              className="
                w-8 rounded-xl
                bg-gradient-to-t from-purple-700 via-indigo-500 to-blue-400
                shadow-[0_0_22px_rgba(139,92,246,0.65)]
              "
              animate={{
                height: [`${height}px`, `${height + 25}px`, `${height - 15}px`, `${height}px`],
              }}
              transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      </div>

      {/* === Content Block === */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl"
      >
        <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-slate-900 dark:text-white">
          <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1 rounded-full 
              bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
              px-7 py-3 text-sm md:text-base font-medium text-white 
              shadow-[0_18px_45px_rgba(59,130,246,0.45)]
              transition-all duration-300 hover:shadow-[0_22px_60px_rgba(59,130,246,0.65)]
              active:scale-[0.97]
            "
          >
            LinkedIn
          </a>

          <a
            href="#projects"
            className="
              inline-flex items-center justify-center rounded-full px-7 py-3
              border border-slate-500/40 dark:border-slate-600/60 
              text-sm md:text-base text-slate-800 dark:text-slate-200
              bg-white/70 dark:bg-slate-800/50 backdrop-blur-xl
              hover:border-blue-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
              transition-all duration-300 active:scale-[0.97]
            "
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
