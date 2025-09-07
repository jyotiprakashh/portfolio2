import { client } from "@/sanity/lib/client";
import { Github, Linkedin, Twitter, Link as LinkIcon } from "lucide-react"; // Use lucide-react icons

// 1. Define a TypeScript interface for your data
interface SocialHandle {
    _id: string;
    platform: string;
    link: string;
}

// 2. Map platform names to the imported icon components
const platformIcons: { [key: string]: React.ComponentType<any> } = {
    github: Github,
    linkedin: Linkedin,
    x: Twitter,
};

// 3. Make the component an async Server Component
export default async function Socials() {
    const socialHandlesQuery = "*[_type == 'socialHandles']";
    const socialHandles: SocialHandle[] = await client.fetch(socialHandlesQuery);

    if (!socialHandles || socialHandles.length === 0) {
        return null; // Don't render anything if there are no socials
    }

    return (
        <div className="flex gap-4 mt-6">
            {socialHandles.map((handle) => {
                // Find the corresponding icon component, with a fallback
                const Icon = platformIcons[handle.platform.toLowerCase()] || LinkIcon;

                return (
                    <a
                        key={handle._id}
                        href={handle.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link to my ${handle.platform} profile`} // More descriptive aria-label
                        className="text-muted-foreground transition-transform duration-200 hover:text-accent-foreground hover:scale-110"
                    >
                        <Icon size={20} />
                    </a>
                );
            })}
        </div>
    );
}