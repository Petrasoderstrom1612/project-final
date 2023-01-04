import React from "react";
import GoogleMapReact from 'google-map-react';
import Header from "./Header";

const MapMarker = ({ text }) => <div>{text}</div>;

export default function MapLocation(){
  const defaultProps = {
    center: { //here will be the PROPS from the wedding couple
      lat: 59.327451,
      lng: 18.054346
    },
    zoom: 17 //the zoom needs to be included so that the map works, the number can be adjusted 
  };

  return (
    // Important! Always set the container height explicitly
    <>
    <Header />
      <h2>The venue</h2>
      <div style={{ height: '50vh', width: '50vw' }}> //CSS to be moved
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB8HH4BIwAaN0DV9Dol5AxvyMGfSp4L0Vw" }} //my google maps key
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <MapMarker  //here will be the PROPS from the wedding couple
            lat={59.327451}
            lng={18.054346}
            text="🤍" />
        </GoogleMapReact>
      </div></>
  );
}

