export interface IHeaderProps {
    closeNav: () => void;
}
export interface IMenuItemsProps {
    link: string, 
    label: string, 
    links?: {link:string, label: string}[]
}