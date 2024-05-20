"use client";
import React from "react";
import { useTheme } from "next-themes";


const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  console.log(theme);

  return (
    <div className="flex items-center justify-end p-6 ">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="sm:w-20 w-10"
      >
        {theme === "light" ? (
          <div>
            <img src="light.png" alt="invert" className="" />
          </div>
        ) : (
          <div>
            <img src="dark.png" alt="" className="invert" />
          </div>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
