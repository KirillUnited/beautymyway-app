import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import Link from 'next/link';
import Contacts from '@/components/Contacts/Contacts';
import { CONTACTS, LINKS } from '@/data';

type linksCategoryType = 'О нас' | 'Услуги';

export default function Footer() {
    const getLinks = (name: linksCategoryType) => {
        const links = LINKS.filter((item) => {
            if (item.label === name) return item;
        })[0].links?.map((item) => (
            <li key={item.label}>
                <Link href={'/'} className='linkHover inline-block'>{item.label}</Link>
            </li>
        ));

        return links;
    }

    return (
        <footer className="flex flex-col gap-10 bg-foregroundDark py-6">
            <div className="container flex flex-wrap flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
                <div className='flex flex-col items-center md:items-start gap-6 order-1 sm:order-none'>
                    <Link href={'/'} className={`logo`}>
                        <Image
                            src={`/images/logo-color.png`}
                            width={140}
                            height={32}
                            alt='Артур Сугако теперь и в Барселоне!'
                            className='max-w-[40px]'
                        />
                    </Link>
                    <Contacts className='flex flex-col items-center md:items-start gap-2 text-center' tel={CONTACTS.tel} address={CONTACTS.adress} time={CONTACTS.time} />
                    <div className='flex flex-col md:self-start gap-2'>
                        <div className="socials flex justify-center items-center gap-4">
                            {
                                Object.values(CONTACTS.socials).map((item)=>{
                                    return <a href={item} key={item}><FontAwesomeIcon icon={faInstagram} className='w-5 h-5' /></a>
                                })
                            }
                        </div>
                        <Image
                            src={`/images/logo-clinic.svg`}
                            width={148}
                            height={53}
                            alt='Артур Сугако теперь и в Барселоне!'
                        />
                    </div>
                </div>
                <ul className="flex flex-col font-light leading-normal gap-2 text-center md:text-left">
                    <span className="text-lg font-semibold leading-7">О нас</span>
                    {getLinks('О нас')}
                </ul>
                <ul className="flex flex-col font-light leading-normal gap-2 text-center md:text-left">
                    <span className="text-lg font-semibold leading-7">Услуги</span>
                    {getLinks('Услуги')}
                </ul>
            </div>
            <div className="container">
                <div className="text-center leading-[115%] text-sm font-light">
                    <p className="text-secondary">© {new Date().getFullYear()} Beautymyway. Все права защищены!</p>
                </div>
            </div>
        </footer>
    )
}
