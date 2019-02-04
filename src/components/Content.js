import React from 'react'
import styled from 'styled-components'

// TODO: Refactor Font Sizes into global styles & UL component
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 960px);
  margin-top: 70px;
  grid-row-gap: 100px;
  padding: 20px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  }

  h1,
  h2 {
    color: ${props => props.theme.primary};
  }

  h3,
  h4,
  h5,
  h6,
  p,
  li {
    color: ${props => props.theme.contentColor};
  }

  h2,
  h3,
  h4 {
    font-weight: 300;
  }

  h5,
  h6,
  p {
    font-weight: 400;
  }

  h1 {
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 2em;
    font-weight: 400;
    /* border: 1px solid blue; */
  }

  h2 {
    font-size: 1.75em;
    margin: 2px 0;
    /* margin-top: 25px; */
    /* border: 1px solid green; */
  }

  h3 {
    font-size: 1.3em;
    margin: 2px 0;
    /* border: 1px solid red; */
  }

  h4 {
    font-size: 1.3em;
  }

  p {
    font-size: 1em;
    line-height: 1.4em;
    font-weight: 300;
    /* margin: 20px 0 20px 0; */
    /* border: 1px solid pink; */
  }
  ul {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(8, auto);
    grid-auto-flow: column;
    li {
      padding-left: 20px;
      font-weight: 500;
      span {
        font-size: 0.8em;
        color: #9a9a9a;
      }
    }
  }
`

const Content = ({ children }) => <StyledDiv>{children}</StyledDiv>

export default Content
