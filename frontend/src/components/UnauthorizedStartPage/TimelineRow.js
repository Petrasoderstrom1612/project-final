import React from "react";
import styled from "styled-components";
import TimelineLine from "./TimelineLine";
import { StyledHeading } from "styles/GlobalStyles";

export const TimeLineRowLeft = (props) => {
    return (
        <div className="timeline-outer-div">
            <div className="timeline-inner-div">
                <div className="timeline-content-div"><img src={props.image} className="timeline-image" /></div>
                <TimelineLine />
                <div className="timeline-content-div">{props.contentText}</div>
            </div>
        </div>
    )
};

export const TimeLineRowRight = (props) => {
    return (
        <div className="timeline-outer-div">
            <div className="timeline-inner-div">
                <div className="timeline-content-div">{props.contentText}</div>
                <TimelineLine />
                <div className="timeline-content-div"><img src={props.image} className="timeline-image" /></div>
            </div>
        </div>
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
