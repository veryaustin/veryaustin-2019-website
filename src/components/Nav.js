import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from './Logo'
import Bars from './Bars'
import NavLink from './NavLink'
import NavItem from './NavItem'
import Toggle from './Toggle'
import { device } from '../styles/mediaQueries'

// FIXME: Toggle Button Placement on Mobile Page
// TODO: Animate Logo?
// TODO: Animate menu transition
// TODO: Implement Header with burred background

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30px 1fr;
  grid-template-areas:
    'logo bars'
    'menu .';
  padding: 20px;

  @media ${device.desktop} {
    grid-template-columns: 1fr 2fr;
    grid-template-areas: 'logo menu';
    align-items: center;
  }
`

const NavMenu = styled.ul`
  display: ${props => (props.navShow === true ? 'grid' : 'none')};
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
class Nav extends Component {
  state = {
    navShow: false,
  }

  static propTypes = {
    handleThemeToggle: PropTypes.func,
    themeState: PropTypes.bool,
  }

  handleNavShow = () => {
    this.setState(prevState => ({
      navShow: !prevState.navShow,
    }))
  }

  handleNavClick = () => {
    this.setState(prevState => ({
      navShow: false,
    }))
  }

  render() {
    const { handleThemeToggle, themeState } = this.props
    return (
      <NavBar>
        <Logo alt="Very Austin Logo" />
        <Bars alt="Menu" handleNavShow={this.handleNavShow} />
        <NavMenu navShow={this.state.navShow}>
          <NavLink to="/" onClick={this.handleNavClick}>
            Home
          </NavLink>
          <NavLink to="/page-2" onClick={this.handleNavClick}>
            Work
          </NavLink>
          <NavLink to="/page-2" onClick={this.handleNavClick}>
            About
          </NavLink>
          <NavLink to="/page-2" onClick={this.handleNavClick}>
            Writing
          </NavLink>
          <NavLink to="/page-2" onClick={this.handleNavClick}>
            Now
          </NavLink>
          <NavLink to="/page-2" onClick={this.handleNavClick}>
            Contact
          </NavLink>
          <NavItem>
            <Toggle
              handleThemeToggle={handleThemeToggle}
              themeState={themeState}
            />
          </NavItem>
        </NavMenu>
      </NavBar>
    )
  }
}

NavMenu.propTypes = {
  navShow: PropTypes.bool.isRequired,
}

NavLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
}

export default Nav
