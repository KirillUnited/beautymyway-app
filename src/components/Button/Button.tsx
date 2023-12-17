import React from 'react';
import styles from './button.module.scss';
import { ButtonLinkProps, ButtonProps } from './Button.props';
import cn from 'classnames';
import Link from 'next/link';

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

export function ButtonLink({ variant, children, className, ...props }: ButtonLinkProps): React.JSX.Element {
    return (
        <Link className={cn(styles.default,
            className,
            {
                [styles.primary]: variant === 'primary',
                [styles.transparent]: variant === 'transparent'
            }
        )}
        {...props}
        >
            {children}
        </Link>
    )
} 