import { motion } from "framer-motion";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-20 px-6 md:px-10 max-w-5xl mx-auto"
    >
      {/* Ambient Glow Background */}
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-64 w-64 bg-purple-500/15 blur-3xl" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100 mb-10"
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Certifications
        </span>
      </motion.h2>

      {/* Certification Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="
              group relative p-5 rounded-2xl border border-slate-700/60 
              bg-slate-900/60 backdrop-blur-xl cursor-default
              shadow-[0_0_30px_rgba(15,23,42,0.45)]
              hover:border-blue-400/70 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]
              transition-all duration-300
            "
          >
            {/* Hover Glow Overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/15" />

            {/* Certification Text */}
            <p className="relative z-10 text-slate-200 text-[15px] font-medium leading-relaxed">
              {cert}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
