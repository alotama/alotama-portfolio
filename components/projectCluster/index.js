import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from '../../styles/components/projectCluster.module.scss'
import Link from 'next/link'
import { pageVariants, pageTransition } from '../../utils'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';

const ProjectCluster = ({ featured, compact, title, slug, subtitle, imageSrc, workType }) => {
  let projectCluster = [styles.project]

  if (compact === true) {
    projectCluster.push(styles.compact)
  }

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
        <InView threshold={0.5} delay={50} triggerOnce={true}>
          {({ ref, inView }) => (
            <motion.section
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className={projectClusterClass}>
              <article className={styles.projectInfo}>
                <div className={styles.projectTitle}>
                  {featured && <span className={styles.featuredProject}>Proyecto destacado</span>}
                  <h2 className={styles.title}>{title}</h2>
                  <h3 className={styles.description}>{subtitle}</h3>
                </div>
                <ul className={styles.projectCategory}>
                  {workType && workType.map((element, index) => (
                    <li key={`${element.name}-${index}`}>{element.name}</li>
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
            </motion.section>
          )}
        </InView>
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
  workType: PropTypes.array
}

export default ProjectCluster
