"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { GithubLogo, LinkedinLogo, TwitterLogo, Link } from "@phosphor-icons/react";

const socialHandlesQuery = "*[_type == 'socialHandles']";

const getPlatformIcon = (platform: string) => {
    const platformIcons: { [key: string]: React.ComponentType<any> } = {
        'github': GithubLogo,
        'linkedin': LinkedinLogo,
        'twitter': TwitterLogo,
    };

    const normalizedPlatform = platform.toLowerCase();
    return platformIcons[normalizedPlatform] || Link;
};

export default function Socials() {
    const [socialHandles, setSocialHandles] = useState<any[]>([]);

    useEffect(() => {
        const fetchSocialHandles = async () => {
            try {
                const data = await client.fetch(socialHandlesQuery, {});
                setSocialHandles(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching social handles:', error);
                setSocialHandles([]);
            }
        };

        fetchSocialHandles();
    }, []);

    if (socialHandles.length === 0) {
        return null;
    }

    return (
        <div className="flex gap-4 mt-6">
            {socialHandles.map((socialHandle) => {
                const Icon = getPlatformIcon(socialHandle.platform);
                return (
                    <a
                        key={socialHandle._id}
                        href={socialHandle.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent-foreground transition-colors hover:scale-110 duration-200 cursor-pointer"
                        aria-label={socialHandle.platform}
                    >
                        <Icon className="w-6 h-6" weight="duotone" />
                    </a>
                );
            })}
        </div>
    );
}