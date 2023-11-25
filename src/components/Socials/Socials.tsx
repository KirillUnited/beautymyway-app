import { CONTACTS } from '@/data'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Socials({items} : any) {
    const elements: any = {
        'instagram': (values: string) => {
            return (
                <a href={values} target='_blank' className={`flex gap-4 items-center`}>
                    <FontAwesomeIcon icon={faInstagram} className='w-5 h-5' />
                </a>
            )
        },
        'telegram': (values: string) => {
            return (
                <a href={values} target='_blank' className={`flex gap-4 items-center`}>
                    <FontAwesomeIcon icon={faTelegram} className='w-5 h-5' />
                </a>
            )
        },
        'whatsapp': (values: string) => {
            return (
                <a href={values} target='_blank' className={`flex gap-4 items-center`}>
                    <FontAwesomeIcon icon={faWhatsapp} className='w-5 h-5' />
                </a>
            )
        }
    };

    return (
        <ul className="socials flex justify-center items-center gap-3 lg:gap-4">
            {
                Object.entries(items).map(([keys, values], index) => {
                    return (
                        <li key={index}>
                            {
                                elements[keys](values)
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}
