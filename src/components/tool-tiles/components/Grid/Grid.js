import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Tile from '../Tile'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4.75em, 1fr));
`

const Grid = ({ tools }) => {
  const items = tools.map((tool, index) => {
    return <Tile key={index} icon={tool} />
  })
  return <StyledGrid>{items}</StyledGrid>
}

export { Grid, StyledGrid }

Grid.propTypes = {
  tools: PropTypes.array.isRequired,
}
