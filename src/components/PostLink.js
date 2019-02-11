import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ListItem = styled.li`
  padding-left: 10px;
  font-weight: 500;
  span {
    font-size: 0.8em;
    color: #9a9a9a;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.contentColor};
    &:hover {
      text-decoration: underline;
    }
  }
`

const PostLink = ({ post }) => (
  <ListItem>
    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    <span> - {post.frontmatter.date}</span>
  </ListItem>
)

PostLink.propTypes = {
  post: PropTypes.object,
}

export default PostLink
