import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Greeting from '../components/Greeting'
import Section from '../components/Section'
import PostLink from '../components/PostLink'

const IndexPage = ({ data }) => {
  // Work/Projects Section
  const work = data.work.edges
    .filter(edge => !!edge.node.frontmatter.title)
    .map(edge => {
      const {
        id,
        frontmatter: { title, subtitle, technology },
        html,
      } = edge.node
      return (
        <Section
          key={id}
          title={title}
          subtitle={subtitle}
          technology={technology}
          html={html}
        >
          Tools & Technology:
        </Section>
      )
    })

  // About Section
  const about = data.about.edges.map(edge => {
    const {
      id,
      frontmatter: { technology },
      html,
    } = edge.node
    return (
      <Section key={id} technology={technology} html={html}>
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

  // Contact Section
  const contact = data.contact.edges.map(edge => {
    const { id, html } = edge.node
    return <div key={id} dangerouslySetInnerHTML={{ __html: html }} />
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
        <Link to="/writing">See All Writing</Link>
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
            now
          </a>
          . Inspired by
          <a
            href="https://sivers.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Derek Sivers
          </a>
        </p>
        <Link to="/now">Visit Now Page</Link>
      </article>
      <article id="contact">
        <h1>Contact</h1>
        {contact}
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
            technology
          }
          html
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
            technology
          }
          html
        }
      }
    }
    writing: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/writing/" } }
      limit: 10
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
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/contact/" } }
    ) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`
