import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 md:px-10 max-w-6xl mx-auto">
      
      {/* Ambient Glow Background */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100 mb-12"
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="
              group relative rounded-2xl border border-slate-700/60
              bg-slate-900/60 backdrop-blur-xl p-6 
              shadow-[0_0_30px_rgba(15,23,42,0.45)]
              hover:border-blue-400/70 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]
              transition-all duration-300
            "
          >
            {/* Glow Accent Overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/15" />

            {/* Content */}
            <div className="relative z-10">
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h3>

              {/* Bullet Points */}
              <ul className="list-disc list-inside space-y-2 text-slate-300 text-[15px] leading-relaxed">
                {project.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1 rounded-full
                    bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                    px-5 py-2 text-sm font-medium text-white
                    shadow-[0_15px_35px_rgba(37,99,235,0.45)]
                    transition-all duration-300 hover:shadow-[0_20px_50px_rgba(37,99,235,0.65)]
                    active:scale-[0.97]
                  "
                >
                  View Case Study →
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
