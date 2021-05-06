import React from 'react'
import Layout from '../../components/layout'
import ProjectCluster from '../../components/projectCluster'
import { ListSkills, SocialLinks } from '../../utils'
import styles from '../../styles/pages/about.module.scss'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <Layout>
      <section className={styles.heroAbout}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Sobre mí</h1>
          <h2 className={styles.heroSubtitle}>Un nikkei viviendo en Argentina</h2>
        </div>
        <ul className={styles.heroSocialLinks}>
          {SocialLinks.map((element, index) => (
            <li className={styles.heroSocialLinks_item} key={`${element.label}-${index}`}><a href={element.link}>{element.label}</a></li>
          ))}
        </ul>
      </section>
      <section className={styles.intentionAbout}>
        <article className={styles.intentionAbout_content}>
          <p className={styles.intentionFirst}>
            Analizo, diseño y programo soluciones sencillas y escalables para mejorar la experiencia
            de los usuarios con los productos
            o servicios digitales en todas
            las fases de su desarrollo
          </p>
          <p className={styles.intentionSecond}>
            Me llamo Sebastián A. Tamashiro, pero todos me dicen Tama. Soy un nikkei, descendiente de inmigrantes japoneses, que vive en Argentina. <br />
            <br />
            Siempre me fascinó la posibilidad que brinda internet para ayudar, conectar o mejorar la vida de las personas creando algo desde cero con unas cuantas líneas de código y un diseño de interfaz simple e intuitivo.
          </p>
        </article>
        <figure className={styles.intentionAbout_circle}>
          <Image
            src={'/brand/circle.svg'}
            layout={'fixed'}
            width={'600'}
            height={'600'}
          />
        </figure>
      </section>
      <section className={styles.skillsAbout}>
        <div className={styles.skillsAbout_container}>
          <h2 className={styles.skillsAbout_title}>Herramientas</h2>
        </div>
        <ul className={styles.skillsAbout_list}>
          {ListSkills.map((item, index) => (
            <li className={styles.skillsAbout_item} key={`${item}-${index}`}>{item}</li>
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
