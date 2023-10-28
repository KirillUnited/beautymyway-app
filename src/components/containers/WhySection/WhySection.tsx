import React from 'react';
import styles from './WhySection.module.scss';

export default function WhySection(): React.JSX.Element {
    return (
        <section className={styles.root}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    Почему мы?
                </h2>
                <div className={styles.content}>
                    <p className={styles['content-item']}>15
                        <span className="text-lg font-light leading-7">Лет опыта</span>
                    </p>
                    <p className={styles['content-item']}>92,880
                        <span className="text-lg font-light leading-7">Проведенных процедур</span>
                    </p>
                    <p className={styles['content-item']}>30,960
                        <span className="text-lg font-light leading-7">Клиентов</span>
                    </p>
                </div>
            </div >
        </section >
    )
}
