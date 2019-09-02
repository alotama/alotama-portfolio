import React from "react"
import { graphql } from "gatsby"
import Layout from "../template/Layout"
import SEO from "../components/SEO"
import postStyle from "../assets/scss/sections/post.module.scss"
import { Text } from "../components/assets/Title"
import BodyContent from "../components/assets/BodyContent"
import Fade from "react-reveal/Fade"

export const query = graphql`
  query ArticleQuery($id: String) {
    sanityBlog(id: { eq: $id }) {
      title
      mainImage {
        alt
        caption
        asset {
          fluid(maxWidth: 1000, maxHeight: 420, toFormat: JPG) {
            src
            srcSet
          }
        }
      }
      categories {
        category
      }
      _rawBody
      publishedAt(formatString: "D [de] MMMM YYYY")
      slug {
        current
      }
      _updatedAt
      _createdAt
    }
  }
`

const post = props => {
  const { data } = props
  return (
    <Layout>
      <SEO
        title={data.sanityBlog.title}
        description={data.sanityBlog.excerpt}
        link={[
          {
            rel: 'canonical',
            href: `https://alotama.com/blog/${data.sanityBlog.slug.current}`
          }
        ]}
        meta={[
          {
            property: "article:section",
            content: data.sanityBlog.categories[0].category,
          },
          {
            property: "article:published_time",
            content: data.sanityBlog._createdAt,
          },
          {
            property: "article:modified_time",
            content: data.sanityBlog._updatedAt,
          },
          {
            property: "og:type",
            content: data.sanityBlog.categories[0].category[0],
          },
          {
            property: "og:title",
            content: data.sanityBlog.title,
          },
          {
            property: "og:url",
            content: `https://alotama.com/blog/${data.sanityBlog.slug.current}`,
          },
          {
            property: "og:image",
            content: data.sanityBlog.mainImage.asset.fluid.src
          },
          {
            property: "og:image:secure_url",
            content: data.sanityBlog.mainImage.asset.fluid.src
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
                        {data.sanityBlog.publishedAt}
                      </small>
                    </div>
                    <div className={postStyle.article__title}>
                      <Text type="h1" title={data.sanityBlog.title} />
                    </div>
                    <div className={postStyle.article_category}>
                      <span className={postStyle.details__category}>
                        Categoría: {data.sanityBlog.categories[0].category[0]}
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
                  srcSet={data.sanityBlog.mainImage.asset.fluid.srcSet}
                  src={data.sanityBlog.mainImage.asset.fluid.src}
                  alt={data.sanityBlog.mainImage.alt}
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
                  <BodyContent blocks={data.sanityBlog._rawBody} />
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
