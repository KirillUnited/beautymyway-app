import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';
import { Pathnames } from 'next-intl/navigation';

export const pathnames = {
    '/': '/',
    '/posts': {
        ru: '/posts',
        en: '/posts',
        es: '/posts'
    }
} satisfies Pathnames<typeof locales>;

const middleware = createMiddleware({
    defaultLocale: 'ru',
    localePrefix,
    locales
});

export default middleware;

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ru|en|es)/:path*']
};