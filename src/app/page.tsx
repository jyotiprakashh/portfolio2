import React from "react";
import About from "../components/about";
import Projects from "../components/projects";
import Experiences from "@/components/experiences";
import Emailbox from "@/components/email";
import Footer from "@/components/footer";

const Page = async () => {
  return (
    <div className="md:w-3/4 md:max-w-3xl w-full px-4 sm:px-6 lg:px-8 mt-28">
      <About />
      {/* <CPProfiles /> */}
      <Experiences />
      <Projects />
      <div className="fixed bottom-5 right-5">
        <Emailbox />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
