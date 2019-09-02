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
    about: sanityPages(title: { in: "Sobre mí" }) {
      title
  		slug {
  		  current
  		}
      description
  		opengraph {
        alt
        asset {
          url
        }
      }
      _rawContent
    }
    project: allSanityProject(
      sort: { fields: publishedAt, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          title
          linkTo
          mainImage {
            caption
            alt
            asset {
              fluid(maxWidth: 1000, maxHeight: 420, toFormat: JPG) {
                src
                srcSet
              }
            }
          }
          categories {
            category
          }
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
        description={data.about.description}
        link={[
          {
            rel: "canonical",
            href: `https://alotama.com/${data.about.slug.current}`,
          },
        ]}
        meta={[
          {
            property: "article:published_time",
            content: data.about._createdAt,
          },
          {
            property: "article:modified_time",
            content: data.about._updatedAt,
          },
          {
            property: "og:title",
            content: data.about.title,
          },
          {
            property: "og:url",
            content: `https://alotama.com/${data.about.slug.current}`,
          },
          {
            property: "og:image",
            content: data.about.opengraph.asset.url,
          },
        ]}
      />
      <section id="hero__container">
        <HeroAbout
          title={data.about._rawContent[0].heading}
          subtitle={data.about._rawContent[0].subheading}
          content={data.about._rawContent[0].text}
        />
      </section>
      <main id="main__container">
        <div className="master-container">
          <div className="master-container-padding">
            <div className="row">
              <MainAbout content={data.about._rawContent[1].text} />
            </div>
            <Skills array={data.about._rawContent[2].skills} />
            <LatestWork
              href={data.project.edges[0].node.linkTo}
              title={data.project.edges[0].node.title}
              source={data.project.edges[0].node.mainImage.asset.fluid.src}
              sourceSet={
                data.project.edges[0].node.mainImage.asset.fluid.srcSet
              }
              altText={data.project.edges[0].node.mainImage.caption}
            />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage
