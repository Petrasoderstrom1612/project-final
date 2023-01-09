import React from "react";
import Footer from "components/Footer/Footer";
import { InnerWrapper } from "styles/GlobalStyles";
import Header from "components/HeaderNav/Header";

const Toastmasters = () => {
    return (
        <InnerWrapper>
          <Header />
            <div>
                <p>Today PROPS and PROPS are getting married</p>
            </div>
            <Footer />
        </InnerWrapper>
    )
};

export default Toastmasters;

