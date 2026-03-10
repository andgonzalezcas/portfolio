"use client";

import { motion, useScroll } from "framer-motion";

export default function StructuralTracker() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="fixed left-0 md:left-2 top-0 bottom-0 w-2 z-50 pointer-events-none">
            {/* Faint background track for structure */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-border/10" />
            
            {/* Active animated line */}
            <motion.div
                className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-linear-to-b from-transparent via-primary to-cyan-400"
                style={{
                    originY: 0,
                    scaleY: scrollYProgress,
                }}
            />
        </div>
    );
}
