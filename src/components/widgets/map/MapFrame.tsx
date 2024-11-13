import React from 'react';

interface Props extends React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
    containerStyle: any
}

export default function MapFrame({ containerStyle }: Props) {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.837311998762!2d-0.3582591!3d39.473003899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6049d8284b7597%3A0xa88e64594982a1f!2sCl%C3%ADnica%20My%20Way!5e0!3m2!1sru!2sby!4v1731516920510!5m2!1sru!2sby"
            {...containerStyle}
            style={{ "border": "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    )
}
