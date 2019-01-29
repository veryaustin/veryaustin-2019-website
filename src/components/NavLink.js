import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import NavItem from './NavItem'

const styledLink = styled(Link)`
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

const withLink = LinkComponent => {
  return class NavLink extends Component {
    render() {
      const props = {
        ...this.props,
      }
      return (
        <NavItem>
          <LinkComponent {...props} />
        </NavItem>
      )
    }
  }
}

export default withLink(styledLink)
