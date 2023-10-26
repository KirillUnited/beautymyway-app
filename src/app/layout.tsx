import type { Metadata } from 'next';
import '../styles/globals.css'
import { mulish } from './fonts';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
	metadataBase: new URL('https://site.com'),
	title: 'Артур Сугако теперь и в Барселоне!',
	description: 'Красота – это свобода! Так было сто лет назад – все также и сегодня. Изменились только технологии.',
	keywords: ['Салон красоты', 'Барселона', 'Процедуры'],
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://www.url.ie/a',
		title: 'OG Title',
		description: 'OG Decription',
		siteName: 'Example',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="ru"
			className={`${mulish.variable} font-mulish text-primary bg-foreground`}
		>
			<body>
				<div className='wrapper flex flex-col min-h-screen'>
					<Header></Header>
					<main className="content flex-1">
						{children}
					</main>
					<Footer></Footer>
				</div>
			</body>
		</html>
	)
}
