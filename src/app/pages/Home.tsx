
import React from 'react';
import Card from '../components/Card';
import Emailbox from '../components/Emailbox';
import { Panda } from '../components/Panda';
import { Caveat } from 'next/font/google';
import About from '../components/about-section';
import Navbar from '../components/floating-navbar';
import Footer from '../components/Footer';

const caveat = Caveat({ subsets: ['latin'] });

interface HomeProps {
  personalInfo: any;
  projects: any;
  techStack: any;
  competitiveProfiles: any;
}

const Home = ({ personalInfo, projects, techStack, competitiveProfiles }: HomeProps) => {
  return (
    <div className="flex justify-center dark:bg-hBlack bg-hWhite">
      <div className="flex flex-col items-center">

      <About personalInfo={personalInfo} competitiveProfiles={competitiveProfiles} projects={projects} />

      <Footer />
      </div>
      
      {/* <div className="absolute inset-0 p-7">
        <p className={`${caveat.className} text-2xl md:text-4xl font-thin`}> Jp</p>
      </div> */}

      {/* <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] md:left-[25%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-hGray/40 rounded-full blur-3xl opacity-60 animate-move-slow"></div>
        <div className="absolute bottom-[35%] right-[10%] md:right-[25%] w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-hGreen/40 rounded-full blur-3xl opacity-70 animate-move-medium"></div>    
        <div className="absolute top-[50%] right-[15%] md:right-[35%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-hBlue/15 rounded-full blur-2xl opacity-20 animate-move-fast"></div>
      </div>

      <div className="relative z-10 flex justify-center items-center p-4">
        <div className="w-full max-w-[650px] "> 
          <Card
            personalInfo={personalInfo}
            projects={projects}
            techStack={techStack}
            competitiveProfiles={competitiveProfiles}
          />
        </div>
      </div> */}

      <div className="fixed bottom-5 right-5">
        <Emailbox personalInfo={personalInfo} />
      </div>
    </div>
  );
};

export default Home;
