import React from "react";
import Footer from "components/Footer/Footer";
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";
import Header from "components/HeaderNav/Header";
import { Headings } from "components/Headings/Headings";

const Toastmasters = () => {
    return (
        <OuterWrapper>
            <Header />
            <InnerWrapper>
                <Headings subheading="Meet your toastmasters" heading="Name 1 & Name 2" />
                <p>Today PROPS and PROPS are getting married</p>
            </InnerWrapper>
            <Footer />
        </OuterWrapper>
    )
};

export default Toastmasters;

