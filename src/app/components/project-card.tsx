"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { urlFor } from "../../sanity/lib/client";


interface GlowCardProps {
  title: string;
  description: string;
  imageSrc:  { asset: { _ref: string } };
  techStack?: string[];
  livelink?: string;
  githublink?: string;
}

export default function GlowCard({
  title,
  description,
  imageSrc,
  techStack,
  livelink,
  githublink,
}: GlowCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    if (isHovered) {
      window.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-lg shadow-sm transition-all duration-300 ease-in-out dark:bg-hBlack bg-hWhite border  dark:border-cyan-900 w-80 h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(44, 181, 245, 1) 0%, transparent 40%)`,
          filter: "blur(60px)",
        }}
      />

      {/* <Image
        src={urlFor(imageSrc).url()}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out"
        style={{
          opacity: isHovered ? 0.8 : 0.3, // Slightly visible by default
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      /> */}

      <div className="absolute inset-0 dark:bg-hBlack bg-hWhite transparent opacity-40" />

      <div className="absolute top-8 left-0 p-4 dark:text-gray-400 text-gray-700">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-base font-normal dark:text-gray-400 text-gray-700 mb-4">{description}</p>

       
        <div className="flex gap-4">
          {livelink && (
            <Button
              variant="link"
              className="dark:text-gray-400 text-gray-700 dark:hover:text-hWhite hover:text-black text-base font-light flex items-center"
              asChild
            >
              <Link href={livelink} target="_blank">
                {/* <p className="font-light text-base">Live</p> <SquareArrowOutUpRight className="w-2" /> */}
              </Link>
            </Button>
          )}
          {githublink && (
            <Button
              variant="link"
              className="dark:text-gray-400 text-gray-700 dark:hover:text-hWhite hover:text-black text-base font-light flex items-center"
              asChild
            >
              <Link href={githublink} target="_blank">
                {/* <p className="font-light text-base">Github</p> <SquareArrowOutUpRight className="w-2" /> */}
              </Link>
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {techStack && techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}

        </div>
      </div>
    </div>
  );
}
