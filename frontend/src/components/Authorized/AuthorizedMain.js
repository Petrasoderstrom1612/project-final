import React from "react";
import Counter from "components/Counter";
import Footer from "components/Footer/Footer";
import Header from "components/HeaderNav/Header";
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";

const AuthorizedMain = () => {
    return (
        <OuterWrapper>
            <Header />
            <InnerWrapper>
                <Counter />
            </InnerWrapper>
            <Footer />
        </OuterWrapper >
    )
};

export default AuthorizedMain;
