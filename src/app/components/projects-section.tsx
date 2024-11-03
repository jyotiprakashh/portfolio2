import React from "react";
import Link from "next/link";
import GlowCard from "./project-card";


interface ProjectsProps {
    projects: {
        name: string;
        description: string;
        projectImage: { asset: { _ref: string } };
        liveLink: string;
        githubLink: string;
        techStack: string[];
    }[];
  
}
  
export default function Projects( {projects}: ProjectsProps ) {
    // console.log(projects)
  return (
      <div className="flex flex-col justify-center items-center max-w-2xl mb-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index}>
              <GlowCard
                title={project.name}
                description={project.description}
                imageSrc={project.projectImage}
                techStack={project.techStack}
                livelink={project.liveLink}
                githublink={project.githubLink}
              />
            </div>
          ))}
        </div>

      </div>
  );
}