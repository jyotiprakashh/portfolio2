import { client } from "@/sanity/lib/client";
import { Building, Calendar } from "lucide-react";
import { PortableText } from "next-sanity";
import type { PortableTextBlock } from "next-sanity";
import type { Image as SanityImage } from "sanity";

interface Experience {
    _id: string;
    title: string;
    company: string;
    companyLogo: SanityImage;
    date: string;
    description: PortableTextBlock[];
}

export default async function Experiences() {
    // The GROQ query to fetch experiences, ordered by _updatedAt in ascending order
    const experiencesQuery = `*[_type == "experience"] | order(_updatedAt desc)`;
    const experiences: Experience[] = await client.fetch(experiencesQuery);

    if (!experiences || experiences.length === 0) {
        return (
            <section className="py-6" id="experiences">
               
            </section>
        );
    }

    return (
        <section className="py-8 flex flex-col justify-center min-h-[calc(100vh-11rem)]" id="experiences">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Experience</h2>
            <div className="space-y-6">
                {experiences.map((exp) => (
                    <div
                        key={exp._id}
                        className="hover:shadow-sm transition-shadow duration-200"
                    >
                        <div className="flex items-start">
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {exp.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {/* Use the date formatting function */}
                                        <span>{exp.date}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Building className="h-3.5 w-3.5 flex-shrink-0" />
                                    <span className="text-sm">{exp.company}</span>
                                </div>

                                <div className="prose prose-sm max-w-none text-muted-foreground mt-2 text-sm">
                                    <PortableText value={exp.description} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}