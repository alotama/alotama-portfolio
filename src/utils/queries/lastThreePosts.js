import { graphql } from "gatsby"

const LAST_THREE_POSTS = graphql`
  query ($id: String) {
    allGhostPost(limit: 3, sort: {order: DESC, fields: published_at}, filter: {id: {ne: $id}}) {
      edges {
        node {
          title
          slug
          feature_image
          excerpt
          id
        }
      }
    }
  }
`

export default LAST_THREE_POSTS;