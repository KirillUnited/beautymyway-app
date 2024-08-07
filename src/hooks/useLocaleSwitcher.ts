import { usePathname, useRouter } from '@/i18n.config';
import EnFlag from '@/assets/icons/en.svg'
import RuFlag from '@/assets/icons/ru.svg'
import EsFlag from '@/assets/icons/es.svg'

const icons: any = {
    'en': EnFlag,
    'ru': RuFlag,
    'es': EsFlag
}

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
    const getLocaleIcon = (locale: string) => {
        return icons[locale];
    }
    
    return {
        changeLocale,
        getLocaleIcon
    }
}
