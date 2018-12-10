import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.highlight};
  color: ${props => props.theme.primary};
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
`

const GridItem = ({ children }) => <StyledDiv>{children}</StyledDiv>

export default GridItem
