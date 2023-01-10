import React from "react";
import Swiper from "swiper/bundle"
import 'swiper/css/bundle'
import styled from "styled-components/macro";

const SwiperIntro = () => {
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    return (
        <StyledSwiperWrapper>
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </StyledSwiperWrapper>
    )
}
export default SwiperIntro

const StyledSwiperWrapper = styled.div`
width: 600px;
height: 300px;
`