import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Section from '../components/Section'
import PostLink from '../components/PostLink'

const IndexPage = ({ data }) => {
  // Work/Projects Section
  const work = data.work.edges
    .filter(edge => !!edge.node.frontmatter.title)
    .map(edge => {
      const {
        frontmatter: { title, subtitle, technology },
        html,
      } = edge.node
      return (
        <Section
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
    const { html } = edge.node
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  })

  // Writing Section
  const writing = data.writing.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <PostLink className="box" key={edge.node.id} post={edge.node} />
    ))

  // Contact Section
  const contact = data.contact.edges.map(edge => {
    const { html } = edge.node
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  })

  return (
    <>
      <article id="home">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quo voluptates repudiandae aperiam ducimus veniam pariatur incidunt,
          numquam corporis soluta nobis itaque nam voluptas repellendus
          voluptatum animi esse amet eius. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perspiciatis quo voluptates repudiandae
          aperiam ducimus veniam pariatur incidunt, numquam corporis soluta
          nobis itaque nam voluptas repellendus voluptatum animi esse amet eius.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quo voluptates repudiandae aperiam ducimus veniam pariatur incidunt,
          numquam corporis soluta nobis itaque nam voluptas repellendus
          voluptatum animi esse amet eius. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perspiciatis quo voluptates repudiandae
          aperiam ducimus veniam pariatur incidunt, numquam corporis soluta
          nobis itaque
        </p>
      </article>
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
      filter: { fileAbsolutePath: { regex: "/content/bio/" } }
    ) {
      edges {
        node {
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
          html
        }
      }
    }
  }
`
