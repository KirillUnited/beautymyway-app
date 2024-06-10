import { usePathname, useRouter } from '@/i18n.config';

export default function useLocaleSwitcher() {
    // `pathname` will contain the current
    // route without the locale e.g. `/about`...
    const pathname = usePathname();
    const router = useRouter();

    const changeLocale = (
        newLocale: any,
    ) => {
        router.replace(pathname, { locale: newLocale });
    };

    return {
        changeLocale
    }
}
