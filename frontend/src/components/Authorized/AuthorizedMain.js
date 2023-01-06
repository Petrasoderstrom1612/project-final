import React from "react";
import Counter from "components/Counter";
import Navbar from "../HeaderNav/NavHamburger";
import Footer from "components/Footer/Footer";
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";



const AuthorizedMain = () => {
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Navbar />
                <Counter />
                <Footer />
            </InnerWrapper>
        </OuterWrapper >
    )
};

export default AuthorizedMain;
