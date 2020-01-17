import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavLink from './NavLink'
import Toggle from './Toggle'
import { device } from '../styles/mediaQueries'

const NavBar = styled.nav`
  grid-area: nav;
  grid-column: span 2;
  height: calc(100vh - 32px);
  display: ${props => (props.navShow === false ? 'none' : 'grid')};

  @media ${device.desktop} {
    height: 32px;
    display: grid;
  }
`

const Menu = styled.ul`
  display: grid;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 1.5em;
  font-weight: 300;
  text-decoration: none;

  @media ${device.phoneLarge} {
    font-size: 1.9em;
  }

  @media ${device.tablet} {
    font-size: 2.5em;
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(7, 1fr);
    font-size: 1.25em;
    height: 32px;
    justify-items: end;
  }
`
class Nav extends Component {
  static propTypes = {
    toggleTheme: PropTypes.func,
    themeState: PropTypes.bool,
    handleNavClick: PropTypes.func,
    navShowState: PropTypes.bool,
  }

  render() {
    const { themeState, toggleTheme, navShowState, handleNavClick } = this.props
    return (
      <StaticQuery
        query={graphql`
          query NavigationQuery {
            site {
              siteMetadata {
                navLinks {
                  name
                  link
                }
              }
            }
          }
        `}
        render={({
          site: {
            siteMetadata: { navLinks },
          },
        }) => (
          <NavBar navShow={navShowState}>
            <Menu>
              {navLinks.map(item => {
                const { name, link } = item
                return (
                  <NavLink key={name} to={link} onClick={handleNavClick}>
                    {name}
                  </NavLink>
                )
              })}
              <Toggle themeState={themeState} toggleTheme={toggleTheme} />
            </Menu>
          </NavBar>
        )}
      />
    )
  }
}

export default Nav
