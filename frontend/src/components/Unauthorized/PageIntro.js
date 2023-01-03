import React from "react";
import styled from "styled-components";
import infinity from "assets/icons/icon_infinity.svg";
import { TimeLineRowLeft , TimeLineRowRight, ContentText1, ContentText2, ContentText3 } from "./TimelineRow";
import flowers from "assets/images/timeline_flowers.jpg";
import cheers from "assets/images/timeline_cheers.jpg";
import flowersandring from "assets/images/timeline_flowersandring.jpg";

const PageIntro = (image, contentText) => {
return( <><StyledDiv><div className="intro-div">
    <StyledSubHeading><h3>some subheading</h3></StyledSubHeading>
    <StyledHeading><h2>Welcome</h2></StyledHeading>
    <div className="img-div"><img src={infinity} className="infinity"/></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit felis sapien, ac suscipit velit ornare id. Aliquam vulputate vel metus quis condimentum. Vivamus bibendum orci eget nisi pulvinar iaculis. Maecenas non eros ut erat dictum dapibus. Morbi quis elit libero. Fusce id quam vel orci rhoncus auctor. Suspendisse ac metus tortor. Sed scelerisque velit sed ultricies maximus. Morbi nisi elit, scelerisque sed leo vitae, rhoncus pellentesque elit. Quisque turpis nibh, pulvinar ac nisi vitae, fermentum finibus felis. Quisque id eros eu augue imperdiet imperdiet sed sit amet libero. In in luctus purus. Curabitur tincidunt, elit a porta blandit, orci.</p>
</div>
<div><TimeLineRowLeft image = {flowers} contentText = {<ContentText1 />} />
<TimeLineRowRight image = {cheers} contentText = {<ContentText2 />} />
<TimeLineRowLeft image= {flowersandring} contentText = {<ContentText3 />}/>
</div>
</StyledDiv>

</>
)}

export default PageIntro;

export const StyledDiv = styled.div`
    border: solid 1px grey;
    width: 95vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3vh 10vw 2vh 10vw;
    flex-direction: column;
    gap: 80px;
`

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
