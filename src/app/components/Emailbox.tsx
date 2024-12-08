import React from "react";
import { Mail } from "lucide-react";

interface FooterProps {
  personalInfo: any;
}

const Emailbox = ({ personalInfo }: FooterProps) => {
  return (
    <div className="fixed bottom-8 right-8 z-100">
      <a
        href={`mailto:${personalInfo.email}`}
        className="relative group flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 p-4 rounded-full backdrop-blur-sm border border-gray-200/10 transition-all duration-300 hover:scale-105"
        title="Contact via Email"
      >
        <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></span>
        <Mail className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          Email Me
        </span>
      </a>
    </div>
  );
};

export default Emailbox;
