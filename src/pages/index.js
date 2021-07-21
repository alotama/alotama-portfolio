import * as React from "react"
import HomeData from '../utils/queries/HomeQuery'
import {Link} from "gatsby";
import ProjectCluster from "../components/projectCluster";
import FeaturedProjectQuery from "../utils/queries/FeaturedProject";
import PostCluster from "../components/postCluster";
import DefaultLayout from "../layouts";
import '../styles/pages/home.scss'

const IndexPage = () => {
   const {graphCmsPage: page, allGraphCmsPost: posts, allGraphCmsProject: projects} = HomeData()
   const {graphCmsProject: featuredProject} = FeaturedProjectQuery()
   return (
      <DefaultLayout page={"home"}>
         <section className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                  <div className="columns is-centered has-text-centered">
                     <div className={"column is-8"}>
                        <p className="title">
                           {page.title}
                        </p>
                     </div>
                  </div>
                  <div className="columns is-centered has-text-centered">
                     <div className={"column is-7"}>
                        <p className="subtitle">
                           {page.subtitle}
                        </p>
                     </div>
                  </div>
                  <div className="columns is-centered">
                     <div className="column is-narrow">
                        <Link to={'/proyectos'} className={"button is-primary"}>{page.primaryCta}</Link>
                     </div>
                     <div className="column is-narrow">
                        <Link to={'/proyectos'} className={"button is-secondary"}>{page.secondaryCta}</Link>
                     </div>
                  </div>

            </div>
         </section>
         <section className="container is-max-desktop">
            <section className="featuredProject-section">
               <ProjectCluster
                  featured={featuredProject.isFeatured}
                  compact={false}
                  title={featuredProject.name}
                  slug={featuredProject.slug}
                  subtitle={featuredProject.tagline}
                  imageSrc={featuredProject.featuredImage.localFile.childImageSharp.gatsbyImageData}
                  altText={featuredProject.featuredImage.altText}
                  workType={featuredProject.services}
               />
            </section>
            <section className={"lasts-posts-section"}>
               <h2 className={"title is-3 section-title"}>Últimos artículos</h2>
               <div className={"columns is-variable is-2"}>
                  {posts && posts.nodes.map((post, index) => (
                     <article
                        className="column is-one-third"
                        key={`${post.url}-${index}`}>
                        <PostCluster
                           slug={post.url}
                           altText={post.thumbnail.altText}
                           imageSrc={post.thumbnail.localFile.childImageSharp.gatsbyImageData}
                           title={post.title}
                           excerpt={post.excerpt}
                           publishDate={post.publicationDate}
                           duration={'10 minutos'}
                        />
                     </article>
                  ))}
               </div>
            </section>
            <section className="projects-section">
               {projects && projects.nodes.map((project, index) => (
                  <ProjectCluster
                     key={`${project.name}-${index}`}
                     featured={project.isFeatured}
                     compact={false}
                     title={project.name}
                     slug={project.slug}
                     subtitle={project.tagline}
                     imageSrc={project.featuredImage.localFile.childImageSharp.gatsbyImageData}
                     altText={project.featuredImage.altText}
                     workType={project.services}
                  />
               ))}
            </section>
         </section>
      </DefaultLayout>
   )
}

export default IndexPage
