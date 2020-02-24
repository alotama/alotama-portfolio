import React from "react"
import { graphql } from "gatsby"
import Layout from "../template/Layout"
import SEO from "../components/SEO"
import Hero from "../components/main/Hero"
import Main from "../components/main/Main"

export const query = graphql`
  query HomeQuery {
    projects: allFile(filter: {name: {regex: "/(?:project\\-)/"}}, limit: 5) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              tags
              url
              thumbnail
            }
          }
        }
      }
    }
    home: ghostPage(slug: {eq: "home"}) {
      canonical_url
      meta_title
      meta_description
      title
      html
    }
  }
`

const IndexPage = props => {
  const { data } = props
  return (
    <Layout>
      <SEO title={data.home.meta_title} />
      <section id="hero__container">
        <Hero
          title={data.home.title}
          text={data.home.html}
        />
      </section>
      <main id="main__container">
        <div className="master-container">
          <div className="master-container-padding">
            <div className="row" id="work">
              {data.projects.edges.map((work, index) => (
                <Main
                  key={index}
                  linkTo={work.node.url}
                  source={work.node.childMarkdownRemark.frontmatter.thumbnail}
                  altText={work.node.childMarkdownRemark.frontmatter.title}
                  title={work.node.childMarkdownRemark.frontmatter.title}
                  category={work.node.childMarkdownRemark.frontmatter.tags}
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
