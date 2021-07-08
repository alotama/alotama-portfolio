const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  env: {
    GRAPHCMS_PROJECT_API: process.env.GRAPHCMS_PROJECT_API,
    GRAPHCMS_PROD_AUTH_TOKEN: process.env.GRAPHCMS_PROD_AUTH_TOKEN
  },

  images: {
    domains: ['media.graphcms.com'],
  },
}
