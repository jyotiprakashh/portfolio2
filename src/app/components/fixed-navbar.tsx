"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Caveat } from "next/font/google";

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
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 md:w-3/4 md:max-w-3xl w-full">
      <nav className="flex items-center justify-between bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 relative">
        <div className="flex items-center space-x-2">
          <p
            className={`${caveat.className}  text-2xl font-thin text-gray-800 dark:text-gray-100`}
          >
            {" "}
            Jp
          </p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.button
            key={theme}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
            initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 360, scale: 1, opacity: 1 }}
            exit={{ rotate: -360, scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </motion.button>
        </AnimatePresence>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 opacity-30 w-full bg-gray-500 rounded-full"></div>
      </nav>
    </div>
  );
}
