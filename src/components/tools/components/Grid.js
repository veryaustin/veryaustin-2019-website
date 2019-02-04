import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Tile from './Tile'
import Icon from './Icon'
import logos from '../iconPaths'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4.75em, 1fr));
  grid-auto-rows: 1fr;
  ::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`

const Grid = ({ tools }) => {
  const list = tools.map((tool, index) => {
    const { color, path, viewBox } = logos[tool]
    return (
      <Tile key={index} color={color}>
        <Icon path={path} viewBox={viewBox} />
      </Tile>
    )
  })

  return <StyledGrid>{list}</StyledGrid>
}

Grid.propTypes = {
  tools: PropTypes.array.isRequired,
}

export default Grid
