import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import Tools from './tools'
import ResourceLink from './ResourceLink'

const StyledSection = styled.section`
  margin: 50px 0;
`

const Section = ({ children, title, subtitle, tiles, html }) => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { 'resource-link': ResourceLink },
  }).Compiler

  return (
    <StyledSection>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {typeof html === 'object' ? (
        renderAst(html)
      ) : (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      )}
      <Tools tools={tiles}>{children}</Tools>
    </StyledSection>
  )
}

Section.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tiles: PropTypes.array,
  html: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default Section
