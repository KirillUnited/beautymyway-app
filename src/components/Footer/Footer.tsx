import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import Link from 'next/link';
import Contacts from '@/components/Contacts/Contacts';

export default function Footer() {
    return (
        <footer className="flex flex-col gap-10 bg-foregroundDark py-6">
            <div className="container flex flex-wrap flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
                <div className='flex flex-col items-center md:items-start gap-6'>
                    <Link href={'/'} className={`logo`}>
                        <Image
                            src={`/images/logo.svg`}
                            width={140}
                            height={32}
                            alt='Артур Сугако теперь и в Барселоне!'
                        />
                    </Link>
                    <Contacts className='flex flex-col items-center md:items-start gap-2 text-center' tel={`+38 097 62 000 77`} address={'г. Киев, ул. Новоселицкая, 10'} time={'Пн – Вс: 09:00 – 21:00'}/>
                    <Contacts className='flex flex-col items-center md:items-start gap-2 text-center' tel={`+34 601 500 379`} address={'Barcelona, Carrer de Bertrand i Serra, 12'} time={'Пн – Сб: 10:00 – 20:00'}/>
                    <div className='flex flex-col md:self-start gap-2'>
                        <div className="socials flex justify-center items-center gap-4">
                            <a href='/'><FontAwesomeIcon icon={faYoutube} className='w-5 h-5' /></a>
                            <a href='/'><FontAwesomeIcon icon={faInstagram} className='w-5 h-5' /></a>
                            <a href='/'><FontAwesomeIcon icon={faFacebookF} className='w-5 h-5' /></a>
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
                    <span className="text-lg font-semibold leading-7">О клинике</span>
                    <li>
                        <Link href={'/'}>Цены</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Видеогалерея</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Отзывы</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Новости</Link>
                    </li>
                </ul>
                <ul className="flex flex-col font-light leading-normal gap-2 text-center md:text-left">
                    <span className="text-lg font-semibold leading-7">Услуги</span>
                    <li>
                        <Link href={'/'}>Лазерная косметология</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Аппаратная косметология</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Инъекционная косметология</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Контурная пластика</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Уходовая косметология</Link>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="text-center leading-[115%] text-sm font-light">
                    <h5 className="text-primary underline">Публичный договор </h5>
                    <p className="text-secondary">© {new Date().getFullYear()} Dr. Dudikova. Все права защищены! Запрещено использование материалов сайта без согласия авторов и обратной ссылки. Использование любых материалов, размещенных на сайте, разрешается ссылкой на https://dr-dudikova.clinic/. При копировании материалов со страницы сайта обязательная прямая, открытая для поисковых систем, гиперссылка. Ссылка должна быть размещена независимо от полного или частичного использования материалов. Гиперссылка (для интернет – изданий) – должна быть размещена в подзаголовке или в первом абзаце материала. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply .</p>
                </div>
            </div>
        </footer>
    )
}
