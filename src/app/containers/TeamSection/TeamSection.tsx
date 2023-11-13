import TeamGrid from '@/components/Team/TeamGrid';
import TeamSlider from '@/components/Team/TeamSlider';
import React from 'react';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function TeamSection(): React.JSX.Element {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <section className='pb-4'>
            <div className='container'>
                <div className='section-heading'>
                    <h2 className='section-title'>Команда клиники</h2>
                </div>
                {
                    mobile ? <TeamSlider /> : <TeamGrid />
                }

            </div>
        </section>
    )
}
