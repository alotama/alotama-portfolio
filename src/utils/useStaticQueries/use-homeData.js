import { useStaticQuery, graphql } from "gatsby"

const useHomeData = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      projects: allFile(filter: {name: {regex: "/(?:project\\-)/"}}, limit: 5) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                tags
                url
                thumbnail
              }
            }
          }
        }
      }
      home: ghostPage(slug: {eq: "home"}) {
        canonical_url
        meta_title
        meta_description
        title
        html
      }
      lastPosts: allGhostPost(limit: 3, sort: {order: DESC, fields: published_at}) {
        edges {
          node {
            title
            slug
            feature_image
            excerpt
          }
        }
      }
    }`)

  return data
}

export default useHomeData;