import React from "react";
import { Footer } from "components/Reusable/Footer/Footer";
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";
import Header from "components/Authorized/HeaderNav/Header";
import { Headings } from "components/Reusable/Headings/Headings";

const Toastmasters = () => {
    return (
        <OuterWrapper>
            <Header />
            <InnerWrapper>
                <Headings subheading="Meet your toastmasters" heading="Name 1 & Name 2" />
                <p>Today PROPS and PROPS are getting married</p>
            </InnerWrapper>
            <Footer subheading="Blissful beginnings" heading="Please, take a moment and respond to our invitation" footerButton="RSVP" />
        </OuterWrapper>
    )
};

export default Toastmasters;

