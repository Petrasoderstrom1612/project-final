import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

import Countdown from "components/Authorized/Countdown/Countdown";
import { Footer } from "components/Reusable/Footer/Footer";
import Header from "components/Authorized/HeaderNav/Header";
import { InnerWrapper, OuterWrapper, StyledHeading, StyledSubHeading } from "styles/GlobalStyles";
import { Headings } from "components/Reusable/Headings/Headings";
import cheers from "assets/images/timeline_cheers.jpg";


const AuthorizedMain = () => {

    const weddingdata = useSelector((store) => store.weddingdata)

    return (
        <OuterWrapper>
            <Header />
            <InnerWrapper>
                <Headings  tabIndex="0"  subheading="Save the date" heading="Celebrate love with us" />
                <StyledSubHeading  tabIndex="0">{weddingdata.date} {weddingdata.time}</StyledSubHeading>
                <StyledHeading  tabIndex="0">{weddingdata.firstperson} & {weddingdata.secondperson} are getting married!</StyledHeading>
                <Countdown/>
                <StyledImg src={cheers}  tabIndex="0" alt="wedding cheers"/>
            </InnerWrapper>
            <Footer tabIndex="0" subheading="Blissful beginnings" heading="Please, take a moment and respond to our invitation" footerButton="RSVP" />
        </OuterWrapper >
    )
};

export default AuthorizedMain;

const StyledImg = styled.img`
width: 70vw;
height: 100%;
opacity: 0.8;
margin: 1.8em 0;

@media (min-width: 1024px) {
width: 40vw;
}
`