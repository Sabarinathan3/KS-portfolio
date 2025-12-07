import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-6 md:px-10 max-w-5xl mx-auto">
      
      {/* Soft Accent Background Blobs */}
      <div className="pointer-events-none absolute -left-16 top-20 h-60 w-60 bg-blue-500/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-60 w-60 bg-purple-500/15 blur-3xl rounded-full" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100 mb-10"
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Education
        </span>
      </motion.h2>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02, y: -4 }}
        className="
          relative rounded-2xl border border-slate-700/60 bg-slate-900/60 
          backdrop-blur-xl p-6 md:p-8 
          shadow-[0_0_30px_rgba(15,23,42,0.45)]
          hover:border-blue-400/70 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]
          transition-all duration-300
        "
      >
        {/* Glow Layer */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/15" />

        {/* Text Content */}
        <div className="relative z-10">
          
          {/* Degree */}
          <h3 className="text-xl md:text-2xl font-semibold text-slate-100">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bachelor of Engineering – Computer Science Engineering
            </span>
          </h3>

          {/* College Name */}
          <p className="mt-2 text-slate-300 font-medium">
            Chennai Institute of Technology
          </p>

          {/* Duration */}
          <p className="text-slate-400 text-sm mt-1">2024 – 2028</p>

          {/* Summary */}
          <p className="mt-4 text-slate-300 leading-relaxed text-sm md:text-[15px]">
            Pursuing a strong academic foundation in computer science with a growing
            interest in Data Analytics, Business Intelligence, and Data Engineering.
            Actively building skills in SQL, Python, Machine Learning basics, and
            analytical tools through projects, internships, and self-learning.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
