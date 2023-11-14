import React, { FunctionComponent } from 'react';

const SectionLayout = ({
    children,
    title }:
    {
        children: React.ReactNode,
        title: string
    }): React.JSX.Element => {
    return (
        <section className='pb-4'>
            <div className='container'>
                <div className='section-heading'>
                    <h2 className='section-title'>{title}</h2>
                </div>
                {children}
            </div>
        </section>
    )
};

export const withSectionLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>, title: string) => {
    return function withSectionLayoutComponent(props: T): React.JSX.Element {
        return (
            <SectionLayout title={title}>
                <Component {...props} />
            </SectionLayout>
        )
    }
}
