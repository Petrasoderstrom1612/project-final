import React from "react";
import styled from "styled-components";




const PageIntro = () => {
return( <StyledIntro><div className="intro-div">
    <StyledSubHeading><h3>some subheading</h3></StyledSubHeading>
    <StyledHeading><h2>Welcome</h2></StyledHeading>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit felis sapien, ac suscipit velit ornare id. Aliquam vulputate vel metus quis condimentum. Vivamus bibendum orci eget nisi pulvinar iaculis. Maecenas non eros ut erat dictum dapibus. Morbi quis elit libero. Fusce id quam vel orci rhoncus auctor. Suspendisse ac metus tortor. Sed scelerisque velit sed ultricies maximus. Morbi nisi elit, scelerisque sed leo vitae, rhoncus pellentesque elit. Quisque turpis nibh, pulvinar ac nisi vitae, fermentum finibus felis. Quisque id eros eu augue imperdiet imperdiet sed sit amet libero. In in luctus purus. Curabitur tincidunt, elit a porta blandit, orci.</p>
</div>
</StyledIntro>

)}

export default PageIntro;

export const StyledIntro = styled.div`
    border: solid 1px grey;
    width: 95vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vw;
`

export const StyledHeading = styled.h2`
font-family: 'Cormorant Garamond', serif;
color: var(--color-darkBlack);
line-height: 4em;
font-size: 1em;
font-weight: 400;
text-align: center;
margin-top: 0;
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