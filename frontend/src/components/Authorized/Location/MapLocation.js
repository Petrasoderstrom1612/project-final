import React from 'react';
import styled from "styled-components/macro";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = { //CSS can be moved
  width: '80vw',
  height: '50vh',
};


const center = {
  lat: 59.327451,
  lng: 18.054346
};

const MapLocation= () => {
  return (
    <MapStyler>
    <LoadScript
      googleMapsApiKey="AIzaSyB8HH4BIwAaN0DV9Dol5AxvyMGfSp4L0Vw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
      <Marker position={{ lat: 59.327451, lng: 18.054346}} />

      </GoogleMap>
    </LoadScript>
    </MapStyler>
  )
}

export default React.memo(MapLocation)

export const MapStyler = styled.div`
filter: grayscale(100%) brightness(90%) contrast(1);
width: '400px';
height: '400px';
`