import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from './Logo'
import Bars from './Bars'
import { Link } from 'gatsby'
import NavLink from './NavLink'
import NavItem from './NavItem'
import Toggle from './Toggle'
import { device } from '../styles/mediaQueries'

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
  font-weight: 300;

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
    const { navLinks, handleThemeToggle, themeState } = this.props
    return (
      <NavBar>
        <Link to="/">
          <Logo alt="Very Austin Logo" />
        </Link>
        <Bars alt="Menu" handleNavShow={this.handleNavShow} />
        <NavMenu navShow={this.state.navShow}>
          {navLinks.map(item => {
            const { name, link } = item
            return (
              <NavLink key={name} to={link} onClick={this.handleNavClick}>
                {name}
              </NavLink>
            )
          })}
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

Nav.propTypes = {
  navLinks: PropTypes.array,
  handleThemeToggle: PropTypes.func,
  themeState: PropTypes.bool,
}

NavMenu.propTypes = {
  navShow: PropTypes.bool.isRequired,
}

NavLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
}

export default Nav
