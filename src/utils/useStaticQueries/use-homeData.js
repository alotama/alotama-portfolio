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
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth:1000, toFormat: WEBP) {
                      src
                      srcSet
                      sizes
                    }
                  }
              	}
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
            featureImageSharp {
              childImageSharp {
                fluid(maxWidth: 725, webpQuality: 10, toFormat: WEBP) {
                  src
                  srcSet
                  sizes
                }
              }
            }
            excerpt
          }
        }
      }
    }`)

  return data
}

export default useHomeData;