import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss';
import Button from '@/components/Button/Button';

export default function Header() {
    return (
        <header className={styles.root}>
            <div className="min-h-[5rem] container flex justify-between items-center">
                <div className={`logo`}>
                    <Image
                        src={`/images/logo.svg`}
                        width={180}
                        height={41}
                        alt='Артур Сугако теперь и в Барселоне!'
                    />
                </div>

                <ul className="justify-center items-center gap-7 inline-flex flex-wrap text-base font-light">
                    <li>
                        <Link href={'/'} className="text-center items-center flex">Услуги</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="text-center items-center flex">Проблемы</Link>
                    </li>
                    <li>
                        <Link href={`/`}>Консультация</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="text-center items-center flex">Цены</Link>
                    </li>
                    <li>
                        <Link href={`/`}>Новости</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="text-center items-center flex">Про нас</Link>
                    </li>
                </ul>
                <div className="flex flex-wrap gap-7">
                    <Button variant='transparent' className={styles.button}>В магазин</Button>
                    <div className="flex items-center font-light">
                        <button className={`px-2`}>Ua</button>
                        <button className={`px-2`}>Es</button>
                    </div>
                </div>
            </div>
        </header >
    )
}
