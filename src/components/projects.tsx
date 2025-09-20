import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { Badge } from "@/components/ui/badge";
import type { PortableTextBlock } from "next-sanity";
import { Github, Link } from "lucide-react";

// 1. Define a TypeScript interface for your project data
interface Project {
    _id: string;
    title: string;
    featured?: boolean;
    description: PortableTextBlock[];
    tools?: string[];
    github?: string;
    liveLink?: string;
}

// 2. Make the component an async Server Component
export default async function Projects() {
    // The GROQ query to fetch projects, ordered by the last update time
    const projectsQuery = `*[_type == "projects"] | order(_updatedAt desc)`;
    const projects: Project[] = await client.fetch(projectsQuery);

    if (!projects || projects.length === 0) {
        return (
            <section className="py-6" id="projects">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Projects</h2>
                <div className="text-center py-8 text-muted-foreground">No projects to display.</div>
            </section>
        );
    }

    return (
        <section className="mb-6 mt-12" id="projects">
            <h2 className="sm:text-4xl text-3xl font-medium mb-4 text-foreground">Projects</h2>
            <div className="space-y-4">
                {projects.map((project) => (
                    <div 
                        key={project._id}
                        className="border-b py-4 hover:shadow-sm transition-shadow duration-200 border-border"
                    >
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg font-base text-foreground">
                                    {project.title}
                                </h3>
                                {project.featured && (
                                    <Badge variant="outline" className="text-[10px] h-5">
                                        Featured
                                    </Badge>
                                )}
                            </div>
                            
                            {/* The description remains unchanged */}
                            <div className="text-sm text-muted-foreground line-clamp-2">
                                <PortableText value={project.description} />
                            </div>
                            
                            <div className="flex flex-wrap gap-1.5 mt-1">
                                {project.tools?.slice(0, 6).map((tool: string) => (
                                    <Badge 
                                        key={tool} // Use the tool name as a key if they are unique
                                        variant="secondary" 
                                        className="text-[10px]"
                                    >
                                        {tool}
                                    </Badge>
                                ))}
                                {project.tools && project.tools.length > 6 && (
                                    <span className="text-xs text-muted-foreground self-center">
                                        +{project.tools.length - 6} more
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* 3. Improved Links with Group Hover Effect */}
                        <div className="mt-6 flex gap-4 text-xs">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <Github className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
                                    Code
                                </a>
                            )}
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <Link className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
                                    Live
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}