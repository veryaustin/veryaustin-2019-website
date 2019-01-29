import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

const NavItem = styled.li`
  align-self: center;
  @media ${device.desktop} {
    margin-left: 1.75rem;
  }
`

export default NavItem
