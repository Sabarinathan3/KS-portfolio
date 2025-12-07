import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
      className="mb-14 text-center md:text-left"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-200 dark:text-slate-100">
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {/* Accent underline */}
      <div className="mx-auto md:mx-0 mt-2 h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_18px_rgba(59,130,246,0.6)]" />

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 max-w-xl text-sm md:text-base text-slate-400 dark:text-slate-400 leading-relaxed mx-auto md:mx-0">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
