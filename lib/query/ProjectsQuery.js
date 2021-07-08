import ApiClient from "../apolloClient"
import { gql } from "@apollo/client"

const ProjectQuery = ApiClient.query({
  query: gql`query ProjectQuery {
    page(where: {page: "Proyectos"}) {
      title
    }
    services {
      name
    }
    projects {
      name
      tagline
      slug
      services {
        name
      }
      featuredImage {
        url
        altText
      }
    }
  }`
});

export default ProjectQuery
