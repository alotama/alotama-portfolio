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
    `)

    return data
}

export default FeaturedProjectQuery;
