"use client";

import useLocaleSwitcher from "@/hooks/useLocaleSwitcher";
import {
    locales,
    type Locale,
} from "@/i18n.config";
import { Group, Select, SelectProps } from "@mantine/core";
import Image from "next/image";

export default function LocaleSwitcher({
    locale,
}: {
    locale: string;
}) {
    const { changeLocale, getLocaleData } = useLocaleSwitcher();
    const currentLocaleIcon = getLocaleData(locale).icon;
    const renderSelectOption: SelectProps['renderOption'] = ({ option }) => (
        <Group flex="1" gap="xs" justify="space-between">
            <span className="truncate max-w-[20ch]">{getLocaleData(option.value).label}</span>
            <Image
                src={getLocaleData(option.value).icon}
                width={20}
                height={20}
                className="rounded-full"
                alt={option.label} />
            { }
        </Group>
    );

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
                value={locale}
                comboboxProps={{
                    width: 'auto',
                    transitionProps: { transition: 'pop', duration: 200 },
                }}
                classNames={
                    {
                        wrapper: 'inline-flex',
                        input: 'uppercase text-primary w-16',
                        option: 'text-foreground',
                    }
                }
                renderOption={renderSelectOption}
            />
        </div>
    );
}