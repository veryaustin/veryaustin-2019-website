import styled from 'styled-components'

const Tile = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  background-color: ${props => (props.color ? props.color : '#000000')};
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 10px #000000;
  }
`

Tile.defaultProps = {
  color: '#000000',
}

export default Tile
