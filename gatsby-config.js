const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mrtkrcm`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`
        // icon: `src/images/tailwind-icon.png`
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
  siteMetadata: {
    title: 'mrtkrcm',
    description: 'personal homepage',
    author: 'Murat Karacam'
  }
}
