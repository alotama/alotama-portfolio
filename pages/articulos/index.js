import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/button'
import ArticleCluster from '../../components/articleCluster'
import styles from '../../styles/pages/articles.module.scss'
import Image from 'next/image'
import { getAllPosts } from '../../lib/api'
import MediaQuery from 'react-responsive'
import { motion } from "framer-motion"
import { pageVariants, pageTransition } from '../../utils'
import ProjectQuery from "../../lib/query/ProjectsQuery"
import ArticleQuery from "../../lib/query/ArticlesQuery"

const ArticlesPage = ({ page, posts }) => {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)

  return (
    <Layout>
      <section className={styles.lastArticle}>
        <motion.article
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className={styles.lastArticle_post}>
          <div className={styles.lastArticleSection}>
            <h2 className={styles.lastArticleSection_title}>{page.title}</h2>
          </div>
          <div className={styles.lastArticle_content}>
            <small className={styles.lastArticle_detail}>{heroPost.date}</small>
            <h1 className={styles.lastArticle_title}>{heroPost.title}</h1>
            <p className={styles.lastArticle_excerpt}>{heroPost.excerpt}</p>
          </div>
          <Button href={`/articulos/${heroPost.url}`}>{page.primaryCta}</Button>
        </motion.article>
        <MediaQuery minDeviceWidth={'48rem'} device={{ deviceWidth: '70em' }}>
          <motion.figure
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className={styles.lastArticle_thumbnail}
          >
            <Image
              src={heroPost.seo.ogImage.url}
              height={656}
              width={656}
              layout={'intrinsic'}
            />
          </motion.figure>
        </MediaQuery>
      </section>
      <section className={styles.articles_container}>
        <motion.h3
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className={styles.articles_container_title}>{page.subtitle}</motion.h3>
        <section
          className={styles.articles_grid}>
          {morePosts.map((article, index) => (
            <ArticleCluster
              key={`${article.title}-${index}`}
              imageSrc={article.thumbnail.url}
              slug={article.url}
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
  const { data } = await ArticleQuery
  const { page, posts } = data

  return {
    props: { page, posts },
  }
}

export default ArticlesPage
