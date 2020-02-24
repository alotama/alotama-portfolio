import React from "react"
import { graphql } from "gatsby"
import Layout from "../template/Layout"
import SEO from "../components/SEO"

import HeroAbout from "../components/about/HeroAbout"
import MainAbout from "../components/about/MainAbout"
import Skills from "../components/about/Skills"
import LatestWork from "../components/about/LatestWork"

export const query = graphql`
  query AboutQuery {
    about: ghostPage(slug: {eq: "sobre-mi"}) {
      id
      title
      slug
      meta_title
      meta_description
      canonical_url
      html
      published_at
      created_at
      updated_at
      og_image
    }
    social: file(name: {eq: "about-social"}) {
      childMarkdownRemark {
        html
      }
    }
    skills: file(name: {eq: "about-skills"}) {
      childMarkdownRemark {
        html
      }
    }
    lastPost: allGhostPost(sort: {fields: id, order: DESC}) {
      edges {
        node {
          title
          feature_image
          tags {
            name
          }
          ghostId
          canonical_url
        }
      }
    }
  }

`

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.about.title}
        description={data.about.meta_description}
        link={[
          {
            rel: "canonical",
            href: data.about.canonical_url,
          },
        ]}
        meta={[
          {
            property: "article:published_time",
            content: data.about.created_at,
          },
          {
            property: "article:modified_time",
            content: data.about.updated_at,
          },
          {
            property: "og:title",
            content: data.about.title,
          },
          {
            property: "og:url",
            content: data.about.canonical_url,
          },
          {
            property: "og:image",
            content: data.about.og_image,
          },
        ]}
      />
      <section id="hero__container">
        <HeroAbout
          title={"Sobre mí."}
          subtitle={"Un nikkei viviendo en Argentina."}
          content={data.social.childMarkdownRemark.html}
        />
      </section>
      <main id="main__container">
        <div className="master-container">
          <div className="master-container-padding">
            <div className="row">
              <MainAbout content={data.about.html} />
            </div>
            <Skills content={data.skills.childMarkdownRemark.html} />
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
