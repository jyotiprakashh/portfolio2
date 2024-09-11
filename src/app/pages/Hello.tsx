import React from "react";

interface HelloProps {
  personalInfo: any;
  navigateTo: (step: number) => void;
}

const Hello = ({ personalInfo, navigateTo }: HelloProps) => {
  return (
    <div className="p-10 mt-6">
      <p className="text-2xl font-light text-white">
        Hello, I am <span className="font-semibold">{personalInfo.name}</span>
      </p>
      <p className="text-xl font-light pt-5 text-gray-300">{personalInfo.tagline}</p>

      <div className="flex gap-6 pt-6">
        <a href={personalInfo.github} target="_blank" className="group">
          <img className="w-7 invert transition-transform transform group-hover:scale-110" src="/github.png" alt="GitHub" />
        </a>
        <a href={personalInfo.twitter} target="_blank" className="group">
          <img className="w-7 invert transition-transform transform group-hover:scale-110" src="/twitter.png" alt="Twitter" />
        </a>
        <a href={personalInfo.linkedin} target="_blank" className="group">
          <img className="w-7 invert transition-transform transform group-hover:scale-110" src="/linkedin.png" alt="LinkedIn" />
        </a>
      </div>

      <div className="sm:mt-20 mt-14 flex justify-between items-center">
        <button
          className="rounded-md bg-hBlue text-hBlack font-semibold px-6 py-3 transition-transform transform hover:scale-105 hover:bg-hLightBlue"
          onClick={() => window.open(personalInfo.resume)}
        >
          View Resume
        </button>

        <button
    className="flex items-center gap-2 text-hLightBlue hover:text-hBlue transition-all duration-300 transform hover:scale-105"
    onClick={() => navigateTo(1)}
  >
    <span className="transition-transform duration-300 hover:translate-x-1">About</span>
    <img
      src="/arrow.png"
      alt="Next"
      className="w-3 transition-transform duration-300"
    />
  </button>
      </div>
    </div>
  );
};

export default Hello;
