import React from "react";
import styled from "styled-components";
import TimelineLine from "./TimelineLine";
import { StyledHeading } from "styles/GlobalStyles";

export const TimeLineRowLeft = (props) => {
    return (
        <StyledTimelineOuter>
            <StyledTimelineInner>
                <StyledTimelineContent><StyledTimelineImg src={props.image} /></StyledTimelineContent>
                <TimelineLine />
                <StyledTimelineContent>{props.contentText}</StyledTimelineContent>
            </StyledTimelineInner>
        </StyledTimelineOuter>
    )
};

export const TimeLineRowRight = (props) => {
    return (
        <StyledTimelineOuter>
            <StyledTimelineInner>
                <StyledTimelineContent>{props.contentText}</StyledTimelineContent>
                <TimelineLine />
                <StyledTimelineContent><StyledTimelineImg src={props.image} /></StyledTimelineContent>
            </StyledTimelineInner>
        </StyledTimelineOuter>
    )
};

export const ContentText1 = () => {
    return (
        <div>
            <StyledHeading>What is Blissful Beginnings?</StyledHeading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. Donec varius dui ac elit pulvinar commodo. Praesent volutpat ornare.</p>
        </div>)
};

export const ContentText2 = () => {
    return (
        <div>
            <StyledHeading>What We Offer</StyledHeading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. </p>
        </div>)
};

export const ContentText3 = () => {
    return (
        <div>
            <StyledHeading>How to Sign Up</StyledHeading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. </p>
        </div>)
};

const StyledTimelineOuter = styled.div`
  width: 95vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: auto;
`

const StyledTimelineInner = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  min-height: 35vh;
`

const StyledTimelineContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  p {
      margin: 0 2vw 0 2vw;
  }
`

const StyledTimelineImg = styled.img`
  width: 28vw;
`