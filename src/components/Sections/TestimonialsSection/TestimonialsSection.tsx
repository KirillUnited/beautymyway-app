import React from 'react';
import TestimonialCarousel from '@/components/Testimonial/TestimonialCarousel';
import { useTranslations } from 'next-intl';


export default function TestimonalsSection(): React.JSX.Element {
    const t = useTranslations('TESTIMONIALS');

    return (
        <section id='testimonials'>
            <div className="container">
                <div className='section-heading'>
                    <h2 className='section-title'>{t('title')}</h2>
                </div>
                <TestimonialCarousel/>
            </div>
        </section>
    )
}