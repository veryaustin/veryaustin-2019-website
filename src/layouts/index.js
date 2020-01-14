import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Logo from '../images/svg/logo.svg'
// eslint-disable-next-line
import Now from '../images/svg/now.svg'
import Content from '../components/Content'
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
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-image: url(${Logo});
    background-attachment: fixed;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
  }

  #___gatsby {
    display: grid;
  }
`

class Layout extends Component {
  state = {
    darkTheme: false,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  detectTheme() {
    if (window.matchMedia('(prefers-color-scheme').media) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem('veryaustin-theme')
    if (localStorageRef) {
      this.setState({ darkTheme: JSON.parse(localStorageRef) })
    } else {
      this.setState({ darkTheme: this.detectTheme() })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'veryaustin-theme',
      JSON.stringify(this.state.darkTheme)
    )
  }

  handleThemeToggle = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  render() {
    const { children } = this.props
    const { darkTheme } = this.state
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                navLinks {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <Fragment>
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
              theme={darkTheme ? theme.darkTheme : theme.lightTheme}
            >
              <Fragment>
                <GlobalStyle />
                <Header>
                  <Nav
                    handleThemeToggle={this.handleThemeToggle}
                    themeState={this.state.darkTheme}
                    navLinks={data.site.siteMetadata.navLinks}
                  />
                </Header>
                <Content>{children}</Content>
              </Fragment>
            </ThemeProvider>
          </Fragment>
        )}
      />
    )
  }
}

export default Layout
