import React from "react"
import SEO from "../components/SEO"
import loadable from '@loadable/component'
import { Text } from "../components/assets/Title"
import useBlogData from '../utils/useStaticQueries/use-blogData'
import "../assets/styles/scss/sections/blog.scss"
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const PostItem = loadable(() => import(`../components/PostItem`));
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
            src={posts.edges[0].node.featureImageSharp.childImageSharp.fluid.src}
            title={posts.edges[0].node.title}
            category={posts.edges[0].node.tags[0].name}
          />
        </div>
      </main>
      <section className={"blogGrid_wrapper"}>
        <div className="master-container">


          <article className={"blogGrid_title"}>
            <Text type="h1" title="Más artículos del blog." />
          </article>

          <section className={"blogGrid_moreRecent"}>
            {posts.edges.slice(1, 5).map((article, index) => {
              return (
                <LazyLoadComponent>
                  <PostItem
                    id={article.node.ghostId}
                    onUse={false}
                    slug={article.node.slug}
                    key={index}
                    id={article.node.id}
                    source={article.node.featureImageSharp.childImageSharp.fluid.src}
                    sourceSet={article.node.featureImageSharp.childImageSharp.fluid.src}
                    sizes={article.node.featureImageSharp.childImageSharp.fluid.sizes}
                    altText={article.node.title}
                    excerpt={article.node.excerpt}
                    title={article.node.title}
                  />
                </LazyLoadComponent>
              )
            })}
          </section>

          <section className={"blogGrid_oldPost"}>
            {posts.edges.slice(5).map((article, index) => {
              return (
                <LazyLoadComponent>
                  <PostItem
                    key={index}
                    onUse={true}
                    slug={article.node.slug}
                    key={index}
                    id={article.node.id}
                    source={article.node.featureImageSharp.childImageSharp.fluid.src}
                    sourceSet={article.node.featureImageSharp.childImageSharp.fluid.src}
                    sizes={article.node.featureImageSharp.childImageSharp.fluid.sizes}
                    altText={article.node.title}
                    excerpt={article.node.excerpt}
                    title={article.node.title}
                  />
                </LazyLoadComponent>

              )
            })}
          </section>
        </div>

      </section>
    </>
  )
}

export default blog
