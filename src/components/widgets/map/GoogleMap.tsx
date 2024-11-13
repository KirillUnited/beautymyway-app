'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { mapConfig } from '@/config/map';

export const GoogleMapComponent = () => {
    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
        >
            <GoogleMap
                mapContainerStyle={mapConfig.containerStyle}
                center={mapConfig.center}
                zoom={mapConfig.zoom}
            >
                <Marker position={mapConfig.center} />
            </GoogleMap>
        </LoadScript>
    );
};
