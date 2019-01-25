import React, { Component } from 'react'
import styled from 'styled-components'
import Bars from '../images/svg/Bars'
import Logo from '../images/svg/Logo'
import Nav from './Nav'
import { device } from '../styles/mediaQueries'

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.menuBackgroundColor};
`

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

class Header extends Component {
  state = {
    showNav: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      showNav: !prevState.showNav,
    }))
  }

  handleNavClick = () => {
    this.setState(prevState => ({
      showNav: false,
    }))
  }

  render() {
    return (
      <HeaderWrapper>
        <NavBar>
          <Logo alt="Very Austin Logo" />
          <Bars alt="Menu" toggleNav={this.toggleNav} />
          <Nav
            handleNavClick={this.handleNavClick}
            showNav={this.state.showNav}
          />
        </NavBar>
      </HeaderWrapper>
    )
  }
}

export default Header
