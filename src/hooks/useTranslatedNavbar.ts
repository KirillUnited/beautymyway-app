import { getTranslations } from 'next-intl/server';

export default async function useTranslatedNavbar() {
    const t = await  getTranslations('Header.navbar');
    const translatedNavbar = {
        "services": {
            "label": t('services.label'),
            "menuItems": {
                "service_1": t('services.menuItems.service_1'),
                "service_2": t('services.menuItems.service_2'),
                "service_3": t('services.menuItems.service_3'),
                "service_4": t('services.menuItems.service_4'),
                "service_5": t('services.menuItems.service_5'),
                "service_6": t('services.menuItems.service_6'),
                "service_7": t('services.menuItems.service_7'),
                "service_8": t('services.menuItems.service_8'),
                "service_9": t('services.menuItems.service_9')
            }
        },
        "consult": {
            "label": t('consult.label')
        },
        "aboutUs": {
            "label": t('aboutUs.label'),
            "menuItems": {
                "whoAreWe": t('aboutUs.menuItems.whoAreWe'),
                "reviews": t('aboutUs.menuItems.reviews')
            }
        },
        "contacts": {
            "label": t('contacts.label')
        },
    }

    return translatedNavbar;
}
