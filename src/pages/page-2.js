import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.background};
  transition-property: background-color;
  /* transition-duration: 0.2s;
  transition-timing-function: ease-in; */
`

const SecondPage = () => (
  <StyledDiv>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </StyledDiv>
)

export default SecondPage
