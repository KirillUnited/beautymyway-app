"use client";

import {
    locales,
    usePathname,
    useRouter,
    type Locale,
} from "@/i18n.config";
import { Select } from "@mantine/core";

export default function LocaleSwitcher({
    locale,
}: {
    locale: string;
}) {
    // `pathname` will contain the current
    // route without the locale e.g. `/about`...
    const pathname = usePathname();
    const router = useRouter();

    const changeLocale = (
        newLocale: any,
    ) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div>
            <Select
                onChange={(newLocale) => changeLocale(newLocale)}
                checkIconPosition="left"
                data={[...locales]}
                defaultValue={locale}
                comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                classNames={
                    {
                        option: 'text-black'
                    }
                }
            />
        </div>
    );
}