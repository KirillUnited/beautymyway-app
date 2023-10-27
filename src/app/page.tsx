import Button from '@/components/Button/Button'
import Image from 'next/image'

export default function Home() {
	return (
		<section className={`container`}>
			<h1>CONTENT</h1>
			<Button variant='primary' className='min-w-[11.5rem]'>Услуги</Button>
		</section>
	)
}
