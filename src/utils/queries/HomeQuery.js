import { useStaticQuery, graphql } from "gatsby"

const HomeData = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      graphCmsPage(page: {eq: "Home"}) {
        title
        subtitle
        primaryCta
        secondaryCta
      }
      allGraphCmsPost(limit: 3) {
        nodes {
          title
          excerpt
          publicationDate
          url
          thumbnail {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FIXED
                  width: 304
                )
              }
            }
          }
        }
      }
      allGraphCmsProject(limit: 3, filter: {isFeatured: {eq: false}}) {
        nodes {
          slug
          name
          isFeatured
          tagline
          services {
            name
          }
          featuredImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  width: 640
                  height: 360
                )
              }
            }
          }
        }
      }
    }
  `)

  return data
}

export default HomeData;
