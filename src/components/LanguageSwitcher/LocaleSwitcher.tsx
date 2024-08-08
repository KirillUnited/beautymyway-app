"use client";

import useLocaleSwitcher from "@/hooks/useLocaleSwitcher";
import {
    locales,
    type Locale,
} from "@/i18n.config";
import { Group, Select } from "@mantine/core";
import Image from "next/image";

export default function LocaleSwitcher({
    locale,
}: {
    locale: string;
}) {
    const { changeLocale, getLocaleData } = useLocaleSwitcher();
    const currentLocaleIcon = getLocaleData(locale).icon;

    return (
        <div>
            <Select
                variant="unstyled"
                onChange={(newLocale) => changeLocale(newLocale)}
                withCheckIcon={false}
                checkIconPosition="left"
                rightSection={
                    <Image
                        src={currentLocaleIcon}
                        width={24}
                        height={24}
                        className="rounded-full"
                        alt={locale} />
                }
                data={[...locales]}
                defaultValue={locale}
                comboboxProps={{
                    width: 80,
                    transitionProps: { transition: 'pop', duration: 200 },
                }}
                classNames={
                    {
                        wrapper: 'inline-flex',
                        input: 'uppercase text-primary w-16',
                        option: 'text-foreground',
                    }
                }
            />
        </div>
    );
}