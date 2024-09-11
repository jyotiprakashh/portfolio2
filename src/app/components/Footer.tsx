import React from "react";

interface FooterProps {
  personalInfo: any;
}

const Footer = ({ personalInfo }: FooterProps) => {
  return (
    <div className="flex justify-center md:justify-end items-end p-4">
      <a
        href={`mailto:${personalInfo.email}`}
        className="relative group cursor-pointer"
        title="Contact via Email"
      >
        <img
          className="w-10 md:w-14 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-rotate-6"
          src="/Email.png"
          alt="Email"
        />
      </a>
    </div>
  );
};

export default Footer;
