exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query allPostQuery {
      allSanityBlog {
        edges {
          node {
            slug {
              current
            }
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allSanityBlog.edges || []
  posts.forEach(edge => {
    const id = edge.node.id
    const path = `/blog/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/pages/post.js"),
      context: { id },
    })
  })
}

exports.onCreateWebpackConfig = ({
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        "process.env.SANITY_PROJECT_ID": JSON.stringify(process.env.SANITY_PROJECT_ID),
        "process.env.SANITY_DATASET": JSON.stringify(process.env.SANITY_DATASET),
      }),
    ],
  })
}
