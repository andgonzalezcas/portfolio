import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esCommon from "./locales/es/common.json";
import enCommon from "./locales/en/common.json";

i18n.use(initReactI18next)
    .init({
        lng: "en",
        debug: true,
        fallbackLng: "en",
        supportedLngs: ["en", "es"],
        nonExplicitSupportedLngs: true,
        load: 'languageOnly',
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
