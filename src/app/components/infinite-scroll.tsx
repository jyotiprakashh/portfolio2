import Image from "next/image";

const techLogos = [
  { name: "React", src: "/react.png?height=50&width=50" },
  { name: "NextJS", src: "/nextjs.jpg?height=20&width=20" },
  { name: "AWS", src: "/aws.jpg?height=20&width=20" },
  { name: "C", src: "/c.png?height=20&width=20" },
  { name: "Docker", src: "/docker.png?height=20&width=20" },
  { name: "Firebase", src: "/firebase.png?height=20&width=20" },
  { name: "Gin", src: "/gin.png?height=20&width=20" },
  { name: "Go", src: "/go.png?height=20&width=20" },
  { name: "JS", src: "/javascript.png?height=20&width=20" },
  { name: "Kafka", src: "/kafka.webp?height=20&width=20" },
  { name: "Mongodb", src: "/mongodb.jpg?height=20&width=20" },
  { name: "Postgres", src: "/postgres.jpeg?height=20&width=20" },
  { name: "Python", src: "/python.jpeg?height=20&width=20" },
  { name: "Redis", src: "/redis.png?height=20&width=20" },
  { name: "Tailwind", src: "/tailwind.webp?height=20&width=20" },
  { name: "Terraform ", src: "/terraform.png?height=20&width=20" },
];

export default function TechLogoScroll() {
  return (
    <div className="relative sm:max-w-2xl max-w-xs mx-auto overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hWhite dark:from-hBlack to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hWhite dark:from-hBlack to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-scroll">
        {[...techLogos, ...techLogos, ...techLogos].map((logo, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center w-[75px] flex-shrink-0 mx-4"
          >
            <div className="w-10 h-10 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                          shadow-lg flex items-center justify-center overflow-hidden
                          transition-all duration-300 ease-out
                          group-hover:scale-110 group-hover:shadow-xl
                          dark:border dark:border-gray-700/50">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={32}
                height={32}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 transform translate-y-1
                         transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 mt-2">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
