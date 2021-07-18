import React from 'react';
import DefaultLayout from "../../layouts";
import {Link} from "gatsby";
import AboutQuery from "../../utils/queries/AboutQuery";
import '../../styles/pages/about.scss'
import parse from 'html-react-parser';
import {GatsbyImage} from "gatsby-plugin-image";
import BrandCircle from "../../components/Icons/circle";
import FeaturedProjectQuery from "../../utils/queries/FeaturedProject";
import ProjectCluster from "../../components/projectCluster";

const AboutPage = (props) => {
   const {graphCmsPage: page, allGraphCmsSocialMedia: social, allGraphCmsSkill: skills} = AboutQuery()
   const { graphCmsProject: featuredProject } = FeaturedProjectQuery()
   return (
      <DefaultLayout page={'about'}>
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
                        <p className="subtitle">
                           {page.subtitle}
                        </p>
                     </div>
                     <div className="column is-full">
                        <ul className="socialMedias">
                           {social.nodes.map((item, index) => (
                              <li className="socialMedia-item" key={`${item.name}-${index}`}>
                                 <Link to={item.url}>
                                    {item.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </section>
            <section className={"section intention-about"}>
               <div className="columns">
                  <div className="column">
                     <article className={"content"}>
                        {parse(page.content.html)}
                     </article>
                  </div>
                  <div className="column">
                     <BrandCircle/>
                  </div>
               </div>
            </section>
            <section className="section">
               <div className="colums">
                  <div className="column">
                     <h2 className="title">Herramientas</h2>
                  </div>
               </div>
               <article className="section">
                  <ul className="skill-list">
                     {skills.nodes.map((skill, index) => (
                        <li className="skills-item" key={index}>
                           {skill.skill}
                        </li>
                     ))}
                  </ul>
               </article>
            </section>
            <section className="section">
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
         </div>
      </DefaultLayout>
   )
};

export default AboutPage;
