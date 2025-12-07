import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-10 max-w-5xl mx-auto"
    >
      {/* Glow Background Accents */}
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100 mb-6"
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </span>
      </motion.h2>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-xl p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
      >
        <div className="space-y-5 text-[15px] md:text-[16px] leading-relaxed text-slate-300">
          <p>{profile.summary}</p>

          <p>
            I am currently pursuing a Bachelor of Engineering in Computer Science
            at{" "}
            <span className="font-semibold text-slate-100">
              Chennai Institute of Technology
            </span>{" "}
            (2024–2028). I have a growing interest in{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Data Analytics, Business Intelligence, and Data Engineering
            </span>{" "}
            and enjoy transforming raw information into meaningful insight.
          </p>

          <p>
            I have hands-on experience working with tools such as{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SQL, Python, Power BI, Tableau, Excel, and MySQL
            </span>
            . My strengths include EDA, KPI dashboards, statistical insights,
            automation, and optimizing reporting workflows.
          </p>

          <p>
            I am actively seeking opportunities for{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Data Analyst internships, freelance projects,
            </span>{" "}
            and real-world collaboration where I can apply analytical thinking,
            enhance business systems, and contribute to large-scale
            data-driven decisions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
