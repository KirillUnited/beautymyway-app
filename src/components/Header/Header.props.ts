export interface IHeaderProps {
    closeNav: () => void;
    translatedNavbar: any
}
export interface IMenuItemsProps {
    link: string, 
    label: string, 
    links?: {link:string, label: string}[]
}