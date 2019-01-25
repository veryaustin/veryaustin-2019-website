import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { device } from '../styles/mediaQueries'

// TODO: Implement Toggle Button
// FIXME: Toggle Button Placement on Mobile Page
// TODO: Dynamic Generation of SVG (Hamburger Menu/Logo)
// TODO: Animate Logo?
// TODO: Animate menu transition
// TODO: Implement Header with burred background

const NavMenu = styled.ul`
  display: ${props => (props.showNav === true ? 'grid' : 'none')};
  grid-area: menu;
  height: calc(100vh - 30px);
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 1.5em;

  @media ${device.phoneLarge} {
    font-size: 1.9em;
  }
  @media ${device.tablet} {
    font-size: 2.5em;
  }
  @media ${device.desktop} {
    display: flex;
    height: auto;
    justify-self: end;
    font-size: 1em;
  }
`

const NavItem = styled.li`
  align-self: center;
  @media ${device.desktop} {
    margin-left: 1.75rem;
  }
`

const NavLink = styled(Link)`
  color: ${props => props.theme.navLinkColor};
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: none;
  &:hover,
  &:active {
    color: ${props => props.theme.navLinkActiveColor};
    border-bottom: 3px solid ${props => props.theme.navLinkActiveColor};
  }
`

class Nav extends Component {
  render() {
    const { showNav, handleNavClick } = this.props
    return (
      <NavMenu showNav={showNav}>
        <NavItem>
          <NavLink to="/" onClick={handleNavClick}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/page-2" onClick={handleNavClick}>
            Work
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/page-2" onClick={handleNavClick}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/page-2" onClick={handleNavClick}>
            Writing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/page-2" onClick={handleNavClick}>
            Now
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/page-2" onClick={handleNavClick}>
            Contact
          </NavLink>
        </NavItem>
      </NavMenu>
    )
  }
}

export default Nav
