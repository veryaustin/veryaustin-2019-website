import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import Header from './header'
import theme from '../styles/theme'
import '../styles/fonts.scss'

// const GlobalStyled = createGlobalStyle`
// body {
//   font-family: 'HelveticaNeue-Thin', Helvetica, Arial, sans-serif;
// }
// `

class Layout extends Component {
  state = {
    darkThemeToggle: false,
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
              <div>{children}</div>
            </ThemeProvider>
            <button onClick={this.toggleTheme}>Toggle</button>
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
