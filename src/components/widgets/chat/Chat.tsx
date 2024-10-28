import classNames from 'classnames';
import React from 'react';
import styles from './chat.module.scss';
import { CONTACTS } from '@/data';
import { SocialsItem } from '@/components/Socials/Socials';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function Chat(props: Props) {
    return (
        <div className={classNames(styles.root, props.className)}>
            <div className={classNames(styles.pulse)}></div>
            <SocialsItem item='whatsapp' value={CONTACTS.socials.whatsapp[0]} className={classNames(styles.cta)} />
        </div>
    )
}
