import type { Metadata } from 'next';
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
		<NextIntlClientProvider messages={messages}>
			<div className='wrapper flex flex-col min-h-screen'>
				<Header></Header>
				<main className="content flex-1">
					{children}
				</main>
				<Footer></Footer>
			</div>
		</NextIntlClientProvider>
	)
}
