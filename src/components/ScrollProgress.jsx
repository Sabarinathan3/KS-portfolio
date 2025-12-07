import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed top-0 left-0 right-0 h-1.5 origin-left z-[9999] 
        bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
        shadow-[0_0_20px_rgba(59,130,246,0.6)]
      "
    />
  );
}
