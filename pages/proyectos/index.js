import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/button'
import ProjectCluster from '../../components/projectCluster'

const ProjectPage = () => {
  return (
    <Layout>
      <section>
        <article>
          <div>
            <h1>Proyectos.</h1>
            <h2>Desarrollo Front-End</h2>
          </div>
          <Button>Ver todos</Button>
        </article>
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
