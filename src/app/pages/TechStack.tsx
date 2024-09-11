import React from 'react';
import { urlFor } from '../../sanity/lib/client';

interface TechStackProps {
  techStack: { name: string; techlogo: { asset: { _ref: string } } }[];
  competitiveProfiles: { profileUrl: string; platform: string; profileImage: { asset: { _ref: string } } }[];
  navigateTo: (step: number) => void;
}

const TechStack = ({ techStack, competitiveProfiles, navigateTo }: TechStackProps) => {
  return (
    <div className="p-10 space-y-8">
      <section>
        <p className="text-2xl font-medium text-hBlue">My Tech Stacks</p>
        <div className="overflow-hidden relative pt-5">
          <div className="flex animate-marquee space-x-8 whitespace-nowrap">
            {techStack.map((tech, index) => (
              <img
                key={index}
                src={urlFor(tech.techlogo).width(200).url()}
                alt={`${tech.name} logo`}
                className="h-16 w-16 object-contain transition-transform duration-300 transform hover:scale-110"
              />
            ))}
            {techStack.map((tech, index) => (
              <img
                key={`${index}-duplicate`}
                src={urlFor(tech.techlogo).width(200).url()}
                alt={`${tech.name} logo`}
                className="h-16 w-16 object-contain transition-transform duration-300 transform hover:scale-110"
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <p className="text-xl font-medium sm:text-2xl text-hBlue">Competitive Coding Profiles</p>
        <div className="grid grid-cols-3 gap-4 pt-5">
          {competitiveProfiles.map((profile, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => window.open(profile.profileUrl)}
            >
              <img
                src={urlFor(profile.profileImage).width(200).url()}
                alt={`${profile.platform} profile`}
                className="h-16 w-16 object-contain rounded-full transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center h-16 w-16 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full">
                <p className="text-white text-sm font-medium text-center">Visit Profile</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-between gap-6 pt-2">
        <button
          className="flex items-center gap-2 text-hLightBlue hover:text-hBlue transition-transform duration-300 transform hover:scale-105"
          onClick={() => navigateTo(1)}
        >
          <img
            src="/Arrow.png"
            alt="Back"
            className="w-3 rotate-180 transition-transform duration-300"
          />
          <span className="transition-transform duration-300 hover:translate-x-1">Back</span>
        </button>

        <button
          className="flex items-center gap-2 text-hLightBlue hover:text-hBlue transition-transform duration-300 transform hover:scale-105"
          onClick={() => navigateTo(3)}
        >
          <span className="transition-transform duration-300 hover:translate-x-1">Projects</span>
          <img
            src="/Arrow.png"
            alt="Next"
            className="w-3 transition-transform duration-300"
          />
        </button>
      </section>
    </div>
  );
}

export default TechStack;
