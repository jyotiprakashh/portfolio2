
import React from 'react';
import Emailbox from '../components/Emailbox';
import Footer from '../components/Footer';

interface HomeProps {
  personalInfo: any;
  projects: any;
  techStack: any;
  competitiveProfiles: any;
}

const Home = ({ personalInfo }: HomeProps) => {
  return (
    <div className="flex justify-center dark:bg-hBlack bg-hWhite ">
      <div className="flex flex-col items-center">

      <Footer />
      </div>

      <div className="fixed bottom-5 right-5">
        <Emailbox />
      </div>
    </div>
  );
};

export default Home;
