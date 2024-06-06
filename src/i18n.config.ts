import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["ru", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const { Link, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });