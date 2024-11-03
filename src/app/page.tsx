import React from "react";
import Home from "./components/home-component";
import { client } from "../sanity/lib/client";
import Navbar from "./components/floating-navbar";

const personalInfoQuery = "*[_type == 'personalInfo'][0]";
const projectsQuery = "*[_type == 'projects'] | order(_updatedAt desc)";
const techStackQuery = "*[_type == 'techStack'] | order(_updatedAt asc)";
const competitiveProfilesQuery = "*[_type == 'competitiveProfiles'] | order(_updatedAt desc)";

export const revalidate = 0;

const Page = async () => {
  const personalInfo = await client.fetch(personalInfoQuery, { });
  const projects = await client.fetch(projectsQuery, {  });
  const techStack = await client.fetch(techStackQuery, {  });
  const competitiveProfiles = await client.fetch(competitiveProfilesQuery, { });
  return (
    <div className="min-h-screen">
      <div className= "flex justify-center">
      {/* <Navbar/> */}
        {/* <ThemeSwitcher /> */}
        <Home
          personalInfo={personalInfo}
          projects={projects}
          techStack={techStack}
          competitiveProfiles={competitiveProfiles}
        />
      </div>
    </div>
  );
};

export default Page;
