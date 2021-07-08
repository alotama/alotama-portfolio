import ApiClient from "../apolloClient"
import { gql } from "@apollo/client"

const ContactQuery = ApiClient.query({
  query: gql`query ContactQuery {
    page(where: {page: "Contacto"}) {
      title
      subtitle
    }
    contactInfos {
      title
      content
    }
  }`
});

export default ContactQuery
