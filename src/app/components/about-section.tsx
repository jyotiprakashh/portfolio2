import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { urlFor } from "../../sanity/lib/client";
import { MapPin, MoveUpRight, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TechLogoScroll from "./infinite-scroll";
import Projects from "./projects-section";
import AvatarPhoto from "./avatar-comp";

interface personalInfoProps {
  personalInfo: {
    name: string;
    tagline: string;
    about: string;
    profileImage: { asset: { _ref: string } };
    github: string;
    twitter: string;
    linkedin: string;
    resume: string;
  };
  competitiveProfiles: {
    profileUrl: string;
    platform: string;
    profileImage: { asset: { _ref: string } };
  }[];
  projects: {
    name: string;
    description: string;
    projectImage: { asset: { _ref: string } };
    liveLink: string;
    githubLink: string;
    techStack: string[];
  }[];
}

const About = ({
  personalInfo,
  competitiveProfiles,
  projects,
}: personalInfoProps) => {
  return (
    <div className="p-10 mt-28 flex flex-col">
      <div className="flex flex-row justify-between items-start">
        <div>
          <p className="md:text-5xl text-3xl font-bold dark:text-white text-hBlack mb-3">
            {personalInfo.name}
          </p>
          <p className="md:text-xl text-lg font-light dark:text-gray-300 text-hBlack">
            Freelance Developer and Designer
          </p>
          <div className="flex flex-row gap-2 items-center">
            <MapPin className="w-4" />
            <p className="md:text-base text-sm font-light dark:text-gray-300 text-hBlack">
              IN, Bhubaneswar
            </p>
          </div>
        </div>
        <div className="relative group">
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div> */}
          
          <div className="absolute inset-0 bg-[linear-gradient(#ffffff12_1px,transparent_1px),linear-gradient(to_right,#ffffff12_1px,transparent_1px)] bg-[size:4px_4px] rounded-xl opacity-50"></div>
          
          <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-teal-500"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500"></div>
          </div>

          <div className="relative p-1 bg-gray-900 rounded-xl overflow-hidden backdrop-blur-sm">
            <img
              src={urlFor(personalInfo.profileImage).width(200).url()}
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover transform 
                       group-hover:scale-105 transition duration-500
                       filter grayscale group-hover:grayscale-0"
            />
          </div>

        </div>
      </div>
      <p className="text-base font-light dark:text-gray-400 text-hBlack mt-5">
        I am a{" "}
        <span className="font-semibold">
          Full Stack Developer and CS undergrad
        </span>{" "}
        focused on building impactful web apps. Passionate about{" "}
        <span className="font-semibold">Cloud and DevOps </span>, I also compete
        on <span className="font-semibold">Codeforces and LeetCode. </span> With
        over <span className="font-semibold">15+ </span> happy freelance
        clients, I thrive on solving real-world problems. When I am not coding, I
        enjoy designing UI/UX, playing musical instruments and exploring
        podcasts.
      </p>
      <div className=" dark:text-gray-400 text-gray-700 mt-5 flex flex-row">
        <Button
          variant="link"
          className="dark:hover:text-hWhite hover:text-black text-base font-light flex items-center pb-3"
          asChild
        >
          <Link href={personalInfo.resume} target="_blank">
            <p>My Resume</p> <SquareArrowOutUpRight className="w-4" />
          </Link>
        </Button>
      </div>
      <div className="flex gap-4 pt-5">
        <a href={personalInfo.github} target="_blank" className="group">
          <img
            className="w-6 dark:invert opacity-80 dark:opacity-100 transition-transform transform group-hover:scale-110"
            src="/github.png"
            alt="GitHub"
          />
        </a>
        <a href={personalInfo.twitter} target="_blank" className="group">
          <img
            className="w-6 dark:invert opacity-80 dark:opacity-100 transition-transform transform group-hover:scale-110"
            src="/twitter.png"
            alt="Twitter"
          />
        </a>
        <a href={personalInfo.linkedin} target="_blank" className="group">
          <img
            className="w-6 dark:invert opacity-80 dark:opacity-100 transition-transform transform group-hover:scale-110"
            src="/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>
      <div className="dark:text-gray-200 text-gray-600 md:mt-5 mt-8 flex md:flex-row flex-col md:items-center items-start md:gap-2">
        <p className="text-base font-semibold">Coding Profiles : </p>
        <div className="flex gap-4">
          {competitiveProfiles.map((profile, index) => (
            <div className=" dark:text-gray-400 text-hBlack flex flex-row" key={index}>
              <Button
                variant="link"
                className="dark:hover:text-hWhite hover:text-black text-base font-light flex items-center"
                asChild
              >
                <Link href={profile.profileUrl} target="_blank">
                  <p>{profile.platform}</p>{" "}
                  <SquareArrowOutUpRight className="w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-bold dark:text-white text-hBlack mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute w-4 h-4 bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-full -left-[9px] top-0"></div>
            <div className="mb-1">
              <h3 className="text-lg font-semibold dark:text-white text-hBlack">Full Stack Developer</h3>
              <p className="text-blue-500 dark:text-blue-400 font-medium">Factoryspace</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                • Build the product from scratch.<br />
                • Worked on the frontend and backend of the web app.<br />
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Oct 2024 - Present</p>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute w-4 h-4 bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-full -left-[9px] top-0"></div>
            <div className="mb-1">
              <h3 className="text-lg font-semibold dark:text-white text-hBlack">Freelance Developer</h3>
              <p className="text-blue-500 dark:text-blue-400 font-medium"></p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                • Built custom web applications for clients using React, Next.js, Node.js and Golang<br />
                • Implemented responsive designs and modern UI/UX practices
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Jun 2023 - Aug 2024</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-base font-semibold dark:text-gray-200 text-gray-700 mt-5">
          Tech Stacks:
        </p>
        <TechLogoScroll />
      </div>
      <div className="mt-5">
        <p className="text-2xl font-semibold dark:text-gray-200 text-gray-700 mt-5 mb-5 ">
          Projects:
        </p>
        <Projects projects={projects} />
      </div>
    </div>
  );
};

export default About;
