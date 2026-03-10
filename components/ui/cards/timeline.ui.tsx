"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { TimelineItem } from "@/types/common.types";

interface TimelineCardProps {
    item: TimelineItem;
    isInitiallyOpen?: boolean;
}

export default function TimelineCard({ item, isInitiallyOpen = false }: TimelineCardProps) {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm transition-colors hover:border-white/20 group">
            <button
                type="button"
                onClick={handleToggle}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
            >
                <div className="flex flex-col gap-1 pr-4 md:pr-6">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm text-gray-400 mt-1">
                        <span className="font-medium text-cyan-400">{item.subtitle}</span>
                        {item.badge && (
                            <>
                                <span className="hidden sm:inline">•</span>
                                <span className="bg-white/10 px-2 py-0.5 rounded text-xs">{item.badge}</span>
                            </>
                        )}
                        <span className="hidden sm:inline">•</span>
                        <span className="whitespace-nowrap">{item.startDate} &mdash; {item.endDate}</span>
                    </div>
                    {item.location && (
                        <p className="text-xs md:text-sm text-gray-500 mt-2">{item.location}</p>
                    )}
                </div>
                <div className="shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    </motion.div>
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-5 md:p-6 pt-0 border-t border-white/10">
                            {item.description && item.description.length > 0 && (
                                <ul className="flex flex-col gap-3 mt-4 text-gray-300 text-sm md:text-base">
                                    {item.description.map((desc, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="text-cyan-400 mt-[5px] shrink-0 text-[10px]">▶</span>
                                            <span className="leading-relaxed">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {item.skills && item.skills.length > 0 && (
                                <div className="mt-6 flex flex-wrap items-center gap-2">
                                    {item.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 md:px-3 rounded-full bg-cyan-950/40 text-cyan-300 text-xs border border-cyan-800/50 hover:bg-cyan-900/50 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
