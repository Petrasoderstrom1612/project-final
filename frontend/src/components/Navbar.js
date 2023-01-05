import React, { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { SidebarData } from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import heroimg from "../assets/images/hero-img-rings.jpg";
import { StyledCatchPhrase } from "./GlobalStyles";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (

    <><IconContext.Provider value={{ color: '#060b26' }} /> 
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose /> 
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav> 
      <StyledHeader> 
        <StyledCatchPhrase>Blissful Beginnings</StyledCatchPhrase>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <span> | </span>
          <StyledLink to="/location">Location</StyledLink>
          <span> | </span>
          <StyledLink to="/toastmasters">Toastmasters</StyledLink>
          <span> | </span>
          <StyledLink to="/rsvp">RSVP</StyledLink>
        </StyledNav>
      </StyledHeader></>

  );
}

export default Navbar;

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
`;

// import React from "react";
// import { useNavigate, NavLink } from "react-router-dom";
// import styled from "styled-components/macro";
// import { StyledCatchPhrase } from "./GlobalStyles";
// import heroimg from "../assets/images/hero-img-rings.jpg"

// const Header = () => {

//   return (
//     <StyledHeader>
//       <StyledCatchPhrase>Blissful Beginnings</StyledCatchPhrase>
//       <StyledNav>
//         <StyledLink to="/">Home</StyledLink>
//         <span> | </span>
//         <StyledLink to="/location">Location</StyledLink>
//         <span> | </span>
//         <StyledLink to="/toastmasters">Toastmasters</StyledLink>
//         <span> | </span>
//         <StyledLink to="/RSVP">RSVP</StyledLink>
//       </StyledNav>
//     </StyledHeader>
//   )
// }

// export default Header

// const StyledHeader = styled.header`
// background-image: linear-gradient(rgba(255, 255, 255, 0.900), rgba(0, 0, 0, 0.2)), url(${heroimg});
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;
// width: 95vw;
// height: 60vh;
// display: flex;
// align-items: center;
// flex-direction: column;
// margin: 0;
// `

// const StyledNav = styled.nav`
// font-size: 0.8em;
// font-weight: 400;
// letter-spacing: 3px;
// text-transform: uppercase;
// `

// const StyledLink = styled(NavLink)`
//   color: "(var--color-softBlack)";

//   &.active {
//     font-weight: 700;
//   }
// `;