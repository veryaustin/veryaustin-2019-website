import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.menuBackgroundColor};
  z-index: 1;
`

const Header = ({ children }) => <HeaderWrapper>{children}</HeaderWrapper>

Header.propTypes = {
  children: PropTypes.node,
}

export default Header
