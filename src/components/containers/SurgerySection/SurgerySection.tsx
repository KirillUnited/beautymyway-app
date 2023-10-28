import React from 'react';
import ImageSectionLayout from '../ImageSectionLayout';
import image from '../../../../public/images/surgery.png';
import styles from './SurgerySection.module.scss';

export default function SurgerySection() {
    return (
        <ImageSectionLayout
            image={image}
            title='COSMETIC SURGERY CLINIC'
            className={styles.wrapper}
        >
            <p>
                <span className="font-bold">Пластическая хирургия </span>– самый эффективный способ достичь омолаживающего эффекта. Но сегодня существуют методики, когда пластический хирург и врач-косметолог могут работать одновременно.
            </p>
            <p>
                Современная косметология, аппаратные методы лечения и восстановления кожи в нашей клинике сочетают новейшую косметологию и медицину. <span className="font-bold">Союз пластики и косметологии </span>– одно из самых перспективных антиэйдж-направлений.
            </p>
            <p>
                Изучать и внедрять новые тренды, которые задают специалисты США и других стран. Важно принимать опыт всемирно известных докторов и, расширяя знания и кругозор, генерировать свои идеи.
            </p>
            <p>
                В <span className="font-bold">COSMETIС SURGERY CLINIC</span> нам под силу решение множества медицинских, эстетических и косметологических проблем тела и лица человека. Мы совместили работу косметологов и хирургов!
            </p>
            <p>
                <span className="font-bold">Лучшую команду докторов,</span> самые современные подходы к лечению и<br />впечатляющую аппаратную базу – мы соединили все это для вас в нашей клинике <span className="font-bold">COSMETIС SURGERY CLINIC.</span>
            </p>
            <p className="font-bold">Добро пожаловать!</p>
        </ImageSectionLayout>
    )
}
