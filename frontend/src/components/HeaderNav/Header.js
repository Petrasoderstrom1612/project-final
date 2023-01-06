import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { StyledCatchPhrase } from "../../styles/GlobalStyles";
import heroimg from "../../assets/images/hero-img-rings.jpg";
import Navbar from "./NavHamburger";


const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <Link to="/"><StyledCatchPhrase>Blissful Beginnings</StyledCatchPhrase></Link>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <span> | </span>
        <StyledLink to="/location">Location</StyledLink>
        <span> | </span>
        <StyledLink to="/toastmasters">Toastmasters</StyledLink>
        <span> | </span>
        <StyledLink to="/rsvp">RSVP</StyledLink>
      </StyledNav>
    </StyledHeader >
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
display: none;
@media (min-width: 1024px) {
    display: flex;
  } 
`

const StyledLink = styled(NavLink)`
  color: "(var--color-softBlack)";

  &.active {
    font-weight: 700;
  }
`