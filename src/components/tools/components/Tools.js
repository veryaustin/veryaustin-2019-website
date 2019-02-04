import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Grid from './Grid'

const Container = styled.div`
  margin: 35px 0;
`

const Label = styled.h4`
  margin: 10px 0;
`

const Tools = ({ children, tools }) => (
  <Container>
    <Label>{children}</Label>
    <Grid tools={tools} />
  </Container>
)

Tools.propTypes = {
  children: PropTypes.string,
  tools: PropTypes.array,
}

export default Tools
