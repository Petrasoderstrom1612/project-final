import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { StyledCatchPhrase } from "./GlobalStyles";
import heroimg from "../assets/images/hero-img-rings.jpg"

const Header = () => {

    return (
        <StyledHeader>
            <StyledCatchPhrase>Blissful Beginnings</StyledCatchPhrase>
            <StyledNav>
                <NavLink to="/">Home</NavLink>
                <span> | </span>
                <NavLink to="/location">Location</NavLink>
                <span> | </span>
                <NavLink to="/toastmasters">Toastmasters</NavLink>
                <span> | </span>
                <NavLink to="/RSVP">RSVP</NavLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
background-image: linear-gradient(rgba(255, 255, 255, 0.900), rgba(0, 0, 0, 0.2)), url(${heroimg});
background-size: cover;
background-repeat: no-repeat;
width: 95vw;
height: 60vh;
display: flex;
align-items: center;
flex-direction: column;
margin: 0;
`

const StyledNav = styled.nav`
color: "(var--color-softBlack)";
font-size: 0.8em;
font-weight: 400;
letter-spacing: 3px;
text-transform: uppercase;
`