import React from "react";
import styled from "styled-components/macro";
import MapLocation from "./MapLocation"; //the functional main component
import { OuterWrapper, InnerWrapper, StyledHeading, StyledSubHeading } from "components/GlobalStyles"
import { StyledDiv } from "components/Unauthorized/PageIntro";
import infinity from "assets/icons/icon_infinity.svg";



const LocationStructure = () => {
  return (
  <>
<OuterWrapper>
<InnerWrapper>
  <StyledDiv>
    <div >
      <StyledSubHeading>
        <h3>SAVE THE DATE</h3>
      </StyledSubHeading>
      <h2>Celebrate love with us</h2>
      <div className="img-div">
        <img src={infinity} className="infinity" />
      </div>
      <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud.</StyledP>
      <br/>
      <StyledStyledHeading>Date via props</StyledStyledHeading>
      <StyledStyledHeading>Location via props</StyledStyledHeading>
    </div>
    <div>
      <MapLocation /> {/* the key player here */}
    </div>
      <StyledP>Please be here on time.</StyledP>
  </StyledDiv>
</InnerWrapper>
</OuterWrapper>
  </>
  )
}


export default LocationStructure;

export const StyledStyledHeading = styled(StyledHeading)`
margin-top:2%;
font-size: 1.3em;
font-weight: 500;
line-height: 0.5em;
`
export const StyledP = styled.p`
display:flex;
justify-content: center;
text-align: center;
`