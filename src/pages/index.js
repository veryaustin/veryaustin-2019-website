import React from 'react'
import { graphql } from 'gatsby'
import Greeting from '../components/Greeting'
import Section from '../components/Section'
import PostLink from '../components/PostLink'
import ResourceLink from '../components/ResourceLink'
import { Tile, StyledGrid } from '../components/tool-tiles'

const IndexPage = ({ data }) => {
  // Work/Projects Section
  const work = data.work.edges
    .filter(edge => !!edge.node.frontmatter.title)
    .map(edge => {
      const {
        id,
        frontmatter: { title, subtitle, tiles },
        htmlAst,
      } = edge.node
      return (
        <Section
          key={id}
          title={title}
          subtitle={subtitle}
          tiles={tiles}
          html={htmlAst}
        >
          Tools & Technology:
        </Section>
      )
    })

  // About Section
  const about = data.about.edges.map(edge => {
    const {
      id,
      frontmatter: { tiles },
      htmlAst,
    } = edge.node
    return (
      <Section key={id} tiles={tiles} html={htmlAst}>
        Technologies, Tools & Services I’ve Used:
      </Section>
    )
  })

  // Writing Section
  const writing = data.writing.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => {
      const {
        node,
        node: { id },
      } = edge
      return <PostLink key={id} className="box" post={node} />
    })

  // Connect Section
  const connect = data.connect.edges.map(edge => {
    const {
      id,
      frontmatter: { contactInfo },
      html,
    } = edge.node

    // Destructure contactInfo Object
    const contactTiles = contactInfo.map(({ id, name, link }) => {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Tile key={id} icon={name} />
        </a>
      )
    })

    return (
      <>
        <div key={id} dangerouslySetInnerHTML={{ __html: html }} />
        <StyledGrid>{contactTiles}</StyledGrid>
      </>
    )
  })

  return (
    <>
      <Greeting id="home">My name is Austin and I build for the web.</Greeting>
      <article id="work">
        <h1>Things I've Made</h1>
        {work}
      </article>
      <article id="about">
        <h1>About</h1>
        {about}
      </article>
      <article id="writing">
        <h1>Things I've Written</h1>
        {writing}
      </article>
      <article id="now">
        <h1>Now</h1>
        <p>
          A page dedicated to what I'm doing
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            now.{' '}
          </a>
          Inspired by
          <a
            href="https://sivers.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Derek Sivers
          </a>
        </p>
        <ResourceLink to="/now">Visit Now Page</ResourceLink>
      </article>
      <article id="connect">
        <h1>Connect</h1>
        {connect}
      </article>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    work: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/work/" } }
      sort: { order: DESC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            url
            repo
            tiles
          }
          htmlAst
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/about/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            tiles
          }
          htmlAst
        }
      }
    }
    writing: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/writing/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            tags
            slug
          }
          fields {
            slug
          }
        }
      }
    }
    connect: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/connect/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            contactInfo {
              name
              link
            }
          }
          html
        }
      }
    }
  }
`
