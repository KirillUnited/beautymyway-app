import type { Metadata } from 'next';
import '@mantine/core/styles.css';
import '@/styles/globals.scss';
import { mulish } from './fonts';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
	metadataBase: new URL('https://site.com'),
	title: 'Dr. Artur Sugako Clinic ➤ Професиональный косметолог в Барселоне',
	description: 'Dr. Artur Sugako косметолог в Барселоне⭐ Профессионально помогаю обрести красоту и здоровье! ✅ ➤ Опыт более 15 лет!',
	keywords: ['Массаж', 'Endosphere', 'Emsculpt', 'Dion laser', 'БАД', 'питание', 'спорт', 'косметолог', 'врач', 'ботокс', 'мезотерапия', 'биоревитализация', 'Myway', 'Beauty', 'BeautyMyway', 'липолитики', 'карбокситерапия', 'чистка', 'лицо', 'кожа', 'тело', 'красота', 'здоровье', 'гармония', 'психология'],
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://beautymyway.es',
		title: 'Dr. Artur Sugako Clinic ➤ Професиональный косметолог в Барселоне',
		description: 'Dr. Artur Sugako косметолог в Барселоне⭐ Профессионально помогаю обрести красоту и здоровье! ✅ ➤ Опыт более 15 лет!',
		siteName: 'beautymyway',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<head>
				<ColorSchemeScript />
			</head>
			<body className={`${mulish.className} text-primary bg-foreground`}>
				<MantineProvider>
					<div className='wrapper flex flex-col min-h-screen'>
						<Header></Header>
						<main className="content flex-1">
							{children}
						</main>
						<Footer></Footer>
					</div>
				</MantineProvider>
			</body>
		</html>
	)
}
