import React from "react";
import styled from "styled-components";
import TimelineLine from "./TimelineLine";




export const TimeLineRowLeft = (props) => {
    return (
        <div className="timeline-outer-div">
            <div className="timeline-inner-div">
                <div className="timeline-content-div"><img src={props.image} className="timeline-image" />
                </div><TimelineLine />
                <div className="timeline-content-div"><p>{props.contentText}</p></div></div></div>
    )
};


export const TimeLineRowRight = (props) => {
    return (
        <div className="timeline-outer-div">
            <div className="timeline-inner-div">
                <div className="timeline-content-div"><p>{props.contentText}</p>
                </div><TimelineLine />
                <div className="timeline-content-div"><img src={props.image} className="timeline-image" /></div></div></div>
    )
};


export const ContentText1 = () => {
    return (<><h2>What is Blissful Beginnings?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. Donec varius dui ac elit pulvinar commodo. Praesent volutpat ornare.</p>  </>)
};

export const ContentText2 = () => {
    return (<><h2>What We Offer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. </p>  </>)
};

export const ContentText3 = () => {
    return (<><h2>How to Sign Up</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. </p>     </>)
};



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

