import React, {Fragment, JSX} from 'react'
import Link from "next/link";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Breadcrumbs({
                                        crumbs = [],
                                        hideCurrent,
                                        currentPage,
                                    }: Partial<{
    crumbs: any[]
    hideCurrent?: boolean
    currentPage: { title: string, metadata?: { title: string } }
}>): JSX.Element {
    return (
        <nav className="py-4 text-sm">
            <ol
                className="flex flex-wrap items-center gap-x-2 gap-y-1"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
            >
                <Crumb link={{label: 'Home', internal: {slug: {current: '/'}}}} position={1} hidden={hideCurrent}>
                    <FontAwesomeIcon icon={faHome} className='w-4 h-4'/>
                </Crumb>
                <li className="text-primary" role="presentation">
                    /
                </li>

                {/*{crumbs?.map((crumb, key) => {*/}
                {/*        return (*/}
                {/*            <Fragment key={key}>*/}
                {/*                <Crumb link={crumb} position={key + 1} />*/}

                {/*                {(key < crumbs.length - 1 || !hideCurrent) && (*/}
                {/*                    <li className="text-primary" role="presentation">*/}
                {/*                        /*/}
                {/*                    </li>*/}
                {/*                )}*/}
                {/*            </Fragment>*/}
                {/*        )*/}
                {/*    },*/}
                {/*)}*/}

                <Crumb position={(crumbs?.length || 0) + 1} hidden={hideCurrent}>
                    {currentPage?.title || currentPage?.metadata?.title}
                </Crumb>
            </ol>
        </nav>
    )
}

function Crumb({
                   link,
                   position,
                   children,
                   hidden,
               }: {
    link?: { label: string, internal?: { slug?: { current: string } }, external?: string }
    position: number
    hide?: boolean
} & React.ComponentProps<'li'>) {
    const content = (
        <>
			<span itemProp="name" hidden={hidden}>
				{
                    children || link?.label || link?.internal?.slug?.current || link?.external
                }
			</span>
            <meta itemProp="position" content={position.toString()}/>
        </>
    )

    return (
        <li
            className="line-clamp-1 text-gray-500"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
        >
            {link ? (
                <Link
                    className="hover:underline text-primary"
                    href={link?.internal?.slug?.current || link?.external || ''}
                    itemProp="item"
                >
                    {content}
                </Link>
            ) : (
                content
            )}
        </li>
    )
}
