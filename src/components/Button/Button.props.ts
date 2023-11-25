import { LinkProps } from "next/link";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode,
    variant: 'primary' | 'transparent'
}
export interface ButtonLinkProps extends LinkProps {
    children: React.ReactNode,
    variant: 'primary' | 'transparent',
    className?: string
}