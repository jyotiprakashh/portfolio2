import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { ArrowUpRight } from "lucide-react";
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
}

const personalInfoQuery = "*[_type == 'personalInfo'][0]";

export default async function About() {
    const personalInfo: PersonalInfo = await client.fetch(personalInfoQuery);

    if (!personalInfo) {
        return <div>Personal information not found.</div>;
    }

    return (
        <div className="flex flex-col justify-center min-h-[calc(100vh-11rem)]">
            <div className="relative mt-4 md:mt-0 flex-shrink-0">
                <div
                    className="absolute inset-[-2rem] z-[-1] dark:hidden" // Negative inset makes it larger
                    style={{
                        backgroundImage: `
                                    linear-gradient(to right,rgb(212, 210, 205) 1px, transparent 1px),
                                    linear-gradient(to bottom,rgb(212, 210, 205) 1px, transparent 1px)
                                `,
                        backgroundSize: "32px 32px",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                        maskImage:
                            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                    }}
                />
                 <div
                    className="absolute inset-[-2rem] z-[-1] hidden dark:block" // Negative inset makes it larger
                    style={{
                        backgroundImage: `
                                    linear-gradient(to right, #56453F 1px, transparent 1px),
                                    linear-gradient(to bottom, #56453F 1px, transparent 1px)
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
                        <h1 className="text-4xl font-bold text-accent-foreground">{personalInfo.name}</h1>
                        <p className="mt-1 text-lg text-muted-foreground">{personalInfo.designation}</p>
                        <p className="text-sm text-muted-foreground">{personalInfo.address}</p>
                    </div>

                    {/* Profile picture section on the right */}
                    {personalInfo.profilePic && (
                        <div className="relative mt-4 md:mt-0 flex-shrink-0 hidden md:block">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 border-accent-foreground/10 hover:border-accent-foreground/30 transition-all duration-300">
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
            <div className="prose max-w-none text-sm text-accent-foreground mt-8"> {/* Increased margin-top */}
                <PortableText value={personalInfo.description} />
            </div>

            <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-accent-foreground transition-colors duration-300 w-fit"
            >
                My Resume
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <Socials />
        </div>
    );
}