import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import Counter from "./Counter";
import StyledHeading from "./GlobalStyles";

const Header = () => {

    return (
        <StyledHeader>
            <StyledHeading>Blissful Beginnings</StyledHeading>
            <nav>
                <NavLink to="/">Home</NavLink>
                <span> | </span>
                <NavLink to="/location">Location</NavLink>
                <span> | </span>
                <NavLink to="/toastmasters">Toastmasters</NavLink>
                <span> | </span>
                <NavLink to="/rsvp">RSVP</NavLink>
            </nav>

        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
background-image: url(../src/assets/hero-img-rings.jpg);
width: 85vw;
height: 40vh;
`