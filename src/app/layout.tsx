import type { Metadata } from 'next';
import './globals.css'
import { mulish } from './fonts';

export const metadata: Metadata = {
	title: 'Dr.Dudikova Clinic теперь и в Барселоне!',
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
			className={`${mulish.variable} font-mulish`}
		>
			<body>{children}</body>
		</html>
	)
}
