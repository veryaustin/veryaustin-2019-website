import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from './Logo'
import Bars from './Bars'
import Nav from './Nav'
import { device } from '../styles/mediaQueries'

const HeaderWrapper = styled.header`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30px 1fr;
  grid-template-areas:
    'logo bars'
    'nav .';
  align-items: center;
  background-color: ${props => props.theme.menuBackgroundColor};
  padding: 20px;
  width: 100%;
  z-index: 1;

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'logo nav';
    align-items: center;
  }
`
class Header extends Component {
  state = {
    navShow: false,
  }

  static propTypes = {
    toggleTheme: PropTypes.func,
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
    const { themeState, toggleTheme } = this.props
    return (
      <HeaderWrapper>
        <Logo alt="Very Austin Logo" />
        <Bars alt="Mobile Menu Toggle" handleNavShow={this.handleNavShow} />
        <Nav
          alt="Navigation Links"
          themeState={themeState}
          toggleTheme={toggleTheme}
          handleNavClick={this.handleNavClick}
          navShowState={this.state.navShow}
        />
      </HeaderWrapper>
    )
  }
}

export default Header
