import ApiClient from "../apolloClient"
import { gql } from "@apollo/client"

const ArticleQuery = ApiClient.query({
  query: gql`query ArticleQuery {
    page(where: {page: "Articulos"}) {
      title
      subtitle
      primaryCta
    }
    posts {
      title
      excerpt
      publicationDate
      url
      thumbnail {
        url
        altText
      }
     seo {
        ogImage {
          url
        }
     }
    }
  }`
});

export default ArticleQuery
