import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6 md:px-10 max-w-5xl mx-auto">
      {/* Background Accents */}
      <div className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100 mb-10"
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>

      {/* SECTION BLOCK COMPONENT */}
      {[
        { title: "Technical Skills", data: skills.technical },
        { title: "Core Competencies", data: skills.competencies },
        { title: "Languages", data: skills.languages },
      ].map((group, groupIndex) => (
        <motion.div
          key={groupIndex}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-medium text-slate-200 mb-5">
            {group.title}
          </h3>

          {/* Skill Grid / Layout */}
          <div
            className={`${
              group.title === "Languages"
                ? "flex flex-wrap gap-4"
                : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            }`}
          >
            {group.data.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 180, damping: 12 }}
                className="
                  group relative cursor-default rounded-xl border border-slate-700/60 
                  bg-slate-900/60 px-4 py-3 backdrop-blur-xl text-center text-slate-200 
                  shadow-[0_0_20px_rgba(59,130,246,0.05)] 
                  hover:border-blue-400/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] 
                  transition-all duration-300
                "
              >
                {/* Gradient overlay hover effect */}
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/15" />

                <span className="relative z-10 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
