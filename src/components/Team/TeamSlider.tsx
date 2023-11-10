import React from 'react';
import styles from './Team.module.scss';
import cn from 'classnames';

interface TeamGrid extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    image: string,
    title: string
}

export default function TeamGrid({ image, title, className, ...props }: TeamGrid): React.JSX.Element {
    return (
        <div className={
            cn(styles.root, className)
        }>
            TeamGrid
        </div>
    )
}