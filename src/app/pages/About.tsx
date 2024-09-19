import React from "react";

interface AboutProps {
  personalInfo: any;
  navigateTo: (step: number) => void;
}

const About = ({ personalInfo, navigateTo }: AboutProps) => {
  return (
    <div className="p-10 ">
      <div></div>
      <p className="text-2xl font-semibold text-hGray">About Me</p>
      <div className="text-base font-light text-hBlue pt-5 overflow-scroll max-h-64 scrollbar-custom">
        {/* {personalInfo.about
          .split("\n")
          .map((paragraph: string, index: number) => (
            <p key={index} className="">
              {paragraph}
            </p>
          ))} */}
        <p className="sm:mb-8">
         <ul className="list">
         <li> 🚀 Full Stack Developer from Bhubaneswar, India</li>
         <li>I build web apps that solve real problems. Love working with Cloud and DevOps ☁️. Competitive coder on Codeforces and LeetCode 💻. Freelancer with 15+ happy clients.</li>
         <li className="mt-5">When not coding, I enjoy: Designing UI/UX, Playing music, Watching sci-fi movies, Playing sports, Listening Podcasts.</li>
         <li className="mt-5">But let&apos;s be real... 😴 Sleep is my superpower!</li>
         </ul>
        </p>
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
      <div className="flex gap-6 sm:pt-6 pt-6 justify-between">
        <button
          className="flex items-center gap-2 text-hLightBlue hover:text-hBlue transition-all duration-300 transform hover:scale-105"
          onClick={() => navigateTo(0)}
        >
          <img
            src="/Arrow.png"
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
            src="/Arrow.png"
            alt="Next"
            className="w-3 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
};

export default About;
