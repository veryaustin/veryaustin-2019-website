import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSvg = styled.svg`
  width: 50%;
  height: 50%;
`

const Icon = ({ path, viewBox, color }) => {
  return (
    <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
      <path d={path} fill={color} />
    </StyledSvg>
  )
}

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
  /**
   * Hex Color or valid HTML color
   */
  color: PropTypes.string,
}

Icon.defaultProps = {
  viewBox: '0 0 32 32',
  color: '#ffffff',
}

export default Icon
