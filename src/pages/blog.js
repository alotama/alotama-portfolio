import React from "react"
import { graphql } from "gatsby"
import Layout from "../template/layout"
import SEO from "../components/seo"
import blogStyle from "../assets/scss/sections/blog.module.scss"

import PostItem from "../components/blog/PostItem"
import HighlightPost from "../components/blog/HighlightPost"
import { Text } from "../components/assets/Title"
import Fade from "react-reveal/Fade"

export const query = graphql`
  query BlogQuery {
    blog: sanityPages(title: { in: "Blog" }) {
      title
      description
    }
    posts: allSanityBlog(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          title
          excerpt
          id
          mainImage {
            alt
            caption
            asset {
              fluid(maxWidth: 960, maxHeight: 480) {
                src
                srcSet
              }
            }
          }
          categories {
            category
          }
          slug {
            current
          }
        }
      }
    }
  }
`

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.blog.title} />
      <main className={blogStyle.highlightPost_wrapper}>
        <div className="master-container">
          <div className="master-container-padding">
            <HighlightPost
              id={data.posts.edges[0].node.id}
              slug={data.posts.edges[0].node.slug.current}
              src={data.posts.edges[0].node.mainImage.asset.fluid.src}
              title={data.posts.edges[0].node.title}
              category={data.posts.edges[0].node.categories[0].category[0]}
            />
          </div>
        </div>
      </main>
      <section className={blogStyle.blogGrid_wrapper}>
        <div className="master-container">
          <div className="master-container-padding">
            <Fade top distance="15px" delay={250}>
              <article className={blogStyle.blogGrid_title}>
                <Text type="h1" title="Más artículos." />
              </article>
            </Fade>
            <section className={blogStyle.blogGrid_moreRecent}>
              {data.posts.edges.slice(1, 5).map((article, index) => {
                return (
                  <Fade
                    top
                    distance="15px"
                    delay={150 * (index * 2)}
                    key={index * 2}
                  >
                    <PostItem
                      id={article.node.id}
                      onUse={false}
                      width={470}
                      height={320}
                      slug={article.node.slug.current}
                      key={index}
                      source={article.node.mainImage.asset.fluid.src}
                      sourceSet={article.node.mainImage.asset.fluid.srcSet}
                      altText={article.node.mainImage.alt}
                      excerpt={article.node.excerpt}
                      title={article.node.title}
                    />
                  </Fade>
                )
              })}
            </section>

            <section className={blogStyle.blogGrid_oldPost}>
              {data.posts.edges.slice(5).map((article, index) => {
                return (
                  <Fade
                    top
                    distance="15px"
                    delay={150 * (index * 2)}
                    key={index * 2}
                  >
                    <PostItem
                      key={index}
                      onUse={true}
                      width={308}
                      height={205}
                      id={article.node.id}
                      slug={article.node.slug.current}
                      source={article.node.mainImage.asset.fluid.src}
                      sourceSet={article.node.mainImage.asset.fluid.srcSet}
                      altText={article.node.mainImage.alt}
                      excerpt={article.node.excerpt}
                      title={article.node.title}
                    />
                  </Fade>
                )
              })}
            </section>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default blog
