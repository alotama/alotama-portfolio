const LoadablePlugin = require('@loadable/webpack-plugin')
exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()]
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({ fromPath: '/home', toPath: '/', isPermanent: true, statusCode: 200 })
  // createRedirect({ fromPath: '/home', toPath: '/', isPermanent: true })
  // createRedirect({ fromPath: '/home', toPath: '/', isPermanent: true })

  const result = await graphql(`
    query AllPostQuery {
      allGhostPost {
        edges {
          node {
            title
            canonical_url
            meta_title
            meta_description
            feature_image
            tags {
              name
            }
            published_at(formatString: "D [de] MMMM YYYY")
            created_at
            updated_at
            slug
            html
            id
          }
        }
      }
    }  
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allGhostPost.edges || []
  posts.forEach(edge => {
    const data = edge.node
    const path = `/blog/${edge.node.slug}`

    createPage({
      path,
      component: require.resolve("./src/template/post.js"),
      context: { data },
    })
  })
}
