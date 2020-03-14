import { graphql, useStaticQuery } from 'gatsby';

const useBlogData = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
    blog: ghostPage(title: { eq: "Blog" }) {
      title
      meta_description
      canonical_url
    }
    posts: allGhostPost(sort: { fields: published_at, order: DESC }) {
      edges {
        node {
          slug
          title
          excerpt
          tags {
            name
          }
          featureImageSharp {
            childImageSharp {
              fluid(maxWidth:1000, toFormat: WEBP) {
                src
                srcSet
                sizes
              }
            }
          }
          id
        }
      }
    }
  }`)

  return data
}

export default useBlogData