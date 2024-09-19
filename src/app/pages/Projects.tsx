import React from "react";
import { urlFor } from "../../sanity/lib/client";

interface ProjectsProps {
  projects: {
    name: string;
    liveLink?: string;
    githubLink: string;
    projectImage: { asset: { _ref: string } };
  }[];

  navigateTo: (step: number) => void;
}

const Projects = ({ projects, navigateTo }: ProjectsProps ) => {
  return (
    <div className="p-10">
      <p className="text-2xl font-medium mb-2 text-hGray">Projects</p>
      <div className=" overflow-y-auto h-60 scrollbar-custom" >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-full h-28 bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              style={{
                backgroundImage: `url(${urlFor(project.projectImage).width(300).url()})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-hGray p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <div className="flex space-x-2 mt-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-xs transition-colors"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 px-2 py-1 rounded text-xs transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
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
          .scrollbar-custom::-webkit-scrollbar-track {
            
          }
        `}</style>
      </div>
      <div className="flex gap-6 pt-6 justify-between cursor-pointer">
        <button
          className="flex items-center gap-2 text-hLightBlue hover:text-hBlue transition-colors duration-300 transform hover:scale-105"
          onClick={() => navigateTo(2)}
        >
          <img
            src="/Arrow.png"
            alt="Back"
            className="w-3 rotate-180 transition-transform duration-300"
          />
          <span className="transition-transform duration-300 hover:translate-x-1">Back</span>
        </button>
        <button
          className="flex items-center gap-2 text-hLightBlue hover:text-hBlue transition-colors duration-300 transform hover:scale-105"
          onClick={() => navigateTo(0)}
        >
          <span className="transition-transform duration-300 hover:translate-x-1">Hello</span>
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

export default Projects;
