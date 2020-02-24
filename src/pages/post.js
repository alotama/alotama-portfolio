import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../template/Layout"
import SEO from "../components/SEO"
import postStyle from "../assets/scss/sections/post.module.scss"
import Prism from "prismjs"
import "prismjs/themes/prism.css"
import { Text } from "../components/assets/Title"
import Fade from "react-reveal/Fade"

export const query = graphql`
  query ArticleQuery($id: String) {
    ghostPost(id: { eq: $id }) {
      title
      canonical_url
      meta_title
      meta_description
      feature_image
      tags {
        name
      }
      published_at(formatString: "D [de] MMMM YYYY")
      created_at
      updated_at
      slug
      html
      ghostId
    }
  }
`

const post = props => {
  const { data } = props
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <Layout>
      <SEO
        title={data.ghostPost.meta_title}
        description={data.ghostPost.meta_description}
        link={[
          {
            rel: "canonical",
            href: data.ghostPost.canonical_url,
          },
        ]}
        meta={[
          {
            property: "article:section",
            content: data.ghostPost.tags[0].name,
          },
          {
            property: "article:published_time",
            content: data.ghostPost.created_at,
          },
          {
            property: "article:modified_time",
            content: data.ghostPost.updated_at,
          },
          {
            property: "og:type",
            content: data.ghostPost.tags[0].name,
          },
          {
            property: "og:title",
            content: data.ghostPost.meta_title,
          },
          {
            property: "og:url",
            content: data.ghostPost.slug,
          },
          {
            property: "og:image",
            content: data.ghostPost.feature_image,
          },
          {
            property: "og:image:secure_url",
            content: data.ghostPost.feature_image,
          },
        ]}
      />
      <div className={postStyle.articles__container}>
        <div className="master-container">
          <div className="master-container-padding">
            <section className="row">
              <div className="col-lg-offset-2 col-lg-8 col-xs-12">
                <Fade ssrFadeout top distance="15px">
                  <header className={postStyle.article__header}>
                    <div className={postStyle.article__details}>
                      <small className={postStyle.details__date}>
                        {data.ghostPost.published_at}
                      </small>
                    </div>
                    <div className={postStyle.article__title}>
                      <Text type="h1" title={data.ghostPost.title} />
                    </div>
                    <div className={postStyle.article_category}>
                      <span className={postStyle.details__category}>
                        Categoría: {data.ghostPost.tags[0].name}
                      </span>
                    </div>
                  </header>
                </Fade>
              </div>
            </section>
          </div>
        </div>
        <section className={postStyle.featuredImages__wrapper}>
          <div className="master-container">
            <Fade ssrFadeout top distance="15px" delay="250">
              <figure className={postStyle.featuredImages__content}>
                <img
                  srcSet={data.ghostPost.feature_image}
                  src={data.ghostPost.feature_image}
                />
              </figure>
            </Fade>
          </div>
        </section>
        <main className={postStyle.post__container}>
          <div className="master-container">
            <div className="master-container-padding">
              <div className="row">
                <div className="col-lg-offset-2 col-lg-8 col-xs-12">
                  <div
                    dangerouslySetInnerHTML={{ __html: data.ghostPost.html }}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default post
