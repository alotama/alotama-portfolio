import React from "react"
import loadable from '@loadable/component'
import useHomeData from '../utils/use-homeData';
import SEO from "../components/SEO"

const Hero = loadable(() => import(`../components/main/Hero`));
const Main = loadable(() => import(`../components/main/Main`));

const IndexPage = () => {
  const { home, projects } = useHomeData()
  return (
    <>
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
    </>
  )
}

export default IndexPage
