import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/button'
import ArticleCluster from '../../components/articleCluster'
import styles from '../../styles/pages/articles.module.scss'
import Image from 'next/image'
import { motion } from "framer-motion";
import { getAllPosts } from '../../lib/api'

const ArticlesPage = ({ allPosts }) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <Layout>
      <section className={styles.lastArticle}>
        <motion.article
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
        </motion.article>
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={styles.lastArticle_thumbnail}
          layoutId="image">
          <Image
            src={'/articles/express/express-featured-image.png'}
            height={'auto'}
            width={328}
            layout={'intrinsic'}
          />
        </motion.figure>
      </section>
      <section>
        <h3>Todos los artículos</h3>
        {/* <ArticleCluster />
        <ArticleCluster />
        <ArticleCluster />
        <ArticleCluster />
        <ArticleCluster />
        <ArticleCluster /> */}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default ArticlesPage
