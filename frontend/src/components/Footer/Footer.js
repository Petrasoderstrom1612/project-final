import React from "react";
import styled from "styled-components/macro";
import { InnerWrapper, StyledHeading, StyledSubHeading, StyledButton } from "styles/GlobalStyles"


const Footer = () => {
    return (
        <StyledFooter>
            <StyledSubHeading>Subheading</StyledSubHeading>
            <StyledHeading>Please, take a moment and respond to our invitation.</StyledHeading>
            <StyledButton type="button" to="/RSVP">RSVP</StyledButton>
        </StyledFooter>
    )
}

export default Footer

export const StyledFooter = styled(InnerWrapper)`
background: var(--color-beige);
width: 95vw;
padding: 2em;
`