import React from "react"
import Layout from "../template/Layout"
import SEO from "../components/SEO"
import Hero from "../components/main/Hero"
import Main from "../components/main/Main"
import useHomeData from '../utils/use-homeData';

const IndexPage = () => {
  const { home, projects } = useHomeData()
  return (
    <Layout>
      <SEO title={home.meta_title} />
      <section id="hero__container">
        <Hero
          title={home.title}
          text={home.html}
        />
      </section>
      <main id="main__container">
        <div className="master-container">
          <div className="master-container-padding">
            <div className="row" id="work">
              {projects.edges.map((work, index) => (
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
