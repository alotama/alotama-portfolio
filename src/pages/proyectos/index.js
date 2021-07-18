import React, {useState} from 'react';
import ProjectQuery from "../../utils/queries/ProjectQuery";
import DefaultLayout from "../../layouts";
import {Link} from "gatsby";
import ProjectCluster from "../../components/projectCluster";

const ProjectPage = (props) => {
   const {graphCmsPage: page, allGraphCmsService: services, allGraphCmsProject: projects} = ProjectQuery()
   const [categorySelected, setCategorySelected] = useState('')

   return (
      <DefaultLayout page={"project"}>
         <div className="container is-max-desktop">
            <section className="hero is-fullheight-with-navbar">
               <div className="hero-body">
                  <div className="columns is-multiline">
                     <div className={"column is-full"}>
                        <p className="title">
                           {page.title}
                        </p>
                     </div>
                     <div className={"column is-full"}>
                        <p className="subtitle"
                           onClick={() => setCategorySelected(!categorySelected)}>
                           {categorySelected ? services.nodes[0].name : services.nodes[1].name}
                        </p>
                     </div>
                     <div className="column is-full">
                        <Link to={'#all-projects'} className={"button"}>Ver todos</Link>
                     </div>
                  </div>
               </div>
            </section>
            <section className="section" id={'all-projects'}>
               {projects && projects.nodes.map((project, index) => (
                  <ProjectCluster
                     featured={project.isFeatured}
                     compact={true}
                     title={project.name}
                     slug={project.slug}
                     subtitle={project.tagline}
                     imageSrc={project.featuredImage.localFile.childImageSharp.gatsbyImageData}
                     altText={project.featuredImage.altText}
                     workType={project.services}
                  />
               ))}
            </section>
         </div>
      </DefaultLayout>
   )
};

export default ProjectPage;
