const ghostConfig = require('./ghost-config');

require("dotenv").config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.alotama.com`,
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/content/about`,
      },
    },
    {
        resolve: `gatsby-plugin-ghost-images`,
        options: {
            // An array of node types and image fields per node
            // Image fields must contain a valid absolute path to the image to be downloaded
            lookup: [
                {
                    type: `GhostPost`,
                    imgTags: [`feature_image`],
                },
            ],
            // Additional condition to exclude nodes 
            // Takes precedence over lookup
            exclude: node => (
                node.ghostId === undefined
            ),
            // Additional information messages useful for debugging
            verbose: true,
        },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        generateStatsFile: true,
        analyzerMode: 'static',
        disable: !process.env.BUNDLE_ANALYZE
      }
    },
    {
      resolve: "gatsby-plugin-rollbar",
      options: {
        accessToken: process.env.ROLLBAR_KEY,
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
          environment: "production"
        }
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.YOUR_HOTJAR_ID,
        sv: process.env.YOUR_HOTJAR_SNIPPET_VERSION
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `
          {
            allGhostPost {
              edges {
                  node {
                    id
                    slug
                    updated_at
                    created_at
                    feature_image
                  }
              }
            }
            allGhostPage {
              edges {
                  node {
                    id
                    slug
                    updated_at
                    created_at
                    feature_image
                  }
              }
            }
          }`,
        mapping: {
          allGhostPost: {
            sitemap: `posts`,
          },
          allGhostPage: {
            sitemap: `pages`,
          },
        },
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alotama | Sebastián A. Tamashiro`,
        short_name: `alotama`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#d51224`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
  ],
}