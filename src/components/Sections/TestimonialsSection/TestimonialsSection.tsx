import React from 'react';
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import { ClientTestimonialCarousel } from '@/components/Testimonial';


export default function TestimonalsSection(): React.JSX.Element {
    const messages = useMessages()
    const t = useTranslations('TESTIMONIALS');

    return (
        <section id='testimonials'>
            <div className="container">
                <div className='section-heading'>
                    <h2 className='section-title'>{t('title')}</h2>
                </div>
                <NextIntlClientProvider
                    messages={messages}
                >
                    <ClientTestimonialCarousel />
                </NextIntlClientProvider>
            </div>
        </section>
    )
}