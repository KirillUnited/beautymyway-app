"use client";

import useLocaleSwitcher from "@/hooks/useLocaleSwitcher";
import {
    locales,
    type Locale,
} from "@/i18n.config";
import { Select } from "@mantine/core";

export default function LocaleSwitcher({
    locale,
}: {
    locale: string;
}) {
    const { changeLocale } = useLocaleSwitcher();

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
                        input: 'uppercase bg-transparent text-primary border-none w-20',
                        option: 'text-foreground uppercase'
                    }
                }
            />
        </div>
    );
}