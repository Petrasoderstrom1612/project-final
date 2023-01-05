import React from "react";
import styled from "styled-components/macro";
import { useNavigate, NavLink } from "react-router-dom";
import { OuterWrapper, InnerWrapper, StyledCatchPhrase, StyledHeading, StyledSubHeading, StyledButton } from "components/GlobalStyles"


const Footer = () => {
    return (
        <OuterWrapper>
            <StyledFooter>
                <StyledSubHeading>Subheading</StyledSubHeading>
                <StyledHeading>Please, take a moment and respond to our invitation.</StyledHeading>
                <StyledButton type="button" to="/RSVP">RSVP</StyledButton>
            </StyledFooter>
        </OuterWrapper>
    )
}

export default Footer

export const StyledFooter = styled(InnerWrapper)`
background: var(--color-beige);
padding: 2vh;
width: 95vw;
`