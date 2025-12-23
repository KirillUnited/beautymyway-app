"use client";
import { Accordion } from "@mantine/core";
import { JSX } from "react";
import { PortableText } from "next-sanity";

export interface FaqItem {
  title: string;
  body: any;
}

export default function FAQList({
  data,
  className,
}: {
  data: FaqItem[];
  className?: string;
}): JSX.Element {
  const items = data.map((item) => (
    <Accordion.Item key={item.title} value={item.title}>
      <Accordion.Control>{item.title}</Accordion.Control>
      <Accordion.Panel className="prose dark:prose-invert">
        <PortableText value={item.body} />
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
