import React from "react";
// Import Swiper React components
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

export default SwiperIntro = () => {
    return (
        <>
            <Swiper
                slidesPerView={"1"}
                spaceBetween={30}
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
                        <StyledHeading>What is Blissful Beginnings?</StyledHeading>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. Donec varius dui ac elit pulvinar commodo. Praesent volutpat ornare.</p>
                    </SlideTextContainer>
                    <img src={flowers} />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideTextContainer>
                        <StyledHeading>What we offer?</StyledHeading>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. Donec varius dui ac elit pulvinar commodo. Praesent volutpat ornare.</p>
                    </SlideTextContainer>
                    <img src={cheers} />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideTextContainer>
                        <StyledHeading>How to sign up</StyledHeading>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mattis ligula. Ut ut ultrices massa. Quisque volutpat tristique euismod. Donec varius dui ac elit pulvinar commodo. Praesent volutpat ornare.</p>
                    </SlideTextContainer>
                    <img src={flowersandring} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

const SlideTextContainer = styled.div`
padding: 3.5em;
`