"use client";

import { EnvelopeSimple, PaperPlaneTilt } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";

export default function Emailbox() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsClicked(true);
    window.location.href = 'mailto:jppanda12345@gmail.com';
    
    // Reset after 2 seconds
    const timer = setTimeout(() => {
      setIsClicked(false);
    }, 2000);

    return () => clearTimeout(timer);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="mailto:jppanda12345@gmail.com"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group flex items-center gap-3 ${
          isHovered ? 'pr-5' : 'pr-4'
        } pl-4 py-3 rounded-full bg-secondary backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95`}
        aria-label="Send me an email"
        title="Send me an email"
      >
        {isClicked ? (
          <span className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-2 animate-fade-in">
            <PaperPlaneTilt weight="fill" className="w-5 h-5" />
            Sent!
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <EnvelopeSimple 
              className={`w-5 h-5 transition-colors duration-300 ${
                isHovered 
                  ? 'text-secondary-foreground' 
                  : 'text-secondary-foreground'
              }`} 
              weight={isHovered ? 'fill' : 'regular'}
            />
            <span 
              className={`text-sm font-medium text-secondary-foreground whitespace-nowrap transition-all duration-300 ${
                isHovered 
                  ? 'opacity-100 translate-x-0 inline-block' 
                  : 'opacity-0 -translate-x-2 hidden'
              }`}
            >
              jppanda12345@gmail.com
            </span>
          </span>
        )}
        
        {/* Pulsing dot */}
        {!isClicked && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
        )}
      </a>
    </div>
  );
}