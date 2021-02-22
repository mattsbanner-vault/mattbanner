require("dotenv").config({
  path: `.env`,
});

const dynamicPlugins = [];
if (process.env.APP_ENV === 'production') {
  dynamicPlugins.push(
      {
        resolve: `gatsby-plugin-umami`,
        options: {
          websiteId: 'de702076-3008-4470-8841-17bbaef99fac',
          srcUrl: 'https://umami.banner.wtf/umami.js',
          includeInDevelopment: false,
          autoTrack: true,
          respectDoNotTrack: true
        }
      }
  );
}

module.exports = {
  siteMetadata: {
    title: `Matt Banner`,
    description: `Web Developer based in Essex. Working with HTML, CSS, PHP, Laravel, Craft CMS, Vue.js, Docker & AWS.`,
    author: `Matt Banner`,
  },
  plugins: [
    ...dynamicPlugins,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mattbanner`,
        short_name: `Matt Banner`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/memoji-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-craft",
      options: {
        enabledSites: [`mattBanner`]
      }
    }
  ],
}
