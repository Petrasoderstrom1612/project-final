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
                <StyledLink to="/">Home</StyledLink>
                <span> | </span>
                <StyledLink to="/location">Location</StyledLink>
                <span> | </span>
                <StyledLink to="/toastmasters">Toastmasters</StyledLink>
                <span> | </span>
                <StyledLink to="/RSVP">RSVP</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
background-image: linear-gradient(rgba(255, 255, 255, 0.900), rgba(0, 0, 0, 0.2)), url(${heroimg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 95vw;
height: 60vh;
display: flex;
align-items: center;
flex-direction: column;
margin: 0;
`

const StyledNav = styled.nav`
font-size: 0.8em;
font-weight: 400;
letter-spacing: 3px;
text-transform: uppercase;
`

const StyledLink = styled(NavLink)`
  color: "(var--color-softBlack)";

  &.active {
    font-weight: 700;
  }
`;