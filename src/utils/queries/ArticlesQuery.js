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
                   publicationDate
                   thumbnail {
                       localFile {
                           childImageSharp {
                               gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 304)
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
