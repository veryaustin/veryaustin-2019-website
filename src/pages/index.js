import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import GridItem from '../components/GridItem'

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
  background-color: ${props => props.theme.background};
  transition-property: background-color;
  /* transition-duration: 0.2s;
  transition-timing-function: ease-in; */
  color: #444;
}
`

const IndexPage = () => (
  <>
    <h1>Testing Layout Component</h1>
    <Link to="/page-2/">Go to page 2</Link>
    <StyledDiv>
      <GridItem>A</GridItem>
      <GridItem>B</GridItem>
      <GridItem>C</GridItem>
      <GridItem>D</GridItem>
      <GridItem>E</GridItem>
      <GridItem>F</GridItem>
    </StyledDiv>
  </>
)

export default IndexPage
