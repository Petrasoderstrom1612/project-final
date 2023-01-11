import React from "react";
import Counter from "components/Authorized/Counter";
import { Footer } from "components/Reusable/Footer/Footer";
import Header from "components/Authorized/HeaderNav/Header";
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";

const AuthorizedMain = () => {
    return (
        <OuterWrapper>
            <Header />
            <InnerWrapper>
                <Counter />
            </InnerWrapper>
            <Footer subheading="Subheading" heading="Please, take a moment and respond to our invitation" footerButton="RSVP" />
        </OuterWrapper >
    )
};

export default AuthorizedMain;
