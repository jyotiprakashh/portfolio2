import React from "react";
import Hero from "./components/Hero";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Panda } from "./components/Panda";
import Footer from "./components/Footer";
import About from "./components/About";

const page = () => {
  return (
    <div className="relative h-full w-full  bg-neutral-50 dark:bg-neutral-950  bg-grid-black/[0.2] dark:bg-grid-white/[0.2] ">
      <div className="absolute inset-0 pointer-events-none">
        <div className=" h-full w-full bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      </div>
      <div>
        <div className="relative z-10">
          <ThemeSwitcher />
          <Hero />
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
