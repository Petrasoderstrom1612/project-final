import React from "react";
import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text }) => <div>{text}</div>;

export default function MapLocation(){
  const defaultProps = {
    center: {
      lat: 59.327451,
      lng: 18.054346
    },
    zoom: 17
  };

  return (
    // Important! Always set the container height explicitly
      // Important! Always set the container height explicitly
    <>
      <h2>The venue</h2>
      <div style={{ height: '60vh', width: '60%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB8HH4BIwAaN0DV9Dol5AxvyMGfSp4L0Vw" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <MapMarker
            lat={59.327451}
            lng={18.054346}
            text="🤍" />
        </GoogleMapReact>
      </div></>
  );
}