import React, { useEffect } from 'react'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ReactMarkdown from "react-markdown"
import { getPostBySlug, getAllPosts } from '../../../lib/api'
import Image from 'next/image'
import styles from '../../../styles/pages/post.module.scss'
import Prism from "Prismjs";
import { motion } from "framer-motion";

const components = {
  img: image => {
    return <Image src={image.src} alt={image.alt} height="200" width="355" />
  },
  p: (paragraph) => {
    const { node } = paragraph;
    if (node.children[0].type === "image") {
      const image = node.children[0];
      return <Image src={image.url} alt={image.alt} height="200" width="355" />;
    }

    return <p>{paragraph.children}</p>;
  },
}

const PostPage = ({ post }) => {
  const router = useRouter()
  const { content, coverImage, date, duration, title } = post

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <motion.section
            nitial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={styles.postHeader}>
            <div className={styles.postHeader_container}>
              <small className={styles.postDate} layoutId="date">{date}</small>
              <h1 className={styles.postTitle} layoutId="title">{title}</h1>
              <small className={styles.duration}>Duración: {duration}</small>
            </div>
          </motion.section>
          <motion.figure
            nitial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={styles.thumbnail}>
            <Image
              src={coverImage}
              alt={title}
              height={392}
              width={1016}
              layout={'intrinsic'}
            />
          </motion.figure>
          <section className={styles.postContent}>
            <aside className={styles.postContent_actions}>
              Bookmark
              Like
            </aside>
            <motion.article
              nitial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={styles.postContent_content}>
              <ReactMarkdown
                className={styles['markdown']}
                children={content}
                components={components}
              />
            </motion.article>
          </section>
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'duration',
    'content',
    'ogImage',
    'coverImage',
  ])

  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default PostPage
