import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { ArrowUpRight, Mail } from "lucide-react";
import Socials from "./socials";
import type { PortableTextBlock } from "next-sanity";
import { urlFor } from "@/sanity/lib/image"; // Corrected function name
import Image from "next/image";

interface PersonalInfo {
    _id: string;
    name: string;
    designation: string;
    address: string;
    description: PortableTextBlock[];
    resumeLink: string;
    profilePic: any; // Use 'any' or a more specific Sanity image type
    email: string;
}

const personalInfoQuery = "*[_type == 'personalInfo'][0]";

export default async function About() {
    const personalInfo: PersonalInfo = await client.fetch(personalInfoQuery);

    if (!personalInfo) {
        return <div>Umm Sorry something went wrong...</div>;
    }

    return (
        <section className="flex flex-col justify-center min-h-[calc(100vh-10rem)]" id="about">
            <div className="relative -mt-12 flex-shrink-0">
                <div
                    className="absolute inset-[-2rem] z-[-1] dark:hidden -translate-x-6"
                    style={{
                        backgroundImage: `
                                    linear-gradient(to right,rgb(187, 187, 187) 1px, transparent 1px),
                                    linear-gradient(to bottom,rgb(187, 187, 187) 1px, transparent 1px)
                                `,
                        backgroundSize: "32px 32px",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                        maskImage:
                            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                    }}
                />
                <div
                    className="absolute inset-[-2rem] z-[-1] hidden dark:block"
                    style={{
                        backgroundImage: `
                                    linear-gradient(to right,rgb(66, 66, 66) 1px, transparent 1px),
                                    linear-gradient(to bottom,rgb(66, 66, 66) 1px, transparent 1px)
                                `,
                        backgroundSize: "32px 32px",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                        maskImage:
                            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                    }}
                />
                <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                    {/* Text content on the left */}
                    <div className="text-left">
                        <h1 className="sm:text-5xl text-4xl text-accent-foreground">{personalInfo.name}</h1>
                        <p className="mt-1 sm:text-xl text-base text-muted-foreground">{personalInfo.designation}</p>
                        <p className="text-sm text-muted-foreground">{personalInfo.address}</p>
                    </div>

                    {/* Profile picture section on the right */}
                    {personalInfo.profilePic && (
                        <div className="relative mt-4 md:mt-0 flex-shrink-0 hidden md:block">
                            <div className="w-16 h-16 md:w-24 md:h-24 -mt-2 rounded-lg overflow-hidden border-2 border-accent-foreground/10 hover:border-accent-foreground/30 transition-all duration-300 grayscale-[50%] hover:grayscale-0">
                                <Image
                                    src={urlFor(personalInfo.profilePic).url()}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover"
                                    width={80}
                                    height={80}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Rest of your component */}
            <div className="prose max-w-none sm:text-base text-sm text-muted-foreground mt-6"> {/* Increased margin-top */}
                <PortableText value={personalInfo.description} />
            </div>

            <div className="flex items-center gap-3 mt-6">
                <a
                    href={personalInfo.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent-foreground transition-colors duration-300 border-b border-border hover:border-accent-foreground/50 leading-none pb-0.5"
                >
                    Resume
                </a>
                <div className="w-px h-4 bg-muted-foreground/50"></div>
                <a
                    href={`mailto:${personalInfo.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent-foreground transition-colors duration-300 border-b border-border hover:border-accent-foreground/50 leading-none pb-0.5"
                >
                    Contact
                </a>
            </div>

            <Socials />
        </section>
    );
}