import {useStaticQuery, graphql} from "gatsby"

const HeaderData = () => {
   const data = useStaticQuery(graphql`
       query HeaderQuery {
           allGraphCmsPage(filter: {page: {ne: "Home"}}, sort: {order: ASC, fields: order}) {
               nodes {
                   page
                   slug
               }
           }
       }
   `)

   return data
}

export default HeaderData;
