import { StaticImageData } from "next/image";

export interface ImageSectionLayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    children: React.ReactNode,
    image?: StaticImageData,
    title?: string,
    description?: string
}