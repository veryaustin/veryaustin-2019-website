module.exports = {
  siteMetadata: {
    title: `Very Austin`,
    description: `Web development portfolio for Austin Lauritsen`,
    navLinks: [
      { name: 'Home', link: '/' },
      { name: 'Work', link: '#work' },
      { name: 'About', link: '#about' },
      { name: 'Writing', link: '#writing' },
      { name: 'Now', link: '/now' },
      { name: 'Connect', link: '#connect' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-layout',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `workcontent`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          { resolve: `gatsby-remark-relative-images` },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              withWebp: true,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: `gatsby-remark-component`,
            options: { components: ['resource-link'] },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Very Austin',
        short_name: 'veryaustin',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/images/favicons/favicon.svg',
        icons: [
          {
            src: `/favicons/favicon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
