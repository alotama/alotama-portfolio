import React, { useEffect } from "react"

import SEO from "../components/SEO"
import Prism from "prismjs"
import { Text } from "../components/assets/Title"

import "prismjs/themes/prism.css"
import "../assets/styles/scss/sections/post.scss"
import "../assets/styles/custom-prism.css"

const post = ({ pageContext }) => {
  const { data } = pageContext
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <>
      <SEO
        title={data.meta_title}
        description={data.meta_description}
        url={data.canonical_url}
        isBlogPost
      />
      <div className={"articles__container"}>
        <div className="master-container">
          <div className="layout__narrow-column">
            
              <header className={"article__header"}>
                <div className={"article__details"}>
                  <small className={"details__date"}>
                    {data.published_at}
                  </small>
                </div>
                <div className={"article__title"}>
                  <Text type="h1" title={data.title} />
                </div>
                <div className={"article_category"}>
                  <span className={"details__category"}>
                    Categoría: {data.tags[0].name}
                  </span>
                </div>
              </header>
          

          </div>
        </div>
        <section className={"featuredImages__wrapper"}>
          <div className="master-container">
            
              <figure className={"featuredImages__content"}>
                <img
                  srcSet={data.feature_image}
                  src={data.feature_image}
                />
              </figure>
           
          </div>
        </section>
        <main className={"post__container"}>
          <div className="master-container">
            <div className="layout__narrow-column">
              <div
                dangerouslySetInnerHTML={{ __html: data.html }}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default post
