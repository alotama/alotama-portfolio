import { useStaticQuery, graphql } from "gatsby"

const ProjectData = () => {
   const data = useStaticQuery(graphql`
       query ProjectQuery {
           graphCmsPage(page: {eq: "Proyectos"}) {
               title
           }
           allGraphCmsService(limit: 2) {
               nodes {
                   name
               }
           }
           allGraphCmsProject {
               nodes {
                   slug
                   name
                   isFeatured
                   tagline
                   services {
                       name
                   }
                   featuredImage {
                       localFile {
                           childImageSharp {
                               gatsbyImageData(
                                   placeholder: BLURRED
                                   layout: CONSTRAINED
                                   width: 640
                                   height: 360
                               )
                           }
                       }
                   }
               }
           }
       }

   `)

   return data
}

export default ProjectData;
