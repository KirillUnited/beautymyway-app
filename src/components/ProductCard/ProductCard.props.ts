export interface IProductCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    image: string,
    title: string,
    variant?: 'featured' | 'default',
    description?: string,
    index: number
}