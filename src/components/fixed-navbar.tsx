"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Caveat } from "next/font/google";
import { Moon, Sun } from "@phosphor-icons/react";

const caveat = Caveat({ subsets: ["latin"] });

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-0 z-50 md:w-3/4 md:max-w-3xl w-full">
      <motion.nav 
        className="flex items-center justify-between bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 relative"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 100,
          damping: 20,
          delay: 0.5 // Slight delay to ensure the page has started loading
        }}
      >
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <p
            className={`${caveat.className}  text-2xl font-thin text-accent-foreground`}
          >
            {" "}
            Jp
          </p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.button
            key={theme}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full text-accent-foreground hover:text-gray-800 dark:text-gray-400 dark:hover:text-accent-foreground"
            initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 360, scale: 1, opacity: 1 }}
            exit={{ rotate: -360, scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </motion.button>
        </AnimatePresence>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 opacity-30 w-full bg-accent-foreground rounded-full"></div>
      </motion.nav>
    </div>
  );
}
