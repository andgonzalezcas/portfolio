"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants";
import { SectionId } from "@/enums/common";

export default function HeroSection() {
    const { t } = useTranslation("common");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <section className="min-h-screen" />;
    }

    const badges = t("hero.badges", { returnObjects: true }) as string[];

    return (
        <section id={SectionId.HERO} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container w-full px-4 md:px-8 mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center cursor-default">

                    {/* Left Column: Text (60%) */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left lg:col-span-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground w-fit mx-auto lg:mx-0">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            {t("hero.role")}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                            {t("hero.greeting")}{" "}
                            <span className="block mt-2 bg-clip-text text-transparent bg-linear-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400">
                                Software Engineer
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {t("hero.description")}
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2">
                            {badges.map((badge, idx) => (
                                <span key={idx} className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 text-xs border border-cyan-200 dark:border-cyan-800/50">
                                    {badge}
                                </span>
                            ))}
                        </div>

                        {/* Call to Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
                            <a
                                href="/Camilo_Gonzalez_CV.pdf"
                                download="Camilo_Gonzalez_CV.pdf"
                                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-foreground text-background font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                            >
                                {t("hero.ctaSecondary")} <Download className="w-5 h-5" />
                            </a>
                            <a
                                href={EXTERNAL_LINKS.LINKEDIN}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-secondary/50 border border-border text-foreground font-semibold flex items-center justify-center gap-2 hover:bg-secondary transition-colors"
                            >
                                {t("hero.ctaPrimary")}
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Avatar (40%) */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative lg:col-span-2">
                        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                            {/* Gradient Circle Background */}
                            <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400 blur-2xl opacity-20 dark:opacity-40 animate-pulse" />
                            <div className="absolute inset-4 rounded-full bg-linear-to-tr from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400 flex items-center justify-center overflow-hidden border border-background shadow-2xl">
                                <Image
                                    src="/profile.png"
                                    alt="Camilo Andrés"
                                    className="object-cover w-full h-full"
                                    width={500}
                                    height={500}
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
