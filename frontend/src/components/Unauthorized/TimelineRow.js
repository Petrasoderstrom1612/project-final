import React from "react";
import styled from "styled-components";
import TimelineLine from "./TimelineLine";




const TimeLineRow = () => {
return( 
<div className="timeline-outer-div">
    <div className="timeline-inner-div">
     <div className="timeline-content-div">This is the div for the content 
</div><TimelineLine />
<div className="timeline-content-div">This is also content</div></div></div>
)}

export default TimeLineRow;



export const StyledHeading = styled.h2`
font-family: 'Cormorant Garamond', serif;
color: var(--color-darkBlack);
line-height: 4em;
font-size: 1em;
font-weight: 400;
text-align: center;
margin: 0px;
padding: 0px;
/* @media (min-width: 667px) {
    font-size: 1.9em;
} */
`

export const StyledSubHeading = styled.h3`
  font-family: 'Lato', sans-serif;
  color: var(--color-softBlack);
  font-size: .5em;
  line-height: 1em;
  letter-spacing: .6em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: -1vh;
  /* @media (min-width: 667px) and (max-width: 1024px) {
  font-size: 1.8em;
  }
  @media (min-width: 1024px) {
  font-size: 1.6em;
  } */


`

