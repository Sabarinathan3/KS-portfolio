import { motion } from "framer-motion";

export default function MotionFade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.85, 0.25, 1], // smooth spring-like easing
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
