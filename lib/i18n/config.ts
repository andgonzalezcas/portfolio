import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import esCommon from "./locales/es/common.json";
import enCommon from "./locales/en/common.json";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "es",
        resources: {
            es: {
                common: esCommon,
            },
            en: {
                common: enCommon,
            },
        },
    });

export default i18n;
