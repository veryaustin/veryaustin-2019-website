import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sun from '../images/svg/sun_icon.svg'
import moon from '../images/svg/moon_icon.svg'
import { device } from '../styles/mediaQueries'

const Switch = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 18px;
  border: 1px solid
    ${props => (props.themeState === true ? '#FFFFFF' : '#1759a6')};
  background: ${props =>
    props.themeState === true
      ? '#111111'
      : 'linear-gradient(to right, #1759a6 0%, #397ac7 99%)'};
  overflow: hidden;
  cursor: pointer;
  @media ${device.tablet} {
    width: 64px;
    height: 32px;
    border-radius: 30px;
  }
  @media ${device.desktop} {
    width: 32px;
    height: 16px;
    border-radius: 15px;
  }
`

const Cursor = styled.div`
  position: absolute;
  top: 0px;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: #fff;
  z-index: 5;
  left: ${props => (props.themeState === true ? '20px' : '0px')};

  -webkit-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  transition: all 0.2s linear;

  @media ${device.tablet} {
    width: 30px;
    height: 30px;
    left: ${props => (props.themeState === true ? '34px' : '0px')};
  }

  @media ${device.desktop} {
    width: 14px;
    height: 14px;
    left: ${props => (props.themeState === true ? '17px' : '0px')};
  }
`

const Label = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 3px;
  left: ${props => (props.themeState === true ? '6px' : '23px')};
  overflow: hidden;

  @media ${device.tablet} {
    width: 20px;
    height: 20px;
    top: 5px;
    left: ${props => (props.themeState === true ? '8px' : '35px')};
  }

  @media ${device.desktop} {
    width: 10px;
    height: 10px;
    top: 2px;
    left: ${props => (props.themeState === true ? '4px' : '17px')};
  }
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
