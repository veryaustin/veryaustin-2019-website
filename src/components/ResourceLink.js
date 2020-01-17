import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import ArrowLinkIcon from './ArrowLinkIcon'

const StyledExternalLink = styled.a`
  margin: 10px 0;
  font-size: 1.2em;
  font-weight: 300;
  margin: 2px 0;
  color: ${props => props.theme.primary} !important;
  &:hover {
    color: ${props => props.theme.primary};
  }
`

const StyledInternalLink = styled(Link)`
  margin: 10px 0;
  font-size: 1.2em;
  font-weight: 300;
  margin: 2px 0;
  color: ${props => props.theme.primary} !important;
  &:hover {
    color: ${props => props.theme.primary};
  }
`

const ResourceLink = ({ children, external, to }) => {
  return external ? (
    <StyledExternalLink href={to} target="_blank">
      {children}
      <ArrowLinkIcon />
    </StyledExternalLink>
  ) : (
    <StyledInternalLink to={to}>{children}</StyledInternalLink>
  )
}

export default ResourceLink

ResourceLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  external: PropTypes.string,
  to: PropTypes.string,
}

ResourceLink.defaultProps = {
  external: undefined,
}
