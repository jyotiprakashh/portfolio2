"use client";
import React, { useState } from "react";
import Hello from "../pages/Hello";
import About from "../pages/About";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import { Panda } from "../components/Panda";

interface CardProps {
  personalInfo: any;
  projects: any;
  techStack: any;
  competitiveProfiles: any;
}

const Card = ({
  personalInfo,
  projects,
  techStack,
  competitiveProfiles,
}: CardProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      component: (
        <Hello personalInfo={personalInfo} navigateTo={setCurrentStep} />
      ),
      label: "Hello",
    },
    {
      component: (
        <About personalInfo={personalInfo} navigateTo={setCurrentStep} />
      ),
      label: "About",
    },
    {
      component: (
        <TechStack
          techStack={techStack}
          competitiveProfiles={competitiveProfiles}
          navigateTo={setCurrentStep}
        />
      ),
      label: "Tech Stack",
    },
    {
      component: <Projects projects={projects} navigateTo={setCurrentStep} />,
      label: "Projects",
    },
  ];

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="flex items-center justify-center flex-col -mt-7">
      <div className="relative bg-gradient-to-br from-hGray/10 via-transparent to-transparent backdrop-blur-xl bg-hBlack/30 border border-hGray/20 rounded-xl shadow-lg w-full  max-w-3xl h-[400px] ">
        {steps[currentStep].component}

        <div className="absolute md:-top-44 -top-40 md:right-10 right-7  w-32 h-32 ">
          <Panda />
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        {steps.map((_, index) => (
          <div
            key={index}
            onClick={() => handleStepChange(index)}
            className={`h-1 w-16 md:w-24 cursor-pointer ${
              currentStep === index ? "bg-hGreen" : "bg-hGray/20"
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
