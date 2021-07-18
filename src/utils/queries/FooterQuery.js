import {useStaticQuery, graphql} from "gatsby"

const FooterData = () => {
   const data = useStaticQuery(graphql`
       query FooterQuery {
           allGraphCmsSocialMedia {
               nodes {
                   url
                   name
               }
           }
       }
   `)

   return data
}

export default FooterData;
