import React from 'react'
import { graphql } from 'gatsby'
import PostLink from '../components/PostLink'

const Writing = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <div>
      <h1>Things I've Written</h1>
      {Posts}
    </div>
  )
}

export default Writing

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/writing/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            tags
            slug
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`
