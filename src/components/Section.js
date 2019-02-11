import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Tools } from './tools'

const StyledSection = styled.section`
  margin: 50px 0;
`

const Section = ({ children, title, subtitle, technology, html }) => (
  <StyledSection>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <Tools tools={technology}>{children}</Tools>
  </StyledSection>
)

Section.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  technology: PropTypes.array,
  html: PropTypes.string,
}

export default Section
