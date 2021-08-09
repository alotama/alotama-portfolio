import React from 'react';
import DefaultLayout from "../../layouts";
import AboutQuery from "../../utils/queries/AboutQuery";
import parse from 'html-react-parser';
import BrandCircle from "../../components/Icons/circle";
import FeaturedProjectQuery from "../../utils/queries/FeaturedProject";
import ProjectCluster from "../../components/projectCluster";
import '../../styles/pages/about.scss'

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
                        <p className="subtitle">
                           {page.subtitle}
                        </p>
                     </div>
                     <div className="column is-full">
                        <ul className="socialMedias">
                           {social.nodes.map((item, index) => (
                              <li className="socialMedia-item" key={`${item.name}-${index}`}>
                                 <a href={item.url}>
                                    {item.name}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </section>
            <section className={"section intention-about"}>
               <div className="columns">
                  <div className="column is-10 intention-first">
                     <article className={"content"}>
                        {parse(page.content.html)}
                     </article>
                  </div>
                  <div className="column intention-circle">
                     <BrandCircle/>
                  </div>
               </div>
            </section>
            <section className="section skills">
               <h2 className="title">Herramientas</h2>
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
