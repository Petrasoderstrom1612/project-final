import React from 'react';
import styled from 'styled-components/macro';
import infinity from "assets/icons/icon_infinity.svg";
import { StyledHeading, StyledSubHeading } from "styles/GlobalStyles"



const Headings = () => {
    return (
        <div>
            <StyledSubHeading>SAVE THE DATE</StyledSubHeading>
            <StyledHeading>Celebrate love with us</StyledHeading>
            <InfinityIcon>
                <StyledHeadingImg src={infinity} />
            </InfinityIcon>
        </div>
    )
}

export default Headings

export const InfinityIcon = styled.div`
width: 6vw;
margin-top: -20px;
margin-bottom: 10px;
`

export const StyledHeadingImg = styled.img`
display: flex;
justify-content: center;
`