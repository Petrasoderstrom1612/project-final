import React from "react";
import MapLocation from "./MapLocation"; //the functional main component
import { InnerWrapper, StyledSubHeading } from "styles/GlobalStyles"
import { Headings } from "components/Headings/Headings";

const LocationStructure = () => {
  return (
    <InnerWrapper>
      <Headings subheading="Save the date" heading="Celebrate love with us" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud.</p>
      <StyledSubHeading>Date via props</StyledSubHeading>
      <StyledSubHeading>Location via props</StyledSubHeading>
      <MapLocation /> {/* the key player here */}
    </InnerWrapper>
  )
}

export default LocationStructure;

