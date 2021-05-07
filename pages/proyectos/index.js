import React, { useState } from 'react'
import Layout from '../../components/layout'
import Button from '../../components/button'
import ProjectCluster from '../../components/projectCluster'
import styles from '../../styles/pages/project.module.scss'
import Image from 'next/image'

const ProjectPage = () => {
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
      <section>
        <ProjectCluster
          featured={true}
          title={'Redlines'}
          subtitle={'Connecting the dots'}
          imageSrc={'/projects/redlines/portada.png'}
          workType={['Diseño UI', 'Desarrollo Front-End']}
        />
        <ProjectCluster
          featured={true}
          title={'Redlines'}
          subtitle={'Connecting the dots'}
          imageSrc={'/projects/redlines/portada.png'}
          workType={['Diseño UI', 'Desarrollo Front-End']}
        />
        <ProjectCluster
          featured={true}
          title={'Redlines'}
          subtitle={'Connecting the dots'}
          imageSrc={'/projects/redlines/portada.png'}
          workType={['Diseño UI', 'Desarrollo Front-End']}
        />
        <ProjectCluster
          featured={true}
          title={'Redlines'}
          subtitle={'Connecting the dots'}
          imageSrc={'/projects/redlines/portada.png'}
          workType={['Diseño UI', 'Desarrollo Front-End']}
        />
      </section>
    </Layout>
  )
}

export default ProjectPage
