export interface IHeaderProps {
    closeNav: () => void;
    translatedNavbar: any,
    currentLocale: string
}
export interface IMenuItemsProps {
    link: string, 
    label: string, 
    links?: {link:string, label: string}[],
    name?: string
}