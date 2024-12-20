import { ReactNode } from 'react';
import '@mantine/core/styles.css';
import '@/styles/globals.scss';
import type { Metadata, Viewport } from 'next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '@/config/theme';
import { futura, mulish } from '@/config/fonts';
import { Chat } from '@/components/widgets/chat';

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
// export default function RootLayout({ children }: Props) {
// 	return children;
// }

export const metadata: Metadata = {
	metadataBase: new URL('https://beautymyway.es'),
	title: {
		default: 'Beauty My Way',
		template: `%s | Beauty My Way`,
	},
	description: 'Beauty My Way ➤ косметолог в Валенсии⭐ Профессионально помогаю обрести красоту и здоровье! ✅ ➤ Опыт более 15 лет!',
	keywords: ['Массаж', 'Endosphere', 'Emsculpt', 'Dion laser', 'БАД', 'питание', 'спорт', 'косметолог', 'врач', 'ботокс', 'мезотерапия', 'биоревитализация', 'Myway', 'Beauty', 'Beauty My Way', 'липолитики', 'карбокситерапия', 'чистка', 'лицо', 'кожа', 'тело', 'красота', 'здоровье', 'гармония', 'психология'],
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://beautymyway.es',
		title: 'Beauty My Way ➤ Профессиональный косметолог в Валенсии',
		description: 'Beauty My Way ➤ косметолог в Валенсии⭐ Профессионально помогаю обрести красоту и здоровье! ✅ ➤ Опыт более 15 лет!',
		siteName: 'beautymyway',
		images: '/apple-icon.png'
	},
};

export const viewport: Viewport = {
	themeColor: '#2b3632',
}

export default function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<html lang='ru'>
			<head>
				<ColorSchemeScript />
			</head>
			<body className={`${mulish.className} ${futura.variable} text-primary bg-foreground`}>
				<MantineProvider theme={theme}>
					{children}
					<Chat />
				</MantineProvider>
			</body>
		</html >
	)
}
