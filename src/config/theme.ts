'use client'
import { createTheme, mergeMantineTheme, DEFAULT_THEME } from '@mantine/core';

const themeOverride = createTheme({
    colors: {
        'primary': [
            "#f5f5f5",
            "#e7e7e7",
            "#cdcdcd",
            "#b2b2b2",
            "#9a9a9a",
            "#8b8b8b",
            "#848484",
            "#717171",
            "#656565",
            "#575757"
        ],
    }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);