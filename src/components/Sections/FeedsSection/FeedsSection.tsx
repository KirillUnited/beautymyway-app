import React from 'react';
import {withSectionLayout} from "@/layouts/SectionLayout";
import Feeds from "@/components/Feeds/Feeds";

const sectionProps = {
    id: 'News',
    title: 'Последние новости',
}

export const FeedsSection = withSectionLayout(Feeds, sectionProps);
