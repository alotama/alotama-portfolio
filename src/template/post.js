import React, { useEffect } from "react"
import SEO from "../components/SEO"
import loadable from '@loadable/component'
import { graphql } from "gatsby"
import Prism from "prismjs"
import { Title, Text } from "../components/assets/Title"

import "prismjs/themes/prism.css"
import "../assets/styles/scss/sections/post.scss"
import "../assets/styles/custom-prism.css"
import "../components/PostItem/lastPosts.scss"

const PostItem = loadable(() => import('../components/PostItem'));

export const query = graphql`
  query ($id: String) {
    allGhostPost(limit: 3, sort: {order: DESC, fields: published_at}, filter: {id: {ne: $id}}) {
      edges {
        node {
          title
          slug
          featureImageSharp {
            childImageSharp {
              fluid(maxWidth: 310) {
                src
                srcSet
                sizes
              }
            }
          }
          excerpt
          id
        }
      }
    }
  }
`


const post = ({ data, pageContext }) => {
  const pageContextData = pageContext.data
  const lastPosts = data.allGhostPost

  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <>
      <SEO
        title={pageContextData.meta_title}
        description={pageContextData.meta_description}
        url={pageContextData.canonical_url}
        isBlogPost
      />
      <div className={"articles__container"}>
        <div className="master-container">
          <div className="layout__narrow-column">

            <header className={"article__header"}>
              <div className={"article__details"}>
                <small className={"details__date"}>
                  {pageContextData.published_at}
                </small>
              </div>
              <div className={"article__title"}>
                <Text type="h1" title={pageContextData.title} />
              </div>
              <div className={"article_category"}>
                <span className={"details__category"}>
                  Categoría: {pageContextData.tags[0].name}
                </span>
              </div>
            </header>


          </div>
        </div>
        <section className={"featuredImages__wrapper"}>
          <div className="master-container">

            <figure className={"featuredImages__content"}>
              <picture>
                <source
                    srcset={pageContextData.featureImageSharp.childImageSharp.fluid.srcSet}
                    sizes={pageContextData.featureImageSharp.childImageSharp.fluid.sizes} />
                <img src={pageContextData.featureImageSharp.childImageSharp.fluid.src} alt={pageContextData.title} />
              </picture>
            </figure>

          </div>
        </section>
        <main className={"post__container"}>
          <div className="master-container">
            <div className="layout__narrow-column">
              <div
                dangerouslySetInnerHTML={{ __html: pageContextData.html }}
              />
            </div>
          </div>
        </main>
        <aside className="lastPosts">
          <div className="master-container">
            <Title type="h2" title={'Otros artículos.'} className="last-posts__title" />
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
                    srcSet={article.node.featureImageSharp.childImageSharp.fluid.src}
                    sizes={article.node.featureImageSharp.childImageSharp.fluid.sizes}
                    altText={article.node.title}
                    excerpt={article.node.excerpt}
                    title={article.node.title}
                  />
                )
              })}
            </section>
          </div>
        </aside>
      </div>
    </>
  )
}

export default post
