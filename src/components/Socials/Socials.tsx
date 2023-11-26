import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
interface ISocialsItemProps {
    item: string, value: any
}

const SocialsItem = ({ item, value }: ISocialsItemProps): React.JSX.Element => {
    switch (item) {
        case 'instagram':
            return (
                <a href={value} target='_blank' className={`flex gap-4 items-center`}>
                    <FontAwesomeIcon icon={faInstagram} className='w-5 h-5' />
                </a>
            )
        case 'telegram':
            return (
                <a href={value} target='_blank' className={`flex gap-4 items-center`}>
                    <FontAwesomeIcon icon={faTelegram} className='w-5 h-5' />
                </a>
            )
        case 'whatsapp':
            return (
                <a href={value} target='_blank' className={`flex gap-4 items-center`}>
                    <FontAwesomeIcon icon={faWhatsapp} className='w-5 h-5' />
                </a>
            )
        default:
            return <></>;
    };
};

export default function Socials({ items }: any) {
    return (
        <ul className="socials flex justify-center items-center gap-3 lg:gap-4">
            {
                Object.entries(items).map(([keys, values], index) => {
                    return (
                        <li key={index}>
                            {
                                <SocialsItem item={keys} value={values} />
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}
