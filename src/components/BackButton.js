import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const BackSVG = styled.svg`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: ${props => props.theme.primary};
  fill-rule: 'nonzero';
`

const BackButton = ({ to }) => (
  <Link to={to}>
    <BackSVG xmlns="http://www.w3.org/2000/svg">
      <path d="M18.749 1.676C12.77-1.774 5.127.273 1.677 6.251-1.775 12.228.273 19.872 6.25 23.324c5.977 3.45 13.621 1.402 17.073-4.575 3.451-5.978 1.402-13.621-4.575-17.073zm2.41 15.823c-2.762 4.783-8.877 6.42-13.658 3.659-4.782-2.76-6.421-8.875-3.66-13.657C6.6 2.718 12.717 1.08 17.499 3.84c4.781 2.76 6.42 8.876 3.66 13.658zm-5.354-8.097l-3.317 2.007.006-1.405c.003-.69-.474-.96-1.063-.602l-4.106 2.484c-.591.357-.59.935.003 1.29l4.067 2.435c.593.354 1.076.083 1.079-.608l.006-1.363 3.29 1.97c.592.355 1.076.082 1.078-.608l.022-5c.002-.688-.475-.958-1.065-.6z" />
    </BackSVG>
  </Link>
)

export default BackButton
