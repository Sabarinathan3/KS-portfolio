import { motion } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";
import GlowCursor from "./components/GlowCursor";
import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import emailjs from "emailjs-com";

emailjs.init("wuQCpVFgD21mo6nPF");

export default function App() {
  return (
    <>
      <ScrollProgress />
      <GlowCursor />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <MainLayout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
        </MainLayout>
      </motion.div>
    </>
  );
}
