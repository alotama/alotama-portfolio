import { useStaticQuery, graphql } from "gatsby"

const AboutData = () => {
   const data = useStaticQuery(graphql`
       query AboutPage {
           graphCmsPage(page: {eq: "Sobre mi"}) {
               title
               subtitle
               content {
                   html
               }
           }
           allGraphCmsSocialMedia(sort: {fields: name, order: ASC}) {
               nodes {
                   name
                   url
               }
           }
           allGraphCmsSkill {
               nodes {
                   skill
               }
           }
       }
   `)

   return data
}

export default AboutData;
