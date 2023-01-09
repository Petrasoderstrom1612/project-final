import React from "react";
import Footer from "components/Footer/Footer";
import { InnerWrapper } from "styles/GlobalStyles";
import { Headings } from "components/Headings/Headings";

const Toastmasters = () => {
    return (
        <InnerWrapper>
            <div>
                <Headings subheading="Meet your toastmasters" heading="Name 1 & Name 2" />
                <p>Today PROPS and PROPS are getting married</p>
            </div>
            <Footer />
        </InnerWrapper>
    )
};

export default Toastmasters;

