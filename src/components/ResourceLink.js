import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import ArrowLinkIcon from './ArrowLinkIcon'

// Resource Link

const StyledResourceLink = styled.div`
  margin: 10px 0;
  font-size: 1.2em;
  font-weight: 300;
  margin: 2px 0;
  a {
    color: ${props => props.theme.primary};
    &:hover {
      color: ${props => props.theme.primary};
      text-decoration: none;
    }
  }
`

const ResourceLink = ({ children, external, to }) => {
  return external ? (
    <StyledResourceLink>
      <a href={to} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowLinkIcon />
      </a>
    </StyledResourceLink>
  ) : (
    <StyledResourceLink>
      <Link to={to}>{children}</Link>
    </StyledResourceLink>
  )
}

export default ResourceLink

ResourceLink.propTypes = {
  children: PropTypes.array.isRequired,
  external: PropTypes.string,
  to: PropTypes.string,
}

ResourceLink.defaultProps = {
  external: false,
}
