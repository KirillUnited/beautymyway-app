import { useTranslations } from 'next-intl';
import React, { FunctionComponent } from 'react';
import cn from "classnames";

interface ISectionLayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    children: React.ReactNode,
    title?: string,
    description?: string,
}

export const SectionLayout = (
    {
        children,
        id,
        title,
        description,
        className,
    }: ISectionLayoutProps): React.JSX.Element => {
    const t = useTranslations(id);

    return (
        <section id={id} className={cn('pb-4', className)}>
            <div className='container'>
                {
                    (title || description)
                    &&
                    <div className='section-heading'>
                        {title && <h2 className='section-title'>{title}</h2>}
                        {description && <p className='section-description'>{description}</p>}
                    </div>
                }
                {children}
            </div>
        </section>
    )
};

export const withSectionLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>, { ...sectionProps }) => {
    return function withSectionLayoutComponent(props: T): React.JSX.Element {
        return (
            <SectionLayout {...sectionProps}>
                <Component {...props} />
            </SectionLayout>
        )
    }
}
