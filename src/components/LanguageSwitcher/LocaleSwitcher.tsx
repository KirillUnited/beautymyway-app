"use client";

import useLocaleSwitcher from "@/hooks/useLocaleSwitcher";
import {
    locales,
    type Locale,
} from "@/i18n.config";
import { Select } from "@mantine/core";
import { IconLanguageHiragana } from '@tabler/icons-react';

export default function LocaleSwitcher({
    locale,
}: {
    locale: string;
}) {
    const { changeLocale } = useLocaleSwitcher();

    return (
        <div>
            <Select
                variant="unstyled"
                onChange={(newLocale) => changeLocale(newLocale)}
                checkIconPosition="left"
                rightSection={<IconLanguageHiragana/>}
                data={[...locales]}
                defaultValue={locale}
                comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
                classNames={
                    {
                        wrapper: 'inline-flex',
                        input: 'uppercase text-primary flex-0 w-16',
                        option: 'text-foreground uppercase',
                        dropdown: 'min-w-[80px]'
                    }
                }
            />
        </div>
    );
}