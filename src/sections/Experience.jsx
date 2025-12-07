import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-6 md:px-10 max-w-5xl mx-auto">
      
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-16 top-20 h-64 w-64 bg-blue-500/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-64 w-64 bg-purple-500/15 blur-3xl rounded-full" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100 mb-12"
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-6 top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-60" />

        <div className="space-y-14">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-14 md:pl-20"
            >
              {/* Timeline Dot */}
              <div
                className="
                  absolute left-2 md:left-[18px] top-1 h-5 w-5 rounded-full
                  bg-gradient-to-br from-blue-500 to-purple-500
                  border border-slate-300/40 dark:border-slate-700/80
                  shadow-[0_0_25px_rgba(59,130,246,0.6)]
                "
              />

              {/* Card */}
              <div
                className="
                  relative overflow-hidden rounded-2xl border border-slate-700/60 
                  bg-slate-900/60 backdrop-blur-xl p-6 md:p-7 
                  shadow-[0_0_30px_rgba(15,23,42,0.45)]
                  hover:border-blue-400/70 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]
                  transition-all duration-300
                "
              >
                {/* Glow layer */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/15" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-1">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {exp.role}
                    </span>
                  </h3>

                  {/* Company */}
                  <p className="text-slate-300 font-medium">{exp.company}</p>

                  {/* Location + Period */}
                  <p className="text-slate-400 text-sm mt-1">
                    {exp.location ? `${exp.location} • ` : ""}
                    {exp.period}
                  </p>

                  {/* Bullet Points */}
                  <ul className="list-disc list-inside mt-4 space-y-2 text-slate-300 text-[15px] leading-relaxed">
                    {exp.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
