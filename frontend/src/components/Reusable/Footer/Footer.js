import React from "react";
import styled from "styled-components/macro";
import { Link, useParams } from "react-router-dom";
import { StyledHeading, StyledSubHeading, StyledButton } from "styles/GlobalStyles"


export const Footer = ({ subheading, heading, footerButton }) => {
    const { guestpassword } = useParams();
    return (
        <StyledFooter tabIndex="0">
            {subheading && <StyledSubHeading>{subheading}</StyledSubHeading>}
            {heading && <StyledHeading>{heading}</StyledHeading>}
            {footerButton && <Link to={`/wedding/rsvp/${guestpassword}`}><StyledButton type="button" tabIndex="0">{footerButton}</StyledButton></Link>}
        </StyledFooter>
    )
}

export const StyledFooter = styled.footer`
background: var(--color-beige);
padding: 0 2em;
margin: 1.5em 0 0 0;
width: 100vw;
height: 35vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
@media (min-width: 667px) and (max-width: 1024px) {
    max-height: 25vh;
}
@media (min-width: 1024px) {
    max-height: 20vh;
}
& a {
    text-decoration: none;
}
`