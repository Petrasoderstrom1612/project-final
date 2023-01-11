import React from "react";
import styled from "styled-components/macro";
import Counter from "components/Authorized/Counter";
import { Footer } from "components/Reusable/Footer/Footer";
import Header from "components/Authorized/HeaderNav/Header";
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";
import { Headings } from "components/Reusable/Headings/Headings";
import cheers from "assets/images/timeline_cheers.jpg";

const AuthorizedMain = () => {
    return (
        <OuterWrapper>
            <Header />
            <InnerWrapper>
                <Headings subheading="Save the date" heading="Celebrate love with us" />
                <Counter />
                <StyledImg src={cheers} />
            </InnerWrapper>
            <Footer subheading="Blissful beginnings" heading="Please, take a moment and respond to our invitation" footerButton="RSVP" />
        </OuterWrapper >
    )
};

export default AuthorizedMain;

const StyledImg = styled.img`
width: 40vw;
height: 40vh;
opacity: 0.8;
margin: 1.8em 0;
`