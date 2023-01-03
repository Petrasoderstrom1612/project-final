import React from "react";

const MapMarker = ({ text }) => <div>{text}</div>;

const MapLocation = () => {
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
      <h2>The venue</h2>
      <div style={{ height: '60vh', width: '60%' }}>
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

export default MapLocation;