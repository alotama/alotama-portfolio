import {useStaticQuery, graphql} from "gatsby"

const HeaderQuery = () => {
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

export default HeaderQuery;
