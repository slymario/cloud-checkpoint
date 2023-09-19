import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';

const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Site</h2>

        <div className='google-map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAuFhNj2AH1RXyZ9AG9Vw4gVc0hPvIYBwg' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
            <LocationPin
                lat={location.la}
                lng={location.lng}
                text={location.address}
            />
            </GoogleMapReact>
        </div>

    </div>
)

export default Map;