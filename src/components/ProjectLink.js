import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ArrowLinkIcon from './ArrowLinkIcon'

const StyledTag = styled.div`
  margin: 10px 0;
  a {
    font-size: 1.2em;
    font-weight: 300;
    margin: 2px 0;
    color: ${props => props.theme.primary};
    &:hover {
      text-decoration: none;
    }
  }
`

const ProjectLink = ({ children, link }) => {
  return (
    <StyledTag>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowLinkIcon />
      </a>
    </StyledTag>
  )
}

export default ProjectLink

ProjectLink.propTypes = {
  children: PropTypes.array.isRequired,
  link: PropTypes.string,
}
