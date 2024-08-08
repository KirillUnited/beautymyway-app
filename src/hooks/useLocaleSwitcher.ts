import { usePathname, useRouter } from '@/i18n.config';
import EnFlag from '@/assets/icons/en.svg'
import RuFlag from '@/assets/icons/ru.svg'
import EsFlag from '@/assets/icons/es.svg'

const data: any = {
    'en': {
        label: 'English',
        icon: EnFlag,
    },
    'ru': {
        label: 'Русский',
        icon: RuFlag,
    },
    'es': {
        label: 'Español',
        icon: EsFlag,
    }
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
    const getLocaleData = (locale: string) => {
        return data[locale];
    }

    return {
        changeLocale,
        getLocaleData
    }
}
