import React from "react";
import { ThemeProvider } from "next-themes";
import { Panda } from "./Panda";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Hero = () => {
  return (
    <div className="flex items-center relative justify-center h-screen flex-col text-center">
      <Panda />
      <div
        className="flex items-center justify-center h-screen flex-col text-center"
        style={{ marginTop: "" }}
      >

        <div className="flex items-center justify-center py-5 mt-10">
          <p className="text-4xl sm:text-7xl  font-medium relative z-20  dark:text-white text-black">

            hi! I am
            <span className="text-4xl sm:text-7xl font-bold relative z-20 ml-4 bg-clip-text text-transparent bg-gradient-to-b from-yellow to-orange  ">Jyoti Prakash
            </span>
            

          </p>
        </div>
        <div>
          <p className="text-lg sm:text-4xl font-medium relative dark:text-white text-black ml-12 mr-12 ">
            a <span className="text-medBlue">web developer</span>,{" "}
            <span className=" text-medBlue">competitive programmer</span> &{" "}
            <span className="text-medBlue">UI UX designer</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row py-10  md:py-10 space-x-0 md:space-x-4">
          <form
            target="_blank"
            action="https://drive.google.com/file/d/1dqc4ldnH40T3iDBOIuFXbjcN-mtFGotq/view?usp=sharing"
          >
            <button className="w-40 h-12 rounded-xl mb-10  text-white  bg-gradient-to-b from-yellow to-orange  text-lg font-medium hover:bg-gradient-to-b hover:from-yellow hover:to-orange hover:-translate-y-1 ">
              get my cv
            </button>
          </form>
          <div className="flex space-x-4 mb-10 " style={{ width: "130px" }}>
            <a
              href="https://www.linkedin.com/in/jyotiprakshh/"
              className="block"
              target="_blank"
            >
              <img
                src="./linkedin.png"
                alt="LinkedIn"
                className="dark:invert"
              />
            </a>
            <a
              href="https://x.com/jyotiprakshh"
              className="block"
              target="_blank"
            >
              <img src="./twitter.png" alt="" className="dark:invert" />
            </a>
            <a
              href="https://www.linkedin.com/in/jyoti-prakash"
              className="block"
              target="_blank"
            >
              <img src="./github.png" alt="" className="dark:invert" />
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
