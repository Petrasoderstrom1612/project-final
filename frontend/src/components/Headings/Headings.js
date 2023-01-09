import React from 'react'
import styled from 'styled-components/macro'
import { StyledHeading, StyledSubHeading } from "styles/GlobalStyles"
import infinity from "assets/icons/icon_infinity.svg";


const Headings = () => {

    return (
        <div>
            <StyledSubHeading>{subheading}</StyledSubHeading>
            <StyledHeading>{heading}</StyledHeading>
            <StyledInfinityContainer>
                <StyledInfinityImg src={infinity} />
            </StyledInfinityContainer>
        </div>
    )
}

export default Headings

const StyledInfinityContainer = styled.div`
width: 6vw;
margin-top: -20px;
margin-bottom: 10px;
`
const StyledInfinityImg = styled.img`
display: flex;
justify-content: center;
`