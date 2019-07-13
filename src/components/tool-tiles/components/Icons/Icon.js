import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { paths } from './'

const StyledSvg = styled.svg`
  width: 50%;
  height: 50%;
`

const Icon = ({ icon, color }) => {
  const { viewBox, path, color: logoColor } = paths[icon]
  return (
    <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
      <path d={path} fill={color ? color : logoColor} />
    </StyledSvg>
  )
}

Icon.propTypes = {
  icon: PropTypes.oneOf([
    'adobeaftereffects',
    'adobeanimate',
    'adobeaudition',
    'adobedreamweaver',
    'adobeflash',
    'adobeillustrator',
    'adobeindesign',
    'adobelightroom',
    'adobemuse',
    'adobephotoshop',
    'adobepremiere',
    'aws',
    'babel',
    'bootstrap',
    'chai',
    'chrome',
    'codekit',
    'craftcms',
    'css',
    'email',
    'ember',
    'ghostcms',
    'git',
    'github',
    'grunt',
    'gulp',
    'handlebars',
    'heroku',
    'html',
    'javascript',
    'jest',
    'jquery',
    'linkedin',
    'markdown',
    'mocha',
    'node',
    'npm',
    'pdf',
    'postgresql',
    'react',
    'redux',
    'sass',
    'sketch',
    'slack',
    'travisci',
    'trello',
    'twitter',
    'youtube',
    'vscode',
    'webpack',
    'wordpress',
    'youtube',
  ]).isRequired,
  color: PropTypes.string,
}

StyledSvg.defaultProps = {
  viewBox: PropTypes.string,
  xmlns: PropTypes.string.isRequired,
}

StyledSvg.defaultProps = {
  viewBox: '0 0 32 32',
}

export default Icon
