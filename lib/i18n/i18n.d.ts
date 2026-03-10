import "i18next";

import common from "./locales/es/common.json";

const resources = {
    common,
} as const;

declare module "i18next" {
    interface CustomTypeOptions {
        resources: typeof resources;
    }
}
