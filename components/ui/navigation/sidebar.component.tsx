"use client";

import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
    const { theme, setTheme } = useTheme();
    const { i18n } = useTranslation();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(newLang);
    };

    if (!mounted) { return null }

    return (
        <motion.nav
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 bg-secondary/30 backdrop-blur-md border border-border/50 p-2 rounded-2xl shadow-xl hover:border-border transition-colors group/nav"
        >
            <button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-all duration-300 group relative"
                aria-label="Toggle Theme"
            >
                {theme === "dark" ? (
                    <Sun className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                ) : (
                    <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500" />
                )}
            </button>

            <button
                onClick={toggleLanguage}
                className="p-3 rounded-xl bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-all duration-300 flex items-center justify-center font-bold text-xs uppercase group relative"
                aria-label="Toggle Language"
            >
                <span className="relative z-10">{i18n.language}</span>
            </button>
        </motion.nav>
    );
}
