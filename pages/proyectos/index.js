import React, { useState } from 'react'
import Layout from '../../components/layout'
import Button from '../../components/button'
import ProjectCluster from '../../components/projectCluster'
import styles from '../../styles/pages/project.module.scss'
import Image from 'next/image'
import { getAllProject } from '../../lib/api'

const ProjectPage = ({ allProjects }) => {
  const [categorySelected, setCategorySelected] = useState('')
  return (
    <Layout>
      <section className={styles.heroProject}>
        <article className={styles.heroProject_container}>
          <div className={styles.heroProject_content}>
            <h1 className={styles.heroProject_title}>Proyectos.</h1>
            <h2
              className={styles.heroProject_category}
              onClick={() => setCategorySelected(!categorySelected)}>
              {categorySelected ? 'Diseño UI' : 'Desarrollo Front-End'}
            </h2>
          </div>
          <Button>Ver todos</Button>
        </article>
        <figure className={styles.heroProject_figure}>
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
        </figure>
      </section>
      <section className={styles.projectContainer}>
        {allProjects && allProjects.map((project, index) => (
          <ProjectCluster
            compact
            key={`${project.title}-${index}`}
            title={project.title}
            subtitle={project.tagline}
            slug={project.slug}
            imageSrc={project.coverImage}
            workType={project.services}
          />
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allProjects = getAllProject([
    'title',
    'tagline',
    'services',
    'slug',
    'coverImage',
  ])

  return {
    props: { allProjects },
  }
}

export default ProjectPage
