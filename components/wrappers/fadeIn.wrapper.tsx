"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down";
    isEntry?: boolean;
    className?: string;
    id?: string;
}

export default function FadeIn({ children, delay = 0, direction = "up", isEntry = false, className = "", id }: FadeInProps) {
    const yOffset = direction === "up" ? 40 : -40;

    const animationConfig = {
        hidden: { opacity: 0, y: yOffset },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1] as const, // Apple-style custom spring/easing
            },
        },
    };

    if (isEntry) {
        return (
            <motion.div
                id={id}
                initial="hidden"
                animate="visible"
                variants={animationConfig}
                className={className}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animationConfig}
            className={className}
        >
            {children}
        </motion.div>
    );
}
