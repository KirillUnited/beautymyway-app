import { Mulish } from 'next/font/google';
import localFont from 'next/font/local';

export const mulish = Mulish({
    weight: ['200', '400', '600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mulish',
    preload: true,
});

export const futura = localFont({
    src: [
      {
        path: '../../public/fonts/FuturaPTLight.otf',
        weight: '200',
        style: 'normal'
      },
    ],
    display: 'swap',
    variable: '--font-futura'
  })