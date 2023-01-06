import React from "react";
import styled from "styled-components";
import infinity from "assets/icons/icon_infinity.svg";
import { TimeLineRowLeft, TimeLineRowRight, ContentText1, ContentText2, ContentText3 } from "./TimelineRow";
import flowers from "assets/images/timeline_flowers.jpg";
import cheers from "assets/images/timeline_cheers.jpg";
import flowersandring from "assets/images/timeline_flowersandring.jpg";
import { StyledHeading, StyledSubHeading, InnerWrapper } from "styles/GlobalStyles";


const PageIntro = (image, contentText) => {
    return (
        <InnerWrapper><div className="intro-div">
            <StyledSubHeading>some subheading</StyledSubHeading>
            <StyledHeading>Welcome</StyledHeading>
            <div className="img-div"><img src={infinity} className="infinity" /></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit felis sapien, ac suscipit velit ornare id. Aliquam vulputate vel metus quis condimentum. Vivamus bibendum orci eget nisi pulvinar iaculis. Maecenas non eros ut erat dictum dapibus. Morbi quis elit libero. Fusce id quam vel orci rhoncus auctor. Suspendisse ac metus tortor. Sed scelerisque velit sed ultricies maximus. Morbi nisi elit, scelerisque sed leo vitae, rhoncus pellentesque elit. Quisque turpis nibh, pulvinar ac nisi vitae, fermentum finibus felis. Quisque id eros eu augue imperdiet imperdiet sed sit amet libero. In in luctus purus. Curabitur tincidunt, elit a porta blandit, orci.</p>
        </div>
            <div>
                <TimeLineRowLeft image={flowers} contentText={<ContentText1 />} />
                <TimeLineRowRight image={cheers} contentText={<ContentText2 />} />
                <TimeLineRowLeft image={flowersandring} contentText={<ContentText3 />} />
            </div>
        </InnerWrapper>
    )
}

export default PageIntro;

