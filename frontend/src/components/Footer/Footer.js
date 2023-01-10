import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { StyledHeading, StyledSubHeading, StyledButton } from "styles/GlobalStyles"


export const Footer = ({ subheading, heading, footerButton }) => {
    return (
        <StyledFooter>
            {subheading && <StyledSubHeading>{subheading}</StyledSubHeading>}
            {heading && <StyledHeading>{heading}</StyledHeading>}
            {footerButton && <Link to="/weddingform/guestpassword/:guestpassword/rsvp"><StyledButton type="button">{footerButton}</StyledButton></Link>}
        </StyledFooter>
    )
}

export const StyledFooter = styled.footer`
background: var(--color-beige);
padding: 0 2em;
margin: 0;
width: 100vw;
min-height: 40vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
@media (min-width: 667px) and (max-width: 1024px) {
    min-height: 25vh;
}
@media (min-width: 1024px) {
    min-height: 25vh;
}
& a {
    text-decoration: none;
}
`

/*  <StyledFooter>
        <StyledSubHeading>Subheading</StyledSubHeading>
        <StyledHeading>Please, take a moment and respond to our invitation</StyledHeading>
        <Link to="/weddingform/guestpassword/:guestpassword/rsvp"><StyledButton type="button">RSVP</StyledButton></Link>}
    </StyledFooter>
*/