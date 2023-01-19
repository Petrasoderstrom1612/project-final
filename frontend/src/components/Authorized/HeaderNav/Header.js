import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components/macro";

import { StyledCatchPhrase } from "../../../styles/GlobalStyles";

import heroimg from "../../../assets/images/hero-img-rings.jpg";
import NavHamburger from "./NavHamburger";


const Header = () => {
  return (
    <StyledHeader>
      <NavHamburger />
      <Link to="/wedding/:guestpassword"><StyledCatchPhrase>Blissful Beginnings</StyledCatchPhrase></Link>
      <StyledNav>
        <StyledLink to="/wedding/:guestpassword">Home</StyledLink>
        <StyledHeaderSpan> | </StyledHeaderSpan>
        <StyledLink to="/wedding/:guestpassword/location">Location</StyledLink>
        <StyledHeaderSpan> | </StyledHeaderSpan>
        {/*  <StyledLink to="/wedding/:guestpassword/toastmasters">Toastmasters</StyledLink>
        <StyledHeaderSpan> | </StyledHeaderSpan> */}
        <StyledLink to="/wedding/:guestpassword/rsvp">RSVP</StyledLink>
      </StyledNav>
    </StyledHeader >
  )
}

export default Header

export const StyledHeader = styled.header`
background-image: linear-gradient(rgba(255, 255, 255, 0.900), rgba(0, 0, 0, 0.2)), url(${heroimg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100vw;
min-height: 50vh;
display: flex;
align-items: center;
flex-direction: column;

/* @media (min-width: 1024px) {
    min-height: 50vh;
} */
`

const StyledNav = styled.nav`
color: #555; 
font-size: .9em;
font-weight: 500;
letter-spacing: 3px;
text-transform: uppercase;
display: none;
@media (min-width: 1024px) {
    display: flex;
  } 
`

const StyledHeaderSpan = styled.span`
margin: 0 1.5em;
`

const StyledLink = styled(NavLink)`
  &.active {
    font-weight: 700;
    color: #333;
  }
`