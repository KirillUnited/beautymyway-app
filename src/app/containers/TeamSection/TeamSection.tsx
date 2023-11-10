import TeamGrid from '@/components/Team/TeamGrid';
import React from 'react';

export default function TeamSection(): React.JSX.Element {
    return (
        <section className='pb-4'>
            <div className='container'>
                <div className='section-heading'>
                    <h2 className='section-title'>Команда клиники</h2>
                </div>
                <TeamGrid />
            </div>
        </section>
    )
}
