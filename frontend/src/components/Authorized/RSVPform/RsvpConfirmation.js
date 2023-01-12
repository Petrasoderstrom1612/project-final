import React from 'react'

import Header from "components/Authorized/HeaderNav/Header";
import { InnerWrapper, OuterWrapper } from "styles/GlobalStyles";
import { Headings } from "components/Reusable/Headings/Headings";
import { Footer } from "components/Reusable/Footer/Footer";


const RsvpConfirmation = () => {
    return (
        <OuterWrapper>
            <Header />
            <InnerWrapper>
                <Headings subheading="Hope to see you" heading="Thank you for responding!" />
            </InnerWrapper>
            <Footer subheading="Magical moments" heading="Blissful beginnings" />
        </OuterWrapper>
    )
}

export default RsvpConfirmation