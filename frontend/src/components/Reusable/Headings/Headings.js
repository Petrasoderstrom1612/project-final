import React from 'react'
import styled from 'styled-components/macro'
import { StyledHeading, StyledSubHeading } from "styles/GlobalStyles"
import infinity from "assets/icons/icon_infinity.svg";


export const Headings = ({ subheading, heading }) => {

    return (
        <StyledHeadings tabIndex={0}>
            {subheading && <StyledSubHeading>{subheading}</StyledSubHeading>}
            {heading && <StyledHeading>{heading}</StyledHeading>}
            <StyledInfinityImg src={infinity} alt="Infinity shaped icon" />
        </StyledHeadings>
    )
}

const StyledHeadings = styled.div`
display: flex;
flex-direction: column;
padding: 1.5em 0;
`

const StyledInfinityImg = styled.img`
display: flex;
align-self: center;
width: 25vw;

@media (min-width: 667px) {
 width: 15vw;   
}
@media (min-width: 1024px) {
 width: 10vw;   
}
`
