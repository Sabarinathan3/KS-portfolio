import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer
      className="
        mt-24 py-10 
        border-t border-slate-800/70 
        bg-slate-950/60 backdrop-blur-xl
        shadow-[0_-10px_30px_rgba(0,0,0,0.3)]
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center space-y-5"
      >
        {/* Name */}
        <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          {profile.name}
        </h3>

        {/* Links */}
        <div className="flex space-x-6 text-slate-400">
          <a
            href={`mailto:${profile.email}`}
            className="
              transition-all duration-300 hover:text-white 
              hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.9)]
            "
          >
            Email
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all duration-300 hover:text-white 
              hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.9)]
            "
          >
            LinkedIn
          </a>
        </div>

        {/* Divider glow effect */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-80" />

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
