export const locales = ["ru", "en", "es"] as const;
export type Locale = (typeof locales)[number];