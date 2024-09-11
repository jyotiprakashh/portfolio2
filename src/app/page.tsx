import React from "react";
import Home from "./pages/Home";
import { client } from "../sanity/lib/client";

// Define the queries
const personalInfoQuery = "*[_type == 'personalInfo'][0]";
const projectsQuery = "*[_type == 'projects']";
const techStackQuery = "*[_type == 'techStack']";
const competitiveProfilesQuery = "*[_type == 'competitiveProfiles']";

export const revalidate = 0;

const Page = async () => {
  // Fetch data inside the component asynchronously
  const personalInfo = await client.fetch(personalInfoQuery, { });
  const projects = await client.fetch(projectsQuery, {  });
  const techStack = await client.fetch(techStackQuery, {  });
  const competitiveProfiles = await client.fetch(competitiveProfilesQuery, { });
  // console.log(techStack, competitiveProfiles, projects);
  return (
    <div>
      <div className="relative z-10 ">
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
