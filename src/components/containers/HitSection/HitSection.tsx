import React from 'react';
import ImageSectionLayout from '../ImageSectionLayout';
import image from '../../../../public/images/hit.png';
import styles from './HitSection.module.scss';
import Button from '@/components/Button/Button';

export default function HitSection() {
    return (
        <ImageSectionLayout
            image={image}
            title='Процедура месяца'
            description='Фракционное омоложение Frax'
            className={styles.wrapper}
        >
            <p>
                Одним из наиболее инновационных методов возвращения молодости
                и борьбы с возрастными изменениями является фототермолиз по
                технологии FRAX 1550. Всего несколько сеансов помогут эффективно
                избавиться от различных эстетических дефектов и омолодить кожу
                без особых усилий и затрат времени.
            </p>
            <p>
                Процедуры проводятся как на все лицо, шею, декольте, так и с
                акцентом на отдельные зоны: веки, губы, подбородок, мочки ушей. В
                результате кожа свежая, гладкая, подтянутая и сияющая здоровьем.
                Кроме того, аппарат позволяет регулировать площадь покрытия,
                работая при этом без риска рубцевания и ожогов.
            </p>
            <Button variant='primary' className='self-start mt-auto'>Детальнее о процедуре</Button>
        </ImageSectionLayout>
    )
}
