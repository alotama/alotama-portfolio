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
          feature_image
          id
        }
      }
    }
  }`)
  
  return data
}

export default useBlogData