import React from 'react'
import styled from 'styled-components'

const ArrowLinkIconSVG = styled.svg`
  width: 15px;
  height: 15px;
  fill: ${props => props.theme.primary};
  fill-rule: 'nonzero';
  margin: 0 0 0 10px;
`
const ArrowLinkIcon = () => (
  <ArrowLinkIconSVG xmlns="http://www.w3.org/2000/svg">
    <path d="M1.126 1.126v12.748h12.748V1.126H1.126zM0 0h15v15H0V0zm6.06 4.286a.664.664 0 0 1-.641-.641.586.586 0 0 1 .603-.603l5.214.16a.673.673 0 0 1 .454.201.675.675 0 0 1 .2.454l.161 5.215a.573.573 0 0 1-.603.603.664.664 0 0 1-.64-.642l-.11-3.727-6.422 6.422c-.235.236-.627.217-.877-.033s-.263-.636-.027-.87l6.422-6.423-3.734-.116z" />
  </ArrowLinkIconSVG>
)

export default ArrowLinkIcon
