import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export default function Button({ variant, children, className, ...props }: ButtonProps): React.JSX.Element {
    return (
        <button type='button' className={cn(styles.default,
            className,
            {
                [styles.primary]: variant === 'primary',
                [styles.transparent]: variant === 'transparent'
            }
        )}
        {...props}
        >
            {children}
        </button>
    )
}
