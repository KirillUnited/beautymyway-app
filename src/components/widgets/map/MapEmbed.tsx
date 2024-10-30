import React from 'react';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    locale: string
}

export const MapEmbedContainer = (props: Props) => {
    return (
        <div className={classNames('w-full bg-slate-300',
            props.className
        )}>
            {props.children}
        </div>
    )
}


export default function MapEmbed(props: Props) {
    return (
        <MapEmbedContainer {...props}>
            <GoogleMapsEmbed
                    apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
                    width="100%"
                    height={500}
                    mode="place"
                    q="Brooklyn+Bridge,New+York,NY"
                    language={props.locale}
                />
        </MapEmbedContainer>
    )
}
