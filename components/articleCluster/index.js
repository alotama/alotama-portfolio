import React from 'react'
import Image from 'next/image'
import styles from '../../styles/components/article.module.scss'

const ArticleCluster = ({ imageSrc, title, excerpt, publishDate, duration }) => {
  return (
    <article className={styles.article}>
      <figure className={styles.articleCover}>
        <Image
          src={imageSrc}
          layout="intrinsic"
          width={328}
          height={252}
        />
      </figure>
      <div className={styles.articleInfo}>
        <h3 className={styles.articleTitle}>{title}</h3>
        <p className={styles.articleExcerpt}>{excerpt}</p>
      </div>
      <div className={styles.articleDetail}>
        <small>{`${publishDate}-${duration}`}</small>
      </div>
    </article>
  )
}

export default ArticleCluster
