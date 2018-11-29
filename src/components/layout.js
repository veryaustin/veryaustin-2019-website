import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'

const Layout = ({ children }) => (
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
        <div>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
