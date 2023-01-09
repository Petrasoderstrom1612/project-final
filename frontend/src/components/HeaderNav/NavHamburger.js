import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { SidebarData } from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <section>
      <IconContext.Provider value={{ color: '#F7F3F1' }} />
      <StyledNavHam>
        <Link to='#'><StyledMenuBars>
          <FaIcons.FaBars onClick={showSidebar} />
        </StyledMenuBars>
        </Link>
      </StyledNavHam>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <StyledNavMenuItems onClick={showSidebar}>
          <StyledNavBarToggle>
            <Link to='#'><StyledMenuBars>
              <br/><AiIcons.AiOutlineClose />
            </StyledMenuBars>
            </Link>
          </StyledNavBarToggle>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <StyledMenuItemsSpan>{item.title}</StyledMenuItemsSpan>
                </Link>
              </li>
            );
          })}
        </StyledNavMenuItems>
      </nav>
    </section>
  );
}

export default Navbar;

const StyledNavHam = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

@media (min-width: 1024px) {
    display: none
}
`
const StyledMenuBars = styled.div`
font-size: 2rem;
background: none;
position: absolute;
left: 8%;

`

const StyledNavMenuItems = styled.ul`
width: 100%;
margin-left: .5rem;
`

const StyledNavBarToggle = styled.li`
 background-color: var(--color-beige);
 width: 100%;
 height: 80px;
 display: flex;
 justify-content: flex-start;
 align-items: left;
`

const StyledMenuItemsSpan = styled.span`
  margin-left: 1.5rem;
`