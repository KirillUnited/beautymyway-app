"use client";
import { Accordion } from "@mantine/core";
import { JSX } from "react";
import { PortableText } from "next-sanity";

export interface FaqItem {
  title: string;
  body: any;
  value: string;
  description: string;
}

export default function FAQList({
  data,
  className,
}: {
  data: FaqItem[];
  className?: string;
}): JSX.Element {
  console.log(data);
  const items = data.map((item) => (
    <Accordion.Item key={item.title || item.value} value={item.title || item.value}>
      <Accordion.Control>{item.title || item.value}</Accordion.Control>
      <Accordion.Panel className="prose dark:prose-invert">
        {item.body ? <PortableText value={item.body} /> : item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      className={className}
      classNames={{
        item: "bg-transparent",
        control:
          "text-primary lg:text-lg hover:text-primaryInvert transition-colors",
        label: "font-semibold",
        content: "text-sm",
      }}
    >
      {items}
    </Accordion>
  );
}
