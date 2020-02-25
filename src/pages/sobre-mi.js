import React from "react"
import { graphql } from "gatsby"
import Layout from "../template/Layout"
import SEO from "../components/SEO"

import HeroAbout from "../components/about/HeroAbout"
import MainAbout from "../components/about/MainAbout"
import Skills from "../components/about/Skills"
import LatestWork from "../components/about/LatestWork"
import useAboutData from '../utils/use-aboutData'

const AboutPage = ({ data }) => {
  const { about, social, skills, lastPost } = useAboutData()
  return (
    <Layout>
      <SEO
        title={about.title}
        description={about.meta_description}
        link={[
          {
            rel: "canonical",
            href: about.canonical_url,
          },
        ]}
      />
      <section id="hero__container">
        <HeroAbout
          title={"Sobre mí."}
          subtitle={"Un nikkei viviendo en Argentina."}
          content={social.childMarkdownRemark.html}
        />
      </section>
      <main id="main__container">
        <div className="master-container">
          <div className="master-container-padding">
            <div className="row">
              <MainAbout content={about.html} />
            </div>
            <Skills content={skills.childMarkdownRemark.html} />
            {/* <LatestWork
              href={data.lastPost.edges[0].node.canonical_url}
              title={data.lastPost.edges[0].node.title}
              source={data.lastPost.edges[0].node.mainImage.asset.fluid.src}
              sourceSet={
                data.lastPost.edges[0].node.mainImage.asset.fluid.srcSet
              }
              altText={data.lastPost.edges[0].node.mainImage.caption}
            /> */}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage
