
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
    <div className="flex justify-center dark:bg-hBlack bg-hWhite ">
      <div className="flex flex-col items-center">

      <About personalInfo={personalInfo} competitiveProfiles={competitiveProfiles} projects={projects} />

      <Footer />
      </div>

      <div className="fixed bottom-5 right-5">
        <Emailbox personalInfo={personalInfo} />
      </div>
    </div>
  );
};

export default Home;
