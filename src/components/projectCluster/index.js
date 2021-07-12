import React from 'react'
import {Link} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const ProjectCluster = ({featured, compact, title, slug, subtitle, imageSrc, altText, workType}) => {
   return (
      <article className={"projectCluster"}>
         <Link to={slug}>
            <div className="card">
               <div className="card-header">
                  {featured && <span className="projectCluster--featured">Proyecto destacado</span>}
                  <h2 className="card-header-title">{title}</h2>
                  <h3 className="card-header-subtitle">{subtitle}</h3>
                  <ul className="card-content">
                     {workType && workType.map((element, index) => (
                        <li key={`${element.name}-${index}`}>{element.name}</li>
                     ))}
                  </ul>
               </div>
               <figure className="card-image">
                  <GatsbyImage alt={altText} image={imageSrc}/>
               </figure>
            </div>
         </Link>
      </article>
   )
}

export default ProjectCluster
