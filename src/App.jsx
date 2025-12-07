import ScrollProgress from "./components/ScrollProgress";
import MainLayout from "./layouts/MainLayout";
import hero from "./sections/hero";
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
    </>
  );
}
