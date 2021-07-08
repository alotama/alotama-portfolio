import { useStaticQuery, graphql } from "gatsby"

const FeaturedProjectData = () => {
    const {graphcms} = useStaticQuery(graphql`{
      graphcms {
        projects(where: {isFeatured: true}) {
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

export default FeaturedProjectData;
