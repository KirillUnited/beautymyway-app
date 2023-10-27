import { StaticImageData } from "next/image";

export interface ImageSectionLayoutProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    children: React.ReactNode,
    image?: StaticImageData,
    title?: string,
    description?: string,
    alt?: string
}