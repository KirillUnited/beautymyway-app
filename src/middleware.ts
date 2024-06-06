import createMiddleware from 'next-intl/middleware';
import { locales } from "./i18n.config";

const middleware = createMiddleware({
    defaultLocale: 'ru',
    locales,
    localeDetection: true,
    localePrefix: "always"
});

export default middleware;

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ru|en|es)/:path*']
};