import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
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
		description: t('description'),
		keywords: t('keywords'),
		openGraph: {
			type: 'website',
			locale: locale,
			url: 'https://beautymyway.es',
			title: t('title'),
			description: t('description'),
			siteName: 'beautymyway',
			images: '/apple-icon.png'
		},
	};
}

export default async function LocaleLayout({
	children,
	params,
}: Props) {
	// Enable static rendering
	unstable_setRequestLocale(params.locale);

	return (
		<div className='wrapper flex flex-col'>

			<Header />
			<main className="content flex-1">
				{children}
			</main>
			<Footer />

		</div>
	)
}
