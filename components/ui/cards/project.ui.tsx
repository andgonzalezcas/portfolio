import { ExternalLink } from "lucide-react";

export interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    className?: string;
}

export default function ProjectCard({ title, description, tags, link, className = "" }: ProjectCardProps) {
    return (
        <div
            className={`group flex flex-col justify-between border border-border/50 rounded-xl overflow-hidden bg-secondary/30 backdrop-blur-sm p-6 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_8px_30px_rgb(6,182,212,0.12)] transition-all duration-300 ${className}`}
        >
            <div className="flex flex-col gap-4">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-4"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 shrink-0 transition-colors mt-1" />
                </a>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
                {tags.map((tag, tagIndex) => (
                    <span
                        key={tagIndex}
                        className="px-2 py-1 md:px-3 rounded-full bg-cyan-100 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 text-xs border border-cyan-200 dark:border-cyan-800/50 hover:bg-cyan-200 dark:hover:bg-cyan-900/50 transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
