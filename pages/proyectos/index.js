import React, { useState } from 'react'
import Layout from '../../components/layout'
import Button from '../../components/buttonLink'
import ProjectCluster from '../../components/projectCluster'
import styles from '../../styles/pages/project.module.scss'
import Image from 'next/image'
import { getAllProject } from '../../lib/api'
import { useMediaQuery } from 'react-responsive'
import { motion } from "framer-motion"
import { pageVariants, pageTransition } from '../../utils'
import AboutQuery from "../../lib/query/AboutQuery"
import ProjectQuery from "../../lib/query/ProjectsQuery"


const ProjectPage = ({ page, services, projects }) => {
  const [categorySelected, setCategorySelected] = useState('')

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 48rem)'
  })
  return (
    <Layout>
      <section className={styles.heroProject}>
        <motion.article
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className={styles.heroProject_container}>
          <div className={styles.heroProject_content}>
            <h1 className={styles.heroProject_title}>{page.title}</h1>
            <h2
              className={styles.heroProject_category}
              onClick={() => setCategorySelected(!categorySelected)}>
              {categorySelected ? services[0].name : services[1].name}
            </h2>
          </div>
          <Button href={'#projects'}>Ver todos</Button>
        </motion.article>
        {isDesktop && (
          <motion.figure
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className={styles.heroProject_figure}>
            {categorySelected ? (
              <Image
                src={'/projects/design.svg'}
                height={'400'}
                width={'400'}
                layout={'intrinsic'}
              />
            ) : (
              <Image
                src={'/projects/project.svg'}
                height={'400'}
                width={'400'}
                layout={'intrinsic'}
              />
            )}
          </motion.figure>
        )}
      </section>
      <section className={styles.projectContainer} id={'projects'}>
        {projects && projects.map((project, index) => (
          <ProjectCluster
            compact
            key={`${project.name}-${index}`}
            title={project.name}
            subtitle={project.tagline}
            slug={project.slug}
            imageSrc={project.featuredImage.url}
            workType={project.services}
          />
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await ProjectQuery
  const { page, services, projects } = data

  return {
    props: { page, services, projects },
  }
}

export default ProjectPage
