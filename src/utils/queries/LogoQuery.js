import {useStaticQuery, graphql} from "gatsby"

const LogoQuery = () => {
   const data = useStaticQuery(graphql`
       query LogoQuery {
           graphCmsAsset(id: {eq: "Asset:ckqlm1frsc41x0b747n53g097:es:PUBLISHED"}) {
               altText
               localFile {
                   childImageSharp {
                       gatsbyImageData(placeholder: NONE, layout: FIXED, width: 100)
                   }
               }
           }
           allGraphCmsPage(filter: {page: {ne: "Home"}}) {
               nodes {
                   page
                   slug
               }
           }
       }
   `)

   return data
}

export default LogoQuery;
