import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components/macro";

import { StyledCatchPhrase } from "../../../styles/GlobalStyles";

import heroimg from "../../../assets/images/hero-img-rings.jpg";
import NavHamburger from "./NavHamburger";


const Header = ({ guestpassword }) => {
  return (
    <StyledHeader>
      <NavHamburger />
      <Link to={`/wedding/${guestpassword}`}><StyledCatchPhrase>Blissful Beginnings</StyledCatchPhrase></Link>
      <StyledNav>
        <StyledLink to={`/wedding/${guestpassword}`}>Home</StyledLink>
        <StyledHeaderSpan> | </StyledHeaderSpan>
        <StyledLink to={`/wedding/location/${guestpassword}`}>Location</StyledLink>
        <StyledHeaderSpan> | </StyledHeaderSpan>
        <StyledLink to={`/wedding/rsvp/${guestpassword}`}>RSVP</StyledLink>
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
<<<<<<< HEAD
=======

@media (min-width: 1024px) {
    min-height: 60vh;
}
>>>>>>> cc8a6a8 (updated og-image, adjusted height of header and footer, changed project name from auth to final in package.json)
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