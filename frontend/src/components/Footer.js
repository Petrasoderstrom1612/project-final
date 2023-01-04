import React from "react";
import styled from "styled-components/macro";
import { useNavigate, NavLink } from "react-router-dom";
import { OuterWrapper, InnerWrapper, StyledCatchPhrase, StyledHeading, StyledSubHeading, StyledButton } from "components/GlobalStyles"


const Footer = () => {
    return (
        <OuterWrapper>
            <StyledFooter>
                <h5>LINE WILL BE OPEN UNTIL SEPTEMBER 1ST</h5>
                <h2>Please, take a moment and respond to our invitation.</h2>
                <StyledButton type="button" to="/RSVP">RSVP</StyledButton>
            </StyledFooter>
        </OuterWrapper>
    )
}

export default Footer

export const StyledFooter = styled(InnerWrapper)`
background: var(--color-beige);
margin: 0;
`