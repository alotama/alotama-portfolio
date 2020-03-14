import React from "react"
import loadable from '@loadable/component'
import useHomeData from '../utils/useStaticQueries/use-homeData';
import SEO from "../components/SEO"
import { Title } from "../components/assets/Title"
import '../assets/styles/scss/sections/home.scss'

const Hero = loadable(() => import(`../components/main/Hero`));
const ProjectItem = loadable(() => import(`../components/ProjectItem`));
const PostItem = loadable(() => import('../components/PostItem'));

const IndexPage = () => {
  const { home, projects, lastPosts } = useHomeData()
  return (
    <>
      <SEO
        title={home.meta_title}
        description={home.meta_description}
        url={home.canonical_url}
        isPage
      />
      <section id="hero__container">
        <Hero
          title={home.title}
          text={home.html}
          className={"hero__title"}
        />
      </section>
      <main className="master-container">
        <section className="home__last-posts">
          <Title type="h2" title={'Artículos.'} className="last-posts__title" />
          <section className="last-posts__container">
            {lastPosts.edges.map((article, index) => {
              return (
                <PostItem
                  onUse={false}
                  className={"last-posts__item"}
                  slug={article.node.slug}
                  key={index}
                  id={article.node.id}
                  source={article.node.featureImageSharp.childImageSharp.fluid.src}
                  sourceSet={article.node.featureImageSharp.childImageSharp.fluid.srcSet}
                  sizes={article.node.featureImageSharp.childImageSharp.fluid.sizes}
                  altText={article.node.title}
                  excerpt={article.node.excerpt}
                  title={article.node.title}
                />
              )
            })}
          </section>
        </section>
        <section className="home__projects" id="work">
          <Title type="h2" title={'Portfolio.'} className="projects__title" />
          <section className="projects__container">
            {projects.edges.map((work, index) => (
              <ProjectItem
                key={index}
                linkTo={work.node.url}
                source={work.node.childMarkdownRemark.frontmatter.thumbnail.childImageSharp.fluid.src}
                sourceSet={work.node.childMarkdownRemark.frontmatter.thumbnail.childImageSharp.fluid.srcSet}
                sizes={work.node.childMarkdownRemark.frontmatter.thumbnail.childImageSharp.fluid.sizes}
                altText={work.node.childMarkdownRemark.frontmatter.title}
                title={work.node.childMarkdownRemark.frontmatter.title}
                category={work.node.childMarkdownRemark.frontmatter.tags}
              />
            ))}
          </section>
        </section>
    </main>
    </>
  )
}

export default IndexPage
