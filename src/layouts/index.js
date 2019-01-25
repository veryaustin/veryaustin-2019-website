import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Header from '../components/Header'
import '../styles/main.scss'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.background};
    font-family: 'HelveticaNeue Thin', 'Helvetica', 'Arial', sans-serif;
    display: grid;
  }
  h1 {
    color: ${props => props.theme.primary};
  }
  #___gatsby {
    display: grid;
  }
`

class Layout extends Component {
  state = {
    toggleDarkTheme: false,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem('veryaustin-theme')
    if (localStorageRef) {
      this.setState({ toggleDarkTheme: JSON.parse(localStorageRef) })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'veryaustin-theme',
      JSON.stringify(this.state.toggleDarkTheme)
    )
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      toggleDarkTheme: !prevState.toggleDarkTheme,
    }))
  }

  // handleNavClick = () => {
  //   this.setState(prevState => ({ toggleNav: false }))
  // }

  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: 'Web development portfolio for Austin Lauritsen',
                },
                {
                  name: 'keywords',
                  content: [
                    'Web Design',
                    'Web Development',
                    'Amazon Web Services',
                    'AWS Certified Architect',
                    'AWS Certified Developer',
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'ReactJS',
                    'Redux',
                    'NodeJS',
                    'Webpack',
                    'Babel',
                    'Gulp',
                    'Grunt',
                    'Jest',
                    'Grunt',
                    'Mocha',
                    'Chai',
                    'NPM',
                    'Wordpress',
                    'Ghost',
                  ],
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <ThemeProvider
              theme={
                this.state.toggleDarkTheme ? theme.darkTheme : theme.lightTheme
              }
            >
              <Fragment>
                <GlobalStyle />
                <Header />
                <div style={{ marginTop: '70px' }}>
                  {children}
                  <button onClick={this.toggleTheme}>Toggle</button>
                </div>
              </Fragment>
            </ThemeProvider>
          </>
        )}
      />
    )
  }
}

export default Layout
