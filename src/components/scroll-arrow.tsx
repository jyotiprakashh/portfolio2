"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollArrow() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const atBottom = currentScrollY + windowHeight >= documentHeight - 10; // 10px threshold

      setIsAtBottom(atBottom);

      // Hide arrow when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToNextSection = () => {
    const experienceSection = document.getElementById('experiences');
    if (experienceSection) {
      setTimeout(() => {
        experienceSection.scrollIntoView({ behavior: 'smooth' });
      }, 0); // Small delay to ensure the page is fully loaded
    }
  };

  return (
    <button
      onClick={scrollToNextSection}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center 
        bg-accent-foreground backdrop-blur-md border border-border shadow-lg 
        transition-all duration-300 hover:scale-110 active:scale-95
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label={isAtBottom ? "Scroll to top" : "Scroll to next section"}
      title={isAtBottom ? "Scroll to top" : "Scroll to next section"}
    >
      {isAtBottom ? (
        <ChevronUp className="w-6 h-6 text-accent" />
      ) : (
        <ChevronDown className="w-6 h-6 text-accent" />
      )}
    </button>
  );
}
