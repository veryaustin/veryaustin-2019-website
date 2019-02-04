import React from 'react'
import { Link } from 'gatsby'
import Section from '../components/Section'
import { Tools } from '../components/tools'

// TODO: Remove This sample data and refactor Tools component into NPM package
// Sample Data for Grid
const tools = [
  'adobeillustrator',
  'adobephotoshop',
  'adobelightroom',
  'adobepremiere',
  'adobeaftereffects',
  'adobeindesign',
  'adobedreamweaver',
  'adobeflash',
  'adobeanimate',
  'adobemuse',
  'adobeaudition',
  'aws',
  'babel',
  'bootstrap',
  'chai',
  'chrome',
  'codekit',
  'craftcms',
  'css',
  'email',
  'ember',
  'ghostcms',
  'git',
  'github',
  'grunt',
  'gulp',
  'handlebars',
  'heroku',
  'html',
  'javascript',
  'jest',
  'jquery',
  'linkedin',
  'markdown',
  'mocha',
  'node',
  'npm',
  'pdf',
  'postgresql',
  'react',
  'redux',
  'sass',
  'sketch',
  'slack',
  'travisci',
  'trello',
  'twitter',
  'vscode',
  'webpack',
  'wordpress',
  'youtube',
]

const IndexPage = () => (
  <>
    <article id="home">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        quo voluptates repudiandae aperiam ducimus veniam pariatur incidunt,
        numquam corporis soluta nobis itaque nam voluptas repellendus voluptatum
        animi esse amet eius. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Perspiciatis quo voluptates repudiandae aperiam ducimus veniam
        pariatur incidunt, numquam corporis soluta nobis itaque nam voluptas
        repellendus voluptatum animi esse amet eius. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Perspiciatis quo voluptates repudiandae
        aperiam ducimus veniam pariatur incidunt, numquam corporis soluta nobis
        itaque nam voluptas repellendus voluptatum animi esse amet eius. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo
        voluptates repudiandae aperiam ducimus veniam pariatur incidunt, numquam
        corporis soluta nobis itaque
      </p>
    </article>
    <article id="work">
      <h1>Things I've Made</h1>
      <Section>
        <h2>Project 1</h2>
        <h3>Subtitle & Description</h3>
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
          nobis itaque nam voluptas repellendus voluptatum animi esse amet eius.
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
          nobis itaque nam voluptas repellendus voluptatum animi esse amet eius.
        </p>
        <p>
          nam voluptas repellendus voluptatum animi esse amet eius. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Perspiciatis quo
          voluptates repudiandae aperiam ducimus veniam pariatur incidunt,
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
          nobis itaque nam voluptas repellendus voluptatum animi esse amet eius.
        </p>
        <p>
          nam voluptas repellendus voluptatum animi esse amet eius. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Perspiciatis quo
          voluptates repudiandae aperiam ducimus veniam pariatur incidunt,
          numquam corporis soluta nobis itaque nam voluptas repellendus
          voluptatum animi esse amet nam voluptas repellendus voluptatum animi
          esse amet eius. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perspiciatis quo voluptates repudiandae aperiam ducimus veniam
          pariatur incidunt, numquam corporis soluta nobis itaque nam voluptas
          repellendus voluptatum animi esse amet eius.
        </p>
        <p>
          nam voluptas repellendus voluptatum animi esse amet eius. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Perspiciatis quo
          voluptates repudiandae aperiam ducimus veniam pariatur incidunt,
          numquam corporis soluta nobis itaque nam voluptas repellendus
          voluptatum animi esse amet eius. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. eius.
        </p>
        <Tools tools={tools}>Tools & Technology:</Tools>
      </Section>
      <Section>
        <h2>Project 2</h2>
        <h3>Subtitle & Description</h3>
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
          nobis itaque nam voluptas repellendus voluptatum animi esse amet eius.
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
          nobis itaque nam voluptas repellendus voluptatum animi esse amet eius.
        </p>
        <Tools tools={tools}>Tools & Technology:</Tools>
      </Section>
      <Section>
        <h2>Project 3</h2>
        <h3>Subtitle & Description</h3>
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
          nobis itaque nam voluptas repellendus voluptatum animi esse amet eius.
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
          nobis itaque nam voluptas repellendus voluptatum animi esse amet eius.
        </p>
        <Tools tools={tools}>Tools & Technology:</Tools>
      </Section>
    </article>
    <article id="about">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        quo voluptates repudiandae aperiam ducimus veniam pariatur incidunt,
        numquam corporis soluta nobis itaque nam voluptas repellendus voluptatum
        animi esse amet eius. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Perspiciatis quo voluptates repudiandae aperiam ducimus veniam
        pariatur incidunt, numquam corporis soluta nobis itaque nam voluptas
        repellendus voluptatum animi esse amet eius. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Perspiciatis quo voluptates repudiandae
        aperiam ducimus veniam pariatur incidunt, numquam corporis soluta nobis
        itaque nam voluptas repellendus voluptatum animi esse amet eius. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo
        voluptates repudiandae aperiam ducimus veniam pariatur incidunt, numquam
        corporis soluta nobis itaque nam voluptas repellendus voluptatum animi
        esse amet eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis quo voluptates repudiandae aperiam ducimus veniam pariatur
        incidunt, numquam corporis soluta nobis itaque nam voluptas repellendus
        voluptatum animi esse amet eius. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis quo voluptates repudiandae aperiam
        ducimus veniam pariatur incidunt, numquam corporis soluta nobis itaque
        nam voluptas repellendus voluptatum animi esse amet eius. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Perspiciatis quo voluptates
        repudiandae aperiam ducimus veniam pariatur incidunt, numquam corporis
        soluta nobis itaque nam voluptas repellendus voluptatum animi esse amet
        eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis quo voluptates repudiandae aperiam ducimus veniam pariatur
        incidunt, numquam corporis soluta nobis itaque nam voluptas repellendus
        voluptatum animi esse amet eius.
      </p>
    </article>
    <article id="writing">
      <h1>Things I've Written</h1>
      <ul>
        <li className="box">
          <div>React + Redux veryaustin.com 1</div>
          <span>April 08, 2017</span>
        </li>
        <li className="box">
          <div>Homebrew Cask 1</div>
          <span>April 08, 2017</span>
        </li>
        <li className="box">
          <div>Homebrew 1</div>
          <span>April 08, 2017</span>
        </li>
        <li className="box">
          <div>Srcset & Sizes Image Attributes 1</div>
          <span>April 08, 2017</span>
        </li>
        <li className="box">
          <div>React + Redux veryaustin.com 2</div>
          <span>April 08, 2017</span>
        </li>
        <li className="box">
          <div>Homebrew Cask 2</div>
          <span>April 08, 2017</span>
        </li>
        <li className="box">
          <div>Homebrew 2</div>
          <span>April 08, 2017</span>
        </li>
        <li className="box">
          <div>Srcset & Sizes Image Attributes 2</div>
          <span>April 08, 2017</span>
        </li>
        <li className="box">
          <div>React + Redux veryaustin.com 3</div>
          <span>April 08, 2017</span>
        </li>
        <li className="box">
          <div>Homebrew Cask 3</div>
          <span>April 08, 2017</span>
        </li>
      </ul>
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
        <a href="https://sivers.org" target="_blank" rel="noopener noreferrer">
          Derek Sivers
        </a>
      </p>
      <Link to="/now">Visit Now Page</Link>
    </article>
    <article id="contact">
      <h1>Contact</h1>
      <p>I'm available fore hire & would love to chat!</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        quo voluptates repudiandae aperiam ducimus veniam pariatur incidunt,
        numquam corporis soluta nobis itaque nam voluptas repellendus voluptatum
        animi esse amet eius. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Perspiciatis quo voluptates repudiandae aperiam ducimus veniam
        pariatur incidunt, numquam corporis soluta nobis itaque nam voluptas
        repellendus voluptatum animi esse amet eius. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Perspiciatis quo voluptates repudiandae
        aperiam ducimus veniam pariatur incidunt, numquam corporis soluta nobis
        itaque nam voluptas repellendus voluptatum animi esse amet eius. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo
        voluptates repudiandae aperiam ducimus veniam pariatur incidunt, numquam
        corporis soluta nobis itaque nam voluptas repellendus voluptatum animi
        esse amet eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis quo voluptates repudiandae aperiam ducimus veniam pariatur
        incidunt, numquam corporis soluta nobis itaque nam voluptas repellendus
        voluptatum animi esse amet eius. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis quo voluptates repudiandae aperiam
        ducimus veniam pariatur incidunt, numquam corporis soluta nobis itaque
        nam voluptas repellendus voluptatum animi esse amet eius. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Perspiciatis quo voluptates
        repudiandae aperiam ducimus veniam pariatur incidunt, numquam corporis
        soluta nobis itaque nam voluptas repellendus voluptatum animi esse amet
        eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis quo voluptates repudiandae aperiam ducimus veniam pariatur
        incidunt, numquam corporis soluta nobis itaque nam voluptas repellendus
        voluptatum animi esse amet eius.
      </p>
    </article>
  </>
)

export default IndexPage
