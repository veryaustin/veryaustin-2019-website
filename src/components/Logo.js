import React from 'react'
import styled from 'styled-components'

const LogoSVG = styled.svg`
  width: 53px;
  height: 29px;
  grid-area: logo;
  cursor: pointer;
`
const Logo = () => (
  <LogoSVG xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="a">
        <stop stopColor="#397AC7" offset="0%" />
        <stop stopColor="#1759A6" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M0 1.086l11.86 19.688a4.61 4.61 0 0 0 8.034-.26l8.043-15.546 1.336-2.482a4.608 4.608 0 0 1 8.235.112L47 22.244"
      transform="translate(3 3)"
      stroke="url(#a)"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </LogoSVG>
)

export default Logo
