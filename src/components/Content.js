import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 960px);
  margin-top: 70px;
  grid-row-gap: 100px;
  padding: 20px;

  h1,
  h2 {
    color: ${props => props.theme.primary};
  }

  h3,
  h4,
  h5,
  h6,
  p,
  li,
  code {
    color: ${props => props.theme.contentColor};
  }

  h2,
  h3,
  h4,
  p {
    font-weight: 300;
  }

  h1,
  h5,
  h6 {
    font-weight: 400;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.75em;
    margin: 2px 0;
  }

  h3 {
    font-size: 1.3em;
    margin: 2px 0;
  }

  h4 {
    font-size: 1.3em;
  }

  p {
    font-size: 1em;
    line-height: 1.4em;
  }

  a {
    color: ${props => props.theme.linkColor};
    text-decoration: none;
    &:hover,
    &:visited {
      text-decoration: underline;
    }
  }
`

const Content = ({ children }) => <StyledDiv>{children}</StyledDiv>

export default Content
