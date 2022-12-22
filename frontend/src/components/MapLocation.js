import React from 'react'
import { GoogleMap, LoadScript/* , Marker */ } from '@react-google-maps/api';

const containerStyle = { //CSS can be moved
  width: '400px',
  height: '400px'
};

const center = {
  lat: 59.327451,
  lng: 18.054346
};

function MapLocation() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB8HH4BIwAaN0DV9Dol5AxvyMGfSp4L0Vw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
        { /* Child components, such as markers, info windows, etc. */ }
      {/* <Marker position={{ lat: 59.327451, lng: 18.054346}} /> */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapLocation)