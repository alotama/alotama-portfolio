import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from '../../styles/components/projectCluster.module.scss'
import Link from 'next/link'

const ProjectCluster = ({ featured, compact, title, slug, subtitle, imageSrc, workType }) => {
  let projectCluster = [styles.project]

  if (compact === true) {
    projectCluster.push(styles.compact)
  }

  const projectClusterClass = projectCluster.join(' ');
  return (
    <Link
      href={{
        pathname: '/proyectos/[slug]',
        query: { slug: slug },
      }}
      as={`/proyectos/${slug}`}
    >
      <a>
        <section className={projectClusterClass}>
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
      </a>
    </Link>
  )
}

ProjectCluster.propTypes = {
  featured: PropTypes.bool, 
  compact: PropTypes.bool, 
  title: PropTypes.string,
  slug: PropTypes.string,
  subtitle: PropTypes.string, 
  imageSrc: PropTypes.string, 
  workType: PropTypes.string
}

export default ProjectCluster
