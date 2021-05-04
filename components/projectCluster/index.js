import React from 'react'
import Image from 'next/image'
import styles from  '../../styles/components/projectCluster.module.scss'

const ProjectCluster = ({featured, title, subtitle, imageSrc, workType}) => {
  return (
    <section className={styles.project}>
      <article className={styles.projectInfo}>
        <div className={styles.projectTitle}>
          {featured && <span className={styles.featuredProject}>Proyecto destacado</span>}
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.description}>{subtitle}</h3>
        </div>
        <ul className={styles.projectCategory}>
          {workType && workType.map((element, index) => (
            <li key={`${element}-${index}`}>{element}</li>
          ))}
        </ul>
      </article>
      <figure className={styles.projectCoverPage}>
        <Image
          alt={title}
          src={imageSrc}
          layout="responsive"
          width={800}
          height={448}
        />
        <figcaption>Ver proyecto</figcaption>
      </figure>
    </section>
  )
}

export default ProjectCluster
