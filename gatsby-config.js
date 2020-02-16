module.exports = {
  siteMetadata: {
    title: `Urban Park Milano`,
    description: `Immerso nel verde! Area concerti modulabile, fino a 40.000 persone. Parco Esposizioni Novegro Via Novegro - 20900 Segrate`,
    author: `Urban Park Milano`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
          spaceId:'6k0a6st0hs31',
          accessToken:'pSrVYq9dFlrDGWNG8o4lqp5QqRGNNCQuYcWVMecuHE4'
          //accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#68ff00`,
        theme_color: `#68ff00`,
        display: `minimal-ui`,
        icon: `src/images/upm-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
      pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`
  ],
}
