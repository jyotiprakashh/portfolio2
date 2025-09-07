"use client";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { Code } from "@phosphor-icons/react";

const competitiveProfilesQuery = "*[_type == 'competitiveProfiles'] | order(_updatedAt desc)";

export default function CPProfiles() {
    const [competitiveProfiles, setCompetitiveProfiles] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const data = await client.fetch(competitiveProfilesQuery, {});
                setCompetitiveProfiles(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching competitive profiles:', error);
                setCompetitiveProfiles([]);
            }
        };
        
        fetchProfiles();
    }, []);

    if (competitiveProfiles.length === 0) {
        return null;
    }

    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Competitive Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {competitiveProfiles.map((profile, index) => {
                    return (
                        <a
                            key={index}
                            href={profile.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200"
                        >
                            <div className="p-2 rounded-md bg-accent">
                                <Code className="w-5 h-5 text-foreground" weight="duotone" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground capitalize">
                                    {profile.platform}
                                </p>
                                <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                                    {new URL(profile.profileUrl).hostname.replace('www.', '')}
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}