import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import NavItem from './NavItem'

const activeClassName = 'active'

const styledLink = styled(Link).attrs({
  activeClassName,
})`
  color: ${props => props.theme.navLinkColor};
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: none;
  &:hover {
    color: ${props => props.theme.navLinkHoverColor};
    border-bottom: 3px solid ${props => props.theme.navLinkHoverColor};
  }
  &.${activeClassName} {
    color: ${props => props.theme.navLinkActiveColor};
    border-bottom: 3px solid ${props => props.theme.navLinkActiveColor};
  }
`

const withLink = LinkComponent => {
  return class NavLink extends Component {
    render() {
      return (
        <NavItem>
          <LinkComponent {...this.props} />
        </NavItem>
      )
    }
  }
}

export default withLink(styledLink)
