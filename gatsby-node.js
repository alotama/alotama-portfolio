exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query AllPostQuery {
      allGhostPost {
        edges {
          node {
            slug
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
    const id = edge.node.id
    const path = `/blog/${edge.node.slug}`

    createPage({
      path,
      component: require.resolve("./src/pages/post.js"),
      context: { id },
    })
  })
}
