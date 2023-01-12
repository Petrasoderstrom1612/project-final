import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { InnerWrapper, StyledSubHeading } from "styles/GlobalStyles"

import MapLocation from "./MapLocation";
import { Headings } from "components/Reusable/Headings/Headings";

// TODO: Add icons



const LocationStructure = () => {

  const weddingdata = useSelector((store) => store.weddingdata)
  console.log("Data", weddingdata)

  return (
    <InnerWrapper>
      <Headings subheading="Magical moments" heading="We are in love with this place" />
      <StyledLocationContainer>
        <StyledLocationInfo>
          <StyledSubHeading>Address via props {weddingdata.firstperson}</StyledSubHeading>
          <StyledSubHeading>Phonenumber via props</StyledSubHeading>
          <StyledSubHeading>Email via props</StyledSubHeading>
        </StyledLocationInfo>
        <MapLocation />
      </StyledLocationContainer>
    </InnerWrapper>
  )
}

export default LocationStructure;

const StyledLocationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
column-gap: 3em;

@media (min-width: 667px) {
flex-direction: row;
}
`

const StyledLocationInfo = styled.div`
margin: 1em 0;

@media (min-width: 1024px) {
  width: 20vw; 
}
`