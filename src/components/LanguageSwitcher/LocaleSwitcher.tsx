"use client";

import useLocaleSwitcher from "@/hooks/useLocaleSwitcher";
import {
    locales,
    type Locale,
} from "@/i18n.config";
import { Select } from "@mantine/core";
import Image from "next/image";

export default function LocaleSwitcher({
    locale,
}: {
    locale: string;
}) {
    const { changeLocale, getLocaleIcon } = useLocaleSwitcher();
    const icon = getLocaleIcon(locale);

    return (
        <div>
            <Select
                variant="unstyled"
                onChange={(newLocale) => changeLocale(newLocale)}
                checkIconPosition="left"
                rightSection={
                    <Image
                        src={icon}
                        width={34}
                        height={34}
                        className="rounded-full"
                        alt={locale} />
                }
                data={[...locales]}
                defaultValue={locale}
                comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                classNames={
                    {
                        wrapper: 'inline-flex',
                        input: 'uppercase text-primary w-16',
                        option: 'text-foreground uppercase',
                        dropdown: 'min-w-[80px]'
                    }
                }
            />
        </div>
    );
}