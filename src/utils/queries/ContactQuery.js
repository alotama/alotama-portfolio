import { useStaticQuery, graphql } from "gatsby"

const AboutData = () => {
   const data = useStaticQuery(graphql`
       query ContactQuery {
           graphCmsPage(page: {eq: "Contacto"}) {
               title
               subtitle
           }
           allGraphCmsContactInfo {
               nodes {
                   title
                   content
               }
           }
       }
   `)

   return data
}

export default AboutData;
