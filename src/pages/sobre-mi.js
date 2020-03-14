import React from "react"
import SEO from "../components/SEO"
import loadable from '@loadable/component'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const HeroAbout = loadable(() => import(`../components/about/HeroAbout`));
const MainAbout = loadable(() => import(`../components/about/MainAbout`));
const Skills = loadable(() => import(`../components/about/Skills`));
const LatestWork = loadable(() => import(`../components/about/LatestWork`));

import useAboutData from '../utils/useStaticQueries/use-aboutData'
import '../assets/styles/scss/sections/about.scss'
import '../components/ProjectItem/projectItem.scss'

const AboutPage = () => {
  const { about, social, skills, lastPost } = useAboutData()
  return (
    <>
      <SEO
        title={about.title}
        description={about.meta_description}
        url={about.canonical_url}
        isPage
      />
      <section id="hero__container">
        <HeroAbout
          title={"Sobre mí."}
          subtitle={"Un nikkei viviendo en Argentina."}
          content={social.childMarkdownRemark.html}
        />
      </section>
      <main className='master-container'>
        <div className="layout__narrow-column">
          <MainAbout content={about.html} />
        </div>
        <Skills content={skills.childMarkdownRemark.html} />
      </main>
      <LazyLoadComponent
        height={600}
        width={1000}
      >
        <aside className='lastWorks'>
          <div className='master-container'>
            <LatestWork
              href={lastPost.edges[0].node.childMarkdownRemark.frontmatter.url}
              title={lastPost.edges[0].node.childMarkdownRemark.frontmatter.title}
              source={lastPost.edges[0].node.childMarkdownRemark.frontmatter.thumbnail.childImageSharp.fluid.src}
              sourceSet={lastPost.edges[0].node.childMarkdownRemark.frontmatter.thumbnail.childImageSharp.fluid.srcSet}
              sizes={lastPost.edges[0].node.childMarkdownRemark.frontmatter.thumbnail.childImageSharp.fluid.sizes}
              altText={lastPost.edges[0].node.childMarkdownRemark.frontmatter.title}
            />
          </div>
        </aside>
      </LazyLoadComponent>
    </>
  )
}

export default AboutPage
