import React from 'react';
import {withSectionLayout} from "../../layouts/SectionLayout";
import Feeds from "../../../components/Feeds/Feeds";

const sectionProps = {
    id: 'news',
    title: 'Последние новости',
}

export const FeedsSection = withSectionLayout(Feeds, sectionProps);
