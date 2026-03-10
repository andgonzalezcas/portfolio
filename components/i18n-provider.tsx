"use client"

import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n/config"
import { useEffect } from "react"

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const storedLang = localStorage.getItem('i18nextLng');
        if (storedLang) {
            i18n.changeLanguage(storedLang);
            return;
        }
        const browserLang = navigator.language.split('-')[0];
        if (["en", "es"].includes(browserLang)) {
            i18n.changeLanguage(browserLang);
            localStorage.setItem('i18nextLng', browserLang);
        }
    }, []);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
