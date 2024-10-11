import { ReactNode } from 'react';
import '@mantine/core/styles.css';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '@/config/theme';
import { futura, mulish } from '@/config/fonts';
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

type Props = {
	children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
// export default function RootLayout({ children }: Props) {
// 	return children;
// }

export const metadata: Metadata = {
	metadataBase: new URL('https://beautymyway.es'),
	title: {
		default: 'Beautymyway ➤ Професиональный косметолог в Валенсии',
		template: `%s | Beautymyway ➤ Професиональный косметолог в Валенсии`,
	},
	description: 'Beautymyway ➤ косметолог в Валенсии⭐ Профессионально помогаю обрести красоту и здоровье! ✅ ➤ Опыт более 15 лет!',
	keywords: ['Массаж', 'Endosphere', 'Emsculpt', 'Dion laser', 'БАД', 'питание', 'спорт', 'косметолог', 'врач', 'ботокс', 'мезотерапия', 'биоревитализация', 'Myway', 'Beauty', 'BeautyMyway', 'липолитики', 'карбокситерапия', 'чистка', 'лицо', 'кожа', 'тело', 'красота', 'здоровье', 'гармония', 'психология'],
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://beautymyway.es',
		title: 'Beautymyway ➤ Професиональный косметолог в Валенсии',
		description: 'Beautymyway ➤ косметолог в Валенсии⭐ Профессионально помогаю обрести красоту и здоровье! ✅ ➤ Опыт более 15 лет!',
		siteName: 'beautymyway',
		images: '/apple-icon.png'
	},
	themeColor: '#2b3632',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ru'>
			<head>
				<ColorSchemeScript />
				<GoogleTagManager gtmId="GTM-XYZ" />
				<GoogleAnalytics gaId='UA-12345678-0' />
			</head>
			<body className={`${mulish.className} ${futura.variable} text-primary bg-foreground`}>
				<MantineProvider theme={theme}>
					{children}
				</MantineProvider>
			</body>
		</html >
	)
}
