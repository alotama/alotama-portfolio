import React from "react"
import { graphql } from "gatsby"
import Layout from "../template/layout"
import SEO from "../components/seo"
import Hero from "../components/main/Hero"
import Main from "../components/main/Main"

export const query = graphql`
  query HomeQuery {
    projects: allSanityProject(
      limit: 5
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          id
          mainImage {
            alt
            caption
            asset {
              url
              fluid(maxHeight: 720, maxWidth: 960) {
                src
                srcSet
              }
            }
          }
          title
          linkTo
          categories {
            category
          }
        }
      }
    }
    home: sanityPages(title: { in: "Home" }) {
      description
      title
      _rawContent
    }
  }
`

const IndexPage = (props) => {
  const { data } = props
  return (
    <Layout>
      <SEO title={data.home.title} />
      <section id="hero__container">
        <Hero
          title={data.home._rawContent[0].heading}
          text={data.home._rawContent[0].text}
        />
      </section>
      <main id="main__container">
        <div className="master-container">
          <div className="master-container-padding">
            <div className="row" id="work">
              {data.projects.edges.map((work, index) => (
                <Main
                  key={index}
                  linkTo={work.node.linkTo}
                  source={work.node.mainImage.asset.fluid.src}
                  sourceSet={work.node.mainImage.asset.fluid.srcSet}
                  width={960}
                  height={480}
                  altText={work.node.mainImage.alt}
                  title={work.node.title}
                  category={work.node.categories[0].category.join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
