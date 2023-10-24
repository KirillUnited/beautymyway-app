import { Mulish } from 'next/font/google';

export const mulish = Mulish({
    weight: ['200', '400', '600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mulish'
});