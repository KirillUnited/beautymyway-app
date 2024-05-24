import type { Metadata } from 'next';
import '@mantine/core/styles.css';
import '@/styles/globals.scss';
import { mulish, futura } from '@/config/fonts';
import { theme } from '@/config/theme';
import { MantineProvider, ColorSchemeScript, createTheme } from '@mantine/core';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const messages = await getMessages();

	return (
		<html lang={params.locale}>
			<head>
				<ColorSchemeScript />
			</head>
			<body className={`${mulish.className} ${futura.variable} text-primary bg-foreground`}>
				<MantineProvider theme={theme}>
					<NextIntlClientProvider messages={messages}>
						<div className='wrapper flex flex-col min-h-screen'>
							<Header></Header>
							<main className="content flex-1">
								{children}
							</main>
							<Footer></Footer>
						</div>
					</NextIntlClientProvider>
				</MantineProvider>
			</body>
		</html>
	)
}
