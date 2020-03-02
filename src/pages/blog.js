import React from "react"
import SEO from "../components/SEO"
import loadable from '@loadable/component'
import { Text } from "../components/assets/Title"
import useBlogData from '../utils/use-blogData'
import "../assets/styles/scss/sections/blog.scss"

const PostItem = loadable(() => import(`../components/blog/PostItem`));
const HighlightPost = loadable(() => import(`../components/blog/HighlightPost`));


const blog = () => {
  const { blog, posts } = useBlogData()
  return (
    <>
      <SEO
        title={blog.title}
        description={blog.meta_description}
        url={blog.canonical_url}
        isPage
      />
      <main className={"highlightPost_wrapper"}>
        <div className="master-container">

            <HighlightPost
              id={posts.edges[0].node.id}
              slug={posts.edges[0].node.slug}
              src={posts.edges[0].node.feature_image}
              title={posts.edges[0].node.title}
              category={posts.edges[0].node.tags[0].name}
            />
          </div>
        
      </main>
      <section className={"blogGrid_wrapper"}>
        <div className="master-container">

           
              <article className={"blogGrid_title"}>
                <Text type="h2" title="Más artículos." />
              </article>
           
            <section className={"blogGrid_moreRecent"}>
              {posts.edges.slice(1, 5).map((article, index) => {
                return (
                  
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
                  
                )
              })}
            </section>

            <section className={"blogGrid_oldPost"}>
              {posts.edges.slice(5).map((article, index) => {
                return (
                 
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
                  
                )
              })}
            </section>
          </div>

      </section>
    </>
  )
}

export default blog
