import ApiClient from "../apolloClient"
import { gql } from "@apollo/client"

const AboutQuery = ApiClient.query({
  query: gql`query AboutQuery {
    page(where: {page: "Sobre mi"}) {
      title
      subtitle
      content {
        raw
      }
    }
    socialMedias {
      name
      url
    }
    skills {
      skill
    }
    projects(where: {isFeatured: true}) {
      slug
      tagline
      name
      services {
        name
      }
      featuredImage {
        altText
        url
      }
      isFeatured
    }
  }`
});

export default AboutQuery
