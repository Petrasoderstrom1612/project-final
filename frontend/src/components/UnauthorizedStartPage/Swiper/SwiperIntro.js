import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledHeading } from "styles/GlobalStyles";
import styled from "styled-components/macro";

import flowers from "assets/images/timeline_flowers.jpg";
import cheers from "assets/images/timeline_cheers.jpg";
import flowersandring from "assets/images/timeline_flowersandring.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Swiper/swiper.style.css";

import { Pagination, Navigation } from "swiper";

const SwiperIntro = () => {
    return (
        <>
            <Swiper
                slidesPerView={"1"}
                spaceBetween={20}
                loop={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SlideTextContainer>
                        <StyledHeading>About us</StyledHeading>
<p>We specialize in creating beautiful and personalized wedding landing pages for couples. With Blissful Beginnings, you can rest assured that your guests will have all the information they need to make your special day even more memorable.</p>
                    </SlideTextContainer>
                    <img src={flowers} />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideTextContainer>
                        <StyledHeading>Offerings</StyledHeading>
                        <p>Our easy-to-use platform allows couples to provide their guests with all the information they need in one convenient location, including details about the happy couple, the venue, and the possibility to RSVP.</p>
                    </SlideTextContainer>
                    <img src={cheers} />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideTextContainer>
                        <StyledHeading>Sign up</StyledHeading>
                        <p>To sign up for our services, please scroll to the top of the page and locate the sign-up form. Once you have created your account, you will be directed to the wedding information form where you can input all the details of your wedding.</p>
                    </SlideTextContainer>
                    <img src={flowersandring} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperIntro

const SlideTextContainer = styled.div`
padding: .8em;
width: 70vw;

& p {
    margin-top: .4em;
}

@media (min-width: 667px) {
padding: 3.5em;
}
`