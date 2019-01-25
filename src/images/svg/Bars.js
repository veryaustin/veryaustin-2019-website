import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

const BarsSVG = styled.svg`
  width: 29px;
  height: 25px;
  grid-area: bars;
  justify-self: end;
  cursor: pointer;
  fill: ${props => props.theme.primary};

  @media ${device.desktop} {
    display: none;
  }
`
const Bars = ({ toggleNav, showNav }) => {
  return (
    <BarsSVG onClick={toggleNav} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.02 4.592A1.02 1.02 0 0 1 0 3.572V1.02C0 .457.457 0 1.02 0h26.531c.564 0 1.02.457 1.02 1.02v2.551a1.02 1.02 0 0 1-1.02 1.02H1.021zm0 10.204A1.02 1.02 0 0 1 0 13.776v-2.552c0-.563.457-1.02 1.02-1.02h26.531c.564 0 1.02.457 1.02 1.02v2.552a1.02 1.02 0 0 1-1.02 1.02H1.021zM1.02 25A1.02 1.02 0 0 1 0 23.98v-2.551c0-.564.457-1.02 1.02-1.02h26.531c.564 0 1.02.456 1.02 1.02v2.55A1.02 1.02 0 0 1 27.551 25H1.021z"
        fillRule="nonzero"
      />
    </BarsSVG>
  )
}

export default Bars
