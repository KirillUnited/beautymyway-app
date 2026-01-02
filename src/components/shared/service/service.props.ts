import { MediaBlockProps } from "@/components/shared/media/media.props";
import React from "react";

export interface ServiceHeroProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    mediaBlock?: MediaBlockProps;
    image?: string;
    footerSection?: React.ReactNode
};