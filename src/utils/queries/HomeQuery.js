import { useStaticQuery, graphql } from "gatsby"

const HomeData = () => {
    const {graphcms} = useStaticQuery(graphql`
    query HomeQuery {
      graphcms {
        page(where: {page: "Home"}) {
          title
          subtitle
          primaryCta
          secondaryCta
        }
        posts {
          title
          url
          thumbnail {
            url
          }
          updatedAt
          excerpt
        }
        projects(where: {isFeatured: false}) {
          name
          tagline
          slug
          services {
            name
          }
          isFeatured
          featuredImage {
            url
            altText
          }
        }
      }
    }`)

    return graphcms
}

export default HomeData;
