import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { InnerWrapper, StyledSubHeading } from "styles/GlobalStyles"

import MapLocation from "./MapLocation";
import { Headings } from "components/Reusable/Headings/Headings";

const LocationStructure = () => {

  const weddingdata = useSelector((store) => store.weddingdata)

  return (
    <InnerWrapper>
      <Headings tabIndex="0" subheading="Magical moments" heading="We are in love with this place" />
      <StyledLocationContainer>
        <StyledLocationInfo>
          <FontAwesomeIcon tabIndex="0" icon={faLocationDot} /><StyledSubHeading tabIndex="0">{weddingdata.location}</StyledSubHeading>
          <FontAwesomeIcon tabIndex="0" icon={faPhone} /><StyledSubHeading tabIndex="0">{weddingdata.phonenumber}</StyledSubHeading>
          <FontAwesomeIcon tabIndex="0" icon={faEnvelope} /><StyledSubHeading tabIndex="0">{weddingdata.email}</StyledSubHeading>
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