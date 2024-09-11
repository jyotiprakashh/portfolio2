import React from "react";

interface AboutProps {
  personalInfo: any;
  navigateTo: (step: number) => void;
}

const About = ({ personalInfo, navigateTo }: AboutProps) => {
  return (
    <div className="p-10 ">
      <div></div>
      <p className="text-2xl font-semibold text-hBlue">About Me</p>
      <div className="text-base font-light pt-5 overflow-scroll max-h-64 scrollbar-custom">
        {personalInfo.about
          .split("\n")
          .map((paragraph: string, index: number) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
      </div>
      <style jsx>{`
          .scrollbar-custom::-webkit-scrollbar {
            height: 8px;
            width: 8px;
          }
          .scrollbar-custom::-webkit-scrollbar-thumb {
            background-color: #333;
            border-radius: 2px;
          }
        `}</style>
      <div className="flex gap-6 sm:pt-6 pt-5 justify-between">
        <button
          className="flex items-center gap-2 text-hLightBlue hover:text-hBlue transition-all duration-300 transform hover:scale-105"
          onClick={() => navigateTo(0)}
        >
          <img
            src="/arrow.png"
            alt="Back"
            className="w-3 rotate-180 transition-transform duration-300"
          />
          <span className="transition-transform duration-300 hover:translate-x-1">
            Back
          </span>
        </button>

        <button
          className="flex items-center gap-2 text-hLightBlue hover:text-hBlue transition-all duration-300 transform hover:scale-105"
          onClick={() => navigateTo(2)}
        >
          <span className="transition-transform duration-300 hover:translate-x-1">
            Tech Stacks
          </span>
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

export default About;
