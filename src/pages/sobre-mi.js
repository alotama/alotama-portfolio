import React from "react"
import SEO from "../components/SEO"
import loadable from '@loadable/component'

const HeroAbout = loadable(() => import(`../components/about/HeroAbout`));
const MainAbout = loadable(() => import(`../components/about/MainAbout`));
const Skills = loadable(() => import(`../components/about/Skills`));
const LatestWork = loadable(() => import(`../components/about/LatestWork`));

import useAboutData from '../utils/useStaticQueries/use-aboutData'
import '../assets/styles/scss/sections/about.scss'

const AboutPage = () => {
  const { about, social, skills, lastPost } = useAboutData()
  console.log('lastPost ->', lastPost)
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
      <aside className='lastWorks'>
        <div className='master-container'>
          <LatestWork
            href={lastPost.childMarkdownRemark.frontmatter.url}
            title={lastPost.childMarkdownRemark.frontmatter.title}
            source={lastPost.childMarkdownRemark.frontmatter.thumbnail}
            altText={lastPost.childMarkdownRemark.frontmatter.title}
          />
        </div>
      </aside>
    </>
  )
}

export default AboutPage
