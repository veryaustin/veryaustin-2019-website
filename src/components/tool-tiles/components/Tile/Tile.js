import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Icon, paths } from '../Icons'

const StyledTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  background-color: ${props => (props.color ? props.color : '#000000')};
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 10px #000000;
  }
  ::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
  }
`

const Tile = ({ icon }) => {
  const { color } = paths[icon]
  return (
    <StyledTile color={color}>
      <Icon icon={icon} color="#ffffff" />
    </StyledTile>
  )
}

Tile.propTypes = {
  icon: PropTypes.string.isRequired,
}

StyledTile.propTypes = {
  color: PropTypes.string,
}

StyledTile.defaultProps = {
  color: '#000000',
}

export default Tile
