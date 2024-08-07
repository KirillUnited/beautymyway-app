"use client";

import useLocaleSwitcher from "@/hooks/useLocaleSwitcher";
import {
    locales,
    type Locale,
} from "@/i18n.config";
import { Select } from "@mantine/core";
import EnFlag from '@/assets/icons/en.svg'
import RuFlag from '@/assets/icons/ru.svg'
import EsFlag from '@/assets/icons/es.svg'
import Image from "next/image";

const icons: any = {
    'en': EnFlag,
    'ru': RuFlag,
    'es': EsFlag
}

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
                rightSection={
                    <Image
                        src={icons[locale]}
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