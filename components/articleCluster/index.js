import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from '../../styles/components/article.module.scss'
import Link from 'next/link'
import { pageVariants, pageTransition } from '../../utils'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const ArticleCluster = ({ imageSrc, slug, title, excerpt, publishDate, duration }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('in');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <motion.article
      initial="initial"
      animate={controls}
      variants={pageVariants}
      transition={pageTransition}
      ref={ref}
      className={styles.article}>
      <Link
        href={{
          pathname: '/articulos/[slug]',
          query: { slug: slug },
        }}
        as={`/articulos/${slug}`}
      >
        <a>
          <figure className={styles.articleCover}>
            <Image
              src={imageSrc}
              layout="intrinsic"
              width={656}
              height={504}
            />
          </figure>
          <div className={styles.articleInfo}>
            <h3 className={styles.articleTitle}>{title}</h3>
            <p className={styles.articleExcerpt}>{excerpt}</p>
          </div>
          <div className={styles.articleDetail}>
            <small>{`${publishDate} - ${duration}`}</small>
          </div>
        </a>
      </Link>
    </motion.article>
  )
}

export default ArticleCluster
