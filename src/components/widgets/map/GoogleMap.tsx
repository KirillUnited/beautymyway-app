'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { mapConfig} from '@/config/map';
import { LoadingOverlay } from '@mantine/core';

export const GoogleMapComponent = () => {
    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
            loadingElement={<LoadingOverlay visible />}
        >
            <GoogleMap
                mapContainerStyle={mapConfig.containerStyle}
                center={mapConfig.center}
                zoom={10}
            >
                <Marker position={mapConfig.center} />
            </GoogleMap>
        </LoadScript>
    );
};
