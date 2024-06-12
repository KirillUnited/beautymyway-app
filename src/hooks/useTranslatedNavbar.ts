import { getTranslations } from 'next-intl/server';

export default async function useTranslatedNavbar() {
    const t = await getTranslations('Header.navbar');
    const translatedNavbar = {
        "services": {
            "label": t('services.label'),
            "menuItems": {
                "service_1": {
                    "label": t('services.menuItems.service_1.label'),
                    "innerMenuItems": {
                        "sub_service_1": t('services.menuItems.service_1.innerMenuItems.sub_service_1'),
                        "sub_service_2": t('services.menuItems.service_1.innerMenuItems.sub_service_2')
                    }
                },
                "service_2": {
                    "label": t('services.menuItems.service_2.label')
                },
                "service_3": {
                    "label": t('services.menuItems.service_3.label')
                },
                "service_4": {
                    "label": t('services.menuItems.service_4.label')
                },
                "service_5": {
                    "label": t('services.menuItems.service_5.label'),
                    "innerMenuItems": {
                        "sub_service_1": t('services.menuItems.service_5.innerMenuItems.sub_service_1'),
                        "sub_service_2": t('services.menuItems.service_5.innerMenuItems.sub_service_2')
                    }
                },
                "service_6": {
                    "label": t('services.menuItems.service_6.label')
                },
                "service_7": {
                    "label": t('services.menuItems.service_7.label'),
                    "innerMenuItems": {
                        "sub_service_1": t('services.menuItems.service_7.innerMenuItems.sub_service_1'),
                        "sub_service_2": t('services.menuItems.service_7.innerMenuItems.sub_service_2'),
                        "sub_service_3": t('services.menuItems.service_7.innerMenuItems.sub_service_3'),
                        "sub_service_4": t('services.menuItems.service_7.innerMenuItems.sub_service_4'),
                        "sub_service_5": t('services.menuItems.service_7.innerMenuItems.sub_service_5')
                    }
                },
                "service_8": {
                    "label": t('services.menuItems.service_8.label'),
                    "innerMenuItems": {
                        "sub_service_1": t('services.menuItems.service_8.innerMenuItems.sub_service_1'),
                        "sub_service_2": t('services.menuItems.service_8.innerMenuItems.sub_service_2'),
                        "sub_service_3": t('services.menuItems.service_8.innerMenuItems.sub_service_3'),
                        "sub_service_4": t('services.menuItems.service_8.innerMenuItems.sub_service_4')
                    }
                },
                "service_9": {
                    "label": t('services.menuItems.service_9.label'),
                    "innerMenuItems": {
                        "sub_service_1": t('services.menuItems.service_9.innerMenuItems.sub_service_1'),
                        "sub_service_2": t('services.menuItems.service_9.innerMenuItems.sub_service_2'),
                        "sub_service_3": t('services.menuItems.service_9.innerMenuItems.sub_service_3'),
                        "sub_service_4": t('services.menuItems.service_9.innerMenuItems.sub_service_4'),
                        "sub_service_5": t('services.menuItems.service_9.innerMenuItems.sub_service_5')
                    }
                }
            }
        },
        "consult": {
            "label": t('consult.label')
        },
        "aboutUs": {
            "label": t('aboutUs.label'),
            "menuItems": {
                "whoAreWe": {
                    "label": t('aboutUs.menuItems.whoAreWe.label')
                },
                "reviews": {
                    "label": t('aboutUs.menuItems.reviews.label')
                }
            }
        },
        "contacts": {
            "label": t('contacts.label')
        },
    }

    return translatedNavbar;
}
