import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  full = false,
  className = "",
  ...props
}) {
  const widthClass = full ? "w-full" : "";

  // Shared base (radius, typography, transitions)
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide rounded-full px-6 py-2.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97]";

  // Variant styles matching the theme
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-[0_8px_30px_rgba(59,130,246,0.45)] hover:shadow-[0_10px_45px_rgba(59,130,246,0.65)] hover:brightness-105 focus-visible:ring-blue-500/60 focus-visible:ring-offset-slate-950 dark:focus-visible:ring-offset-slate-900",

    secondary:
      "border border-slate-700 bg-slate-900/50 text-slate-200 backdrop-blur-xl hover:border-slate-500 hover:bg-slate-900/80 shadow-[0_0_25px_rgba(139,92,246,0.15)] hover:shadow-[0_0_35px_rgba(139,92,246,0.28)] focus-visible:ring-slate-400/60 focus-visible:ring-offset-slate-950 dark:focus-visible:ring-offset-slate-900",

    dark:
      "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700",

    light:
      "bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300",
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={combinedClass}
      {...props}
    >
      {children}
    </motion.button>
  );
}
