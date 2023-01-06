import React from "react";
import Header from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import { OuterWrapper, InnerWrapper } from "styles/GlobalStyles";

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

