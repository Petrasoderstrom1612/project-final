import React from "react";

import { InnerWrapper } from "styles/GlobalStyles";
import { Headings } from "components/Reusable/Headings/Headings";
import SwiperIntro from "components/UnauthorizedStartPage/Swiper/SwiperIntro";


const PageIntro = () => {
    return (
        <InnerWrapper>
            <Headings tabIndex="3" subheading="Beginning of true love" heading="Our concept" />
            <SwiperIntro />
        </InnerWrapper>
    )
}

export default PageIntro;

