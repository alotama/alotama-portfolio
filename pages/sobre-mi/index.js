import React from 'react'
import Layout from '../../components/layout'
import ProjectCluster from '../../components/projectCluster'
import { ListSkills, SocialLinks } from '../../utils'

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <div>
          <h1>Sobre mí</h1>
          <h2>Un nikkei viviendo en Argentina</h2>
        </div>
        <ul>
          {SocialLinks.map((element, index) => (
            <li key={`${element.label}-${index}`}><a href={element.link}>{element.label}</a></li>
          ))}
        </ul>
      </section>
      <section>
        <article>
          <p>
            Analizo, diseño y programo soluciones sencillas y escalables para mejorar la experiencia
            de los usuarios con los productos
            o servicios digitales en todas
            las fases de su desarrollo
          </p>
          <p>
            Me llamo Sebastián A. Tamashiro, pero todos me dicen Tama. Soy un nikkei, descendiente de inmigrantes japoneses, que vive en Argentina. <br />
            <br />
            Siempre me fascinó la posibilidad que brinda internet para ayudar, conectar o mejorar la vida de las personas creando algo desde cero con unas cuantas líneas de código y un diseño de interfaz simple e intuitivo.
          </p>
        </article>
      </section>
      <section>
        <div>
          <h2>Herramientas</h2>
        </div>
        <ul>
          {ListSkills.map(item => (
            <li>{item}</li>
          ))}
        </ul>
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

export default AboutPage
