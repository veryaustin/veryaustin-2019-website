import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sun from '../images/svg/sun_icon.svg'
import moon from '../images/svg/moon_icon.svg'

const Switch = styled.div`
  display: inline-block;
  position: relative;
  width: 32px;
  height: 16px;
  border-radius: 15px;
  border: 1px solid
    ${props => (props.themeState === true ? '#FFFFFF' : '#1759a6')};
  background: ${props =>
    props.themeState === true
      ? '#111111'
      : 'linear-gradient(to right, #1759a6 0%, #397ac7 99%)'};
  overflow: hidden;
  cursor: pointer;
`

const Cursor = styled.div`
  position: absolute;
  top: 0px;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: #fff;
  z-index: 5;
  left: ${props => (props.themeState === true ? '17px' : '0px')};

  -webkit-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  transition: all 0.2s linear;
`

const Label = styled.img`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 2px;
  left: ${props => (props.themeState === true ? '4px' : '16px')};
  overflow: hidden;
`
const Toggle = ({ handleThemeToggle, themeState }) => {
  return (
    <div onClick={handleThemeToggle}>
      <Switch themeState={themeState}>
        <Cursor themeState={themeState} />
        <Label src={themeState === true ? moon : sun} themeState={themeState} />
      </Switch>
    </div>
  )
}

Toggle.propTypes = {
  handleThemeToggle: PropTypes.func.isRequired,
  themeState: PropTypes.bool.isRequired,
}

Switch.propTypes = {
  themeState: PropTypes.bool.isRequired,
}

Cursor.propTypes = {
  themeState: PropTypes.bool.isRequired,
}

Label.propTypes = {
  src: PropTypes.string.isRequired,
  themeState: PropTypes.bool.isRequired,
}

export default Toggle
