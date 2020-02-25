import React from "react"
import { graphql } from "gatsby"
import Layout from "../template/Layout"
import SEO from "../components/SEO"
import blogStyle from "../assets/scss/sections/blog.module.scss"

import PostItem from "../components/blog/PostItem"
import HighlightPost from "../components/blog/HighlightPost"
import { Text } from "../components/assets/Title"
import Fade from "react-reveal/Fade"
import useBlogData from '../utils/use-blogData'

const blog = () => {
  const { blog, posts } = useBlogData()
  return (
    <Layout>
      <SEO title={blog.title} description={blog.description} />
      <main className={blogStyle.highlightPost_wrapper}>
        <div className="master-container">
          <div className="master-container-padding">
            <HighlightPost
              id={posts.edges[0].node.id}
              slug={posts.edges[0].node.slug}
              src={posts.edges[0].node.feature_image}
              title={posts.edges[0].node.title}
              category={posts.edges[0].node.tags[0].name[0]}
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
              {posts.edges.slice(1, 5).map((article, index) => {
                return (
                  <Fade
                    top
                    distance="15px"
                    delay={150 * (index * 2)}
                    key={index * 2}
                  >
                    <PostItem
                      id={article.node.ghostId}
                      onUse={false}
                      width={470}
                      height={320}
                      slug={article.node.slug}
                      key={index}
                      id={article.node.id}
                      source={article.node.feature_image}
                      sourceSet={article.node.feature_image}
                      altText={article.node.title}
                      excerpt={article.node.excerpt}
                      title={article.node.title}
                    />
                  </Fade>
                )
              })}
            </section>

            <section className={blogStyle.blogGrid_oldPost}>
              {posts.edges.slice(5).map((article, index) => {
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
                      slug={article.node.slug}
                      key={index}
                      id={article.node.id}
                      source={article.node.feature_image}
                      sourceSet={article.node.feature_image}
                      altText={article.node.title}
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
