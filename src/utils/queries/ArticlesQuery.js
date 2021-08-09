import { useStaticQuery, graphql } from "gatsby"

const ArticleData = () => {
   const data = useStaticQuery(graphql`
       query ArticleQuery {
           graphCmsPage(page: {eq: "Articulos"}) {
               title
               subtitle
               primaryCta
           }
           allGraphCmsPost {
               nodes {
                   title
                   url
                   excerpt
                   duration
                   formattedPublicationDate
                   thumbnail {
                       localFile {
                           childImageSharp {
                               gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 290)
                           }
                       }
                   }
                   seo {
                       ogImage {
                           localFile {
                               childImageSharp {
                                   gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 325)
                               }
                           }
                       }
                   }
               }
           }
       }
   `)

   return data
}

export default ArticleData;
