"use client";

import { useTranslation } from "react-i18next";
import { SectionId } from "@/enums/common";
import { PROJECT_LINKS } from "@/constants/index";
import ProjectCard from "@/components/ui/cards/project.ui";

interface Project {
    title: string;
    description: string;
    tags: string[];
}

export default function ProjectsSection() {
    const { t } = useTranslation("common");
    const projects = t("projects.items", { returnObjects: true }) as Project[];

    return (
        <section id={SectionId.PROJECTS} className="py-24 relative overflow-hidden bg-background">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400 mb-4 inline-block">
                        {t("projects.title")}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                        {t("projects.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            link={PROJECT_LINKS[index]}
                            className={index === 0 ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
