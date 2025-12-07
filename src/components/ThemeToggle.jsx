import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.button
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        w-10 h-10 flex items-center justify-center rounded-full
        border border-gray-300 dark:border-slate-600
        bg-gray-100 dark:bg-slate-800
        text-yellow-500 dark:text-blue-400
        shadow-sm dark:shadow-none
        transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]
      "
    >
      <motion.div
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.4 }}
        className="text-xl"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </motion.div>
    </motion.button>
  );
}
