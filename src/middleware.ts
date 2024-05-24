import createMiddleware from 'next-intl/middleware';
import { locales } from "./i18n";

const middleware = createMiddleware({
    // Add locales you want in the app
    locales: locales,

    // Default locale if no match
    defaultLocale: 'ru'
});

export default middleware;

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ru|en|es)/:path*']
};