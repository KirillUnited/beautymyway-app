import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n.config';
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
	const t = await getTranslations({ locale, namespace: 'Meta' });

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
	// Enable static rendering
	unstable_setRequestLocale(params.locale);
	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			<div className='wrapper flex flex-col min-h-screen'>
				<Header />
				<main className="content flex-1">
					{children}
				</main>
				<Footer />
			</div>
		</NextIntlClientProvider>
	)
}
