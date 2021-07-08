import { useStaticQuery, graphql } from "gatsby"

const FeaturedProjectQuery = () => {
    const data = useStaticQuery(graphql`
        query FeaturedProjectQuery {
            graphCmsProject(isFeatured: {eq: true}) {
                name
                tagline
                slug
                isFeatured
                services {
                    name
                }
                featuredImage {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    `)

    return data
}

export default FeaturedProjectQuery;
