"use client";

import { useTranslation } from "react-i18next";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SectionId } from "@/enums/common";
import { EXTERNAL_LINKS } from "@/constants/index";

export default function ConnectSection() {
    const { t } = useTranslation("common");

    const CONNECT_ITEMS = [
        {
            title: t("connect.linkedin"),
            href: EXTERNAL_LINKS.LINKEDIN,
            icon: <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
            colSpan: "md:col-span-2",
        },
        {
            title: t("connect.github"),
            href: EXTERNAL_LINKS.GITHUB,
            icon: <FaGithub className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
            colSpan: "md:col-span-1",
        },
        {
            title: t("connect.whatsapp"),
            href: EXTERNAL_LINKS.WHATSAPP,
            icon: <Phone className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
            colSpan: "md:col-span-1",
        },
        {
            title: t("connect.email"),
            href: EXTERNAL_LINKS.EMAIL,
            icon: <Mail className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
            colSpan: "md:col-span-2",
        },
    ];

    return (
        <section id={SectionId.CONNECT} className="py-24 relative overflow-hidden bg-background">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container w-full px-4 md:px-8 mx-auto max-w-6xl relative z-10">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400 mb-4 inline-block">
                        {t("connect.title")}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                        {t("connect.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CONNECT_ITEMS.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center justify-between border border-border/50 rounded-xl overflow-hidden bg-secondary/30 backdrop-blur-sm p-6 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_8px_30px_rgb(6,182,212,0.12)] transition-all duration-300 ${item.colSpan}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-muted-foreground">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 shrink-0 transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
