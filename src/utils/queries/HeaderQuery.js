import {useStaticQuery, graphql} from "gatsby"

const HeaderQuery = () => {
   const data = useStaticQuery(graphql`
       query HeaderQuery {
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

export default HeaderQuery;
