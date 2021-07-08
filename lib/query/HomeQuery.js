import ApiClient from "../apolloClient"
import { gql } from "@apollo/client"

const HomeQuery = ApiClient.query({
  query: gql`query HomeQuery {
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
      projects {
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
    }`
});

export default HomeQuery
