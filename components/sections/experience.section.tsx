"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import TimelineCard from "@/components/ui/cards/timeline.ui";
import { TimelineItem } from "@/types/common.types";
import { SectionId } from "@/enums/common";

export default function ExperienceSection() {
    const { t } = useTranslation("common");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const experiences = t("experience.jobs", { returnObjects: true }) as TimelineItem[];
    const educations = t("experience.education", { returnObjects: true }) as TimelineItem[];

    if (!mounted) {
        return null;
    }

    return (
        <section id={SectionId.EXPERIENCE} className="py-24 min-h-screen relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container w-full px-4 md:px-8 mx-auto max-w-6xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400 mb-4 inline-block">
                        {t("experience.title")}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        {t("experience.subtitle")}
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Experience List */}
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-linear-to-r from-cyan-600 to-emerald-600 dark:from-cyan-500 dark:to-emerald-500 rounded-full"></span>
                            {t("experience.workTitle")}
                        </h3>
                        <div className="flex flex-col gap-4">
                            {experiences.map((item, index) => (
                                <TimelineCard key={item.id} item={item} isInitiallyOpen={index === 0} />
                            ))}
                        </div>
                    </div>

                    {/* Education List */}
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-linear-to-r from-emerald-600 to-cyan-600 dark:from-emerald-500 dark:to-cyan-500 rounded-full"></span>
                            {t("experience.educationTitle")}
                        </h3>
                        <div className="flex flex-col gap-4">
                            {educations.map((item) => (
                                <TimelineCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
