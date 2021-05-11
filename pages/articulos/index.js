import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/button'
import ArticleCluster from '../../components/articleCluster'
import styles from '../../styles/pages/articles.module.scss'
import Image from 'next/image'
import { getAllPosts } from '../../lib/api'
import MediaQuery from 'react-responsive'

const ArticlesPage = ({ allPosts }) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <Layout>
      <section className={styles.lastArticle}>
        <article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={styles.lastArticle_post}>
          <div className={styles.lastArticleSection}>
            <h2 className={styles.lastArticleSection_title}>Última publicación</h2>
          </div>
          <div className={styles.lastArticle_content}>
            <small className={styles.lastArticle_detail} layoutId="date">{heroPost.date}</small>
            <h1 className={styles.lastArticle_title} layoutId="title">{heroPost.title}</h1>
            <p className={styles.lastArticle_excerpt}>{heroPost.excerpt}</p>
          </div>
          <Button href={`/articulos/${heroPost.slug}`}>Leer artículo</Button>
        </article>
        <MediaQuery minDeviceWidth={'48rem'} device={{ deviceWidth: '70em' }}>
          <figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={styles.lastArticle_thumbnail}
            layoutId="image"
          >
            <Image
              src={'/articles/express/express-featured-image.png'}
              height={'auto'}
              width={328}
              layout={'intrinsic'}
            />
          </figure>
        </MediaQuery>
      </section>
      <section className={styles.articles_container}>
        <h3 className={styles.articles_container_title}>Todos los artículos</h3>
        <section className={styles.articles_grid}>
          {morePosts.map((article, index) => (
            <ArticleCluster
              key={`${article.title}-${index}`}
              imageSrc={article.coverImage}
              slug={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              publishDate={article.date}
              duration={article.duration}
            />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'duration'
  ])

  return {
    props: { allPosts },
  }
}

export default ArticlesPage
