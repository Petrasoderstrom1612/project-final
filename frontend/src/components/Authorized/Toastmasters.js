import React from "react";
import Header from "components/Navbar";
import Footer from "components/Footer";
import { OuterWrapper, InnerWrapper } from "components/GlobalStyles";

const Toastmasters = () => {
    return (

        <OuterWrapper>
            <InnerWrapper>
                <Header />
                <div>
                    <p>Today PROPS and PROPS are getting married</p>
                </div>
                <Footer />
            </InnerWrapper>
        </OuterWrapper>
    )
};

export default Toastmasters;

