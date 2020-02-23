require("dotenv").config({
  path: '.env',
})

module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: false
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        cookieDomain: "alotama.com",
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
          apiUrl: `https://admin.alotama.com`,
          contentApiKey: process.env.GHOST_CONTENT_API_KEY,
          version: `v3` // Ghost API version, optional, defaults to "v3".
                        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alotama | Tama. Sebastián.`,
        short_name: `alotama`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#d51224`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
}