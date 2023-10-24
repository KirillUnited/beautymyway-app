import type { Metadata } from 'next';
import './globals.css'
import { mulish } from './fonts';

export const metadata: Metadata = {
	title: 'Артур Сугако теперь и в Барселоне!',
	description: 'Красота – это свобода! Так было сто лет назад – все также и сегодня. Изменились только технологии.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={`${mulish.variable} font-mulish text-primary bg-foreground`}
		>
			<body>
				<div className='wrapper flex flex-col min-h-screen'>
					<main className="content flex-1">
						{children}
					</main>
				</div>
			</body>
		</html>
	)
}
