'use client'
import TeamGrid from '@/components/Team/TeamGrid';
import TeamSlider from '@/components/Team/TeamSlider';
import React from 'react';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Team(): React.JSX.Element {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <>
            {
                mobile ? <TeamSlider /> : <TeamGrid />
            }
        </>
    )
};
