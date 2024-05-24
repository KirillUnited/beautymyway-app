import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { locales } from '@/i18n';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	params: { locale: string };
};

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params: { locale }
}: Omit<Props, 'children'>) {
	const t = await getTranslations({ locale, namespace: 'meta' });

	return {
		title: t('title'),
		description: t('description')
	};
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const messages = await getMessages();

	return (
		<div className='wrapper flex flex-col min-h-screen'>
			<NextIntlClientProvider messages={messages}>
				<Header></Header>
				<main className="content flex-1">
					{children}
				</main>
				<Footer></Footer>
			</NextIntlClientProvider>
		</div>
	)
}
