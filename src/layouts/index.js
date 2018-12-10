import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import '../styles/main.scss'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    font-family: 'HelveticaNeue Thin', Helvetica, Arial, sans-serif;
  }
  h1 {
    color: ${props => props.theme.primary};
  }
}`

class Layout extends Component {
  state = {
    darkThemeToggle: false,
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem('veryaustin-dark-theme')
    if (localStorageRef) {
      this.setState({ darkThemeToggle: JSON.parse(localStorageRef) })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'veryaustin-dark-theme',
      JSON.stringify(this.state.darkThemeToggle)
    )
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      darkThemeToggle: !prevState.darkThemeToggle,
    }))
  }

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
            <Header siteTitle={data.site.siteMetadata.title} />
            <ThemeProvider
              theme={
                this.state.darkThemeToggle ? theme.nightTheme : theme.dayTheme
              }
            >
              <>
                <GlobalStyle />
                <div>{children}</div>
                <button onClick={this.toggleTheme}>Toggle</button>
              </>
            </ThemeProvider>
          </>
        )}
      />
    )
  }
}

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             {
//               name: 'description',
//               content: 'Web development portfolio for Austin Lauritsen',
//             },
//             {
//               name: 'keywords',
//               content: [
//                 'Web Design',
//                 'Web Development',
//                 'Amazon Web Services',
//                 'AWS Certified Architect',
//                 'AWS Certified Developer',
//                 'HTML',
//                 'CSS',
//                 'JavaScript',
//                 'ReactJS',
//                 'Redux',
//                 'NodeJS',
//                 'Webpack',
//                 'Babel',
//                 'Gulp',
//                 'Grunt',
//                 'Jest',
//                 'Grunt',
//                 'Mocha',
//                 'Chai',
//                 'NPM',
//                 'Wordpress',
//                 'Ghost',
//               ],
//             },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <ThemeProvider theme={theme.nightTheme}>
//           <div>{children}</div>
//         </ThemeProvider>
//         <button onClick={this}>Toggle</button>
//       </>
//     )}
//   />
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
