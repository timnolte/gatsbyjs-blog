let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

console.log(`This WordPress Endpoint is used: '${process.env.WORDPRESS_URL}'`);

module.exports = {
  siteMetadata: {
    siteUrl: `https://gatsbyjs.timn.me`,
    title: `Tim's GatsbyJS Blog`,
    author: `Tim Nolte`,
    description: `What I'm learning through #100DaysOfGatsby`,
    social: {
      github: { name: `GitHub`, url: `https://github.com/timnolte` },
      twitter: { name: `Twitter`, url: `https://twitter.com/tnolte` },
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tim's GatsbyJS Blog`,
        short_name: `GatsbyJS Blog`,
        start_url: `/`,
        background_color: `#cccccc`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `src/images/timnolte.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //    {
    //      resolve: `gatsby-source-graphql`,
    //      options: {
    //        typeName: `WPGraphQL`,
    //        fieldName: `wpgraphql`,
    //        url: `${process.env.WORDPRESS_URL}/graphql`,
    //      },
    //    },
    `gatsby-theme-material-ui`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
  ],
}
