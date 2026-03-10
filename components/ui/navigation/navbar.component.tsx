"use client";

import { useTranslation } from "react-i18next";
import { SectionId } from "@/enums/common";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { t, i18n } = useTranslation("common");
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const closeMenu = () => setIsMobileMenuOpen(false);

    const links = [
        { name: t("navbar.home"), href: `#${SectionId.HERO}` },
        { name: t("navbar.projects"), href: `#${SectionId.PROJECTS}` },
        { name: t("navbar.experience"), href: `#${SectionId.EXPERIENCE}` },
        { name: t("navbar.connect"), href: `#${SectionId.CONNECT}` },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="flex items-center justify-between md:justify-center py-4 px-4 md:px-8 bg-background/80 backdrop-blur-md border-b border-border/10 shadow-sm relative z-10">
                {/* Left Mobile Menu Toggle / Desktop Spacer */}
                <div className="flex-1 flex justify-start md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Toggle Mobile Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
                <div className="flex-1 hidden md:block"></div>

                {/* Center Navigation Links (Desktop) */}
                <ul className="hidden md:flex flex-none items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.href}
                                className="hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Controls (Theme & Language) */}
                <div className="flex-1 flex justify-end items-center gap-2">
                    <button
                        onClick={toggleLanguage}
                        className="p-2 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center font-bold text-xs uppercase"
                        aria-label="Toggle Language"
                    >
                        <span className="w-5 text-center">{mounted ? i18n.language : 'en'}</span>
                    </button>
                    
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors relative"
                        aria-label="Toggle Theme"
                    >
                        <Moon className="w-4 h-4 block dark:hidden" />
                        <Sun className="w-4 h-4 hidden dark:block" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/10 shadow-lg p-4 flex flex-col items-center gap-4 z-0"
                    >
                        {links.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-muted-foreground hover:text-foreground font-medium py-3 w-full text-center transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
