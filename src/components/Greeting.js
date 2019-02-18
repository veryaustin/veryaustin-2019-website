import React from 'react'
import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

const Article = styled.article`
  height: calc(100vh - 140px);
  display: grid;
  align-items: center;
  max-width: 90%;
  code {
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 3.25em;
    font-weight: 300;
    color: ${props => props.theme.greetingTag};
    span {
      color: ${props => props.theme.greetingText};
      position: relative;
      left: 10%;
    }
  }
  @media ${device.desktop} {
    max-width: 100%;
  }
`

const Greeting = ({ children }) => (
  <Article>
    <code>
      {'<greeting>'}
      <br />
      <span>{children}</span>
      <br />
      {'</greeting>'};
    </code>
  </Article>
)

export default Greeting
