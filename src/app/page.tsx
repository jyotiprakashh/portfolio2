import React from "react";
import About from "../components/about";
import Projects from "../components/projects";
import Experiences from "@/components/experiences";
import ScrollArrow from "@/components/scroll-arrow";
import Footer from "@/components/footer";

const Page = async () => {
  return (
    <div className="md:w-3/4 md:max-w-3xl w-full px-4 sm:px-6 lg:px-8 mt-28">
      <About />
      {/* <CPProfiles /> */}
      <Experiences />
      <Projects />
      <ScrollArrow />
      <Footer />
    </div>
  );
};

export default Page;
