"use client";

import { useTranslation } from "react-i18next";
import TimelineCard from "@/components/ui/cards/timeline.ui";
import { TimelineItem } from "@/types/common.types";

export default function ExperienceSection() {
    const { t } = useTranslation("common");

    const experiences = t("experience.jobs", { returnObjects: true }) as TimelineItem[];
    const educations = t("experience.education", { returnObjects: true }) as TimelineItem[];

    return (
        <section id="experience" className="py-24 min-h-screen relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none" />

            <div className="container px-4 mx-auto max-w-4xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-emerald-400 mb-4 inline-block">
                        {t("experience.title")}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {t("experience.subtitle")}
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Experience List */}
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-cyan-500 rounded-full"></span>
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
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-emerald-500 rounded-full"></span>
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
