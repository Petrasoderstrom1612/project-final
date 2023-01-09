import React from "react";
import MapLocation from "./MapLocation"; //the functional main component
import { InnerWrapper, StyledHeading, StyledSubHeading } from "styles/GlobalStyles"
import infinity from "assets/icons/icon_infinity.svg";



const LocationStructure = () => {
  return (
    <InnerWrapper>
      <StyledSubHeading>SAVE THE DATE</StyledSubHeading>
      <StyledHeading>Celebrate love with us</StyledHeading>
      <div className="img-div">
        <img src={infinity} className="infinity" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud.</p>
      <StyledSubHeading>Date via props</StyledSubHeading>
      <StyledSubHeading>Location via props</StyledSubHeading>
      <MapLocation /> {/* the key player here */}
    </InnerWrapper>
  )
}

export default LocationStructure;

