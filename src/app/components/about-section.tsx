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
      <div className="flex flex-row">
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
              {" "}
              IN, Bhubaneswar
            </p>
          </div>
        </div>
        <div className="ml-auto">
        {/* <AvatarPhoto imageLink={urlFor(personalInfo.profileImage).url()} /> */}
         
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
          className="dark:hover:text-hBlue hover:text-black text-base font-light flex items-center pb-3"
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
                className="text-hLightBlue dark:hover:text-hWhite hover:text-black text-base font-light flex items-center"
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
