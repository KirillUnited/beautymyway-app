import { CONTACTS } from '@/data'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Socials() {
    return (
        <ul className="socials flex justify-center items-center gap-4">
            {
                Object.entries(CONTACTS.socials).map(([keys, values], index) => {
                    return (
                        <li key={index}>
                            {
                                keys === 'instagram'
                                &&
                                <a href={values} target='_blank' className={`flex gap-4 items-center`}>
                                    <FontAwesomeIcon icon={faInstagram} className='w-5 h-5' />
                                </a>
                            }
                            {
                                keys === 'telegram'
                                &&
                                <a href={values} target='_blank' className={`flex gap-4 items-center`}>
                                    <FontAwesomeIcon icon={faTelegram} className='w-5 h-5' />
                                </a>
                            }
                            {
                                keys === 'whatsapp'
                                &&
                                <a href={values} target='_blank' className={`flex gap-4 items-center`}>
                                    <FontAwesomeIcon icon={faWhatsapp} className='w-5 h-5' />
                                </a>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}
