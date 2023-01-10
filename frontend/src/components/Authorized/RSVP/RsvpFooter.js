import React from "react";
import { StyledHeading, StyledSubHeading } from "styles/GlobalStyles"
import { StyledFooter } from "components/Footer/Footer";


const RsvpFooter = () => {
    return (
        <StyledFooter>
            <StyledSubHeading>Hope to see you</StyledSubHeading>
            <StyledHeading>Thank you for responding!</StyledHeading>
        </StyledFooter>
    )
}

export default RsvpFooter
