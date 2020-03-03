require("dotenv").config({
  path: '.env',
})

module.exports = {
  development: {
    apiUrl: process.env.GHOST_ADMIN_URL,
    contentApiKey: process.env.GHOST_CONTENT_API_KEY,
  },
  production: {
    apiUrl: process.env.GHOST_ADMIN_URL,
    contentApiKey: process.env.GHOST_CONTENT_API_KEY,
  },
}