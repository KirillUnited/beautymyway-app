import React from 'react';
import TestimonialCarousel from '@/components/Testimonial/TestimonialCarousel';


export default function TestimonalsSection(): React.JSX.Element {

    return (
        <section id='testimonials'>
            <div className="container">
                <div className='section-heading'>
                    <h2 className='section-title'>Отзывы</h2>
                </div>
                <TestimonialCarousel/>
            </div>
        </section>
    )
}