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

export default async function RootLocaleLayout({
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
