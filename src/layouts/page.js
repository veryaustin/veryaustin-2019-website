import React from 'react'
import { graphql } from 'gatsby'

export default ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  const { title, date } = frontmatter
  return (
    <div>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
