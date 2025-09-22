'use client'
import { Accordion } from '@mantine/core';
import {JSX} from "react";

export interface FaqItem {
    value: string;
    description: string;
}

export default function FAQList({ data, className }: { data: FaqItem[], className?: string }): JSX.Element {
    const items = data.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control>{item.value}</Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Accordion className={className} classNames={{
            item: 'bg-transparent',
            control: 'text-primary lg:text-lg hover:text-primaryInvert transition-colors',
            label: 'font-semibold',
            content: 'text-sm'
        }}>
            {items}
        </Accordion>
    );
}