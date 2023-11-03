import React from 'react';
import ImageSectionLayout from '../ImageSectionLayout';
import Image from 'next/image';
import styles from './AboutSection.module.scss';

export default function AboutSection() {
    return (
        <ImageSectionLayout
            image={`about.png`}
            className={styles.wrapper}
        >
            <Image
                src={`/images/logo.svg`}
                width={262}
                height={61}
                alt='Артур Сугако теперь и в Барселоне!'
            />
            <div className="text-xl font-extralight italic p-3 text-center border border-primary my-4">
                Мы получаем вдохновение от красоты каждого клиента,<span className="font-normal"> который обращается к нам!</span>
            </div>
            <p>И мы <span className="font-semibold leading-none">ежедневно помогаем</span> вам найти и подчеркнуть естественность и гармонию через наш накопленный опыт, лучшие методики и препараты.Обучение у доктора медицины, которому <span className="font-semibold leading-none">доверяют голливудские звезды</span>, ведущего мирового специалиста по лазерным технологиям <span className="font-semibold leading-none">Саймона Ориана (США)</span>, обмен опытом в клинике знаменитого хирурга и дерматолога <span className="font-semibold leading-none">Джейсона Эмера (США)</span>, сотрудничество с ведущим пластическим хирургом <span className="font-semibold leading-none">Ростиславом Валихновским (Украина)</span>, стажировка в ведущих клиниках США, Италия, Великобритании и Израиле - все это позволяет нам <span className="font-semibold leading-none">первыми в Украине</span> внедрять передовые методики и протоколы лечения.</p>
        </ImageSectionLayout>
    )
}
