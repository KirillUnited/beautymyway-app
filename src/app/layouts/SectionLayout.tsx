import React, { FunctionComponent } from 'react';

interface ISectionLayoutProps {
    children: React.ReactNode,
    title?: string,
    description?: string,
    id?: string
}

const SectionLayout = (
    {
        children,
        title,
        description,
        id
    }: ISectionLayoutProps): React.JSX.Element => {
    return (
        <section id={id} className='pb-4'>
            {
                (title || description)
                &&
                <div className='container'>
                    <div className='section-heading'>
                        {title && <h2 className='section-title'>{title}</h2>}
                        {description && <p className='section-description'>{description}</p>}
                    </div>
                </div>
            }
            <div className='container'>
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
