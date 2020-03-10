import { useStaticQuery, graphql } from "gatsby"

const useAboutData = () => {
  const data = useStaticQuery(graphql`
  query AboutQuery {
    about: ghostPage(slug: {eq: "sobre-mi"}) {
      id
      title
      slug
      meta_title
      meta_description
      canonical_url
      html
      published_at
      created_at
      updated_at
    }
    social: file(name: {eq: "about-social"}) {
      childMarkdownRemark {
        html
      }
    }
    skills: file(name: {eq: "about-skills"}) {
      childMarkdownRemark {
        html
      }
    }
    lastPost: allFile(filter: {name: {regex: "/(?:project\\-)/"}}, limit: 1, sort: {order: ASC, fields: birthtime}) {
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
  }`)

  return data
}

export default useAboutData;