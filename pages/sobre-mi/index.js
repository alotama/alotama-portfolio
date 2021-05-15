import React from 'react'
import Layout from '../../components/layout'
import ProjectCluster from '../../components/projectCluster'
import { ListSkills, SocialLinks } from '../../utils'
import styles from '../../styles/pages/about.module.scss'
import Image from 'next/image'
import MediaQuery from 'react-responsive'
import { motion } from "framer-motion"
import { pageVariants, pageTransition } from '../../utils'
import { InView } from 'react-intersection-observer';

const AboutPage = () => {
  return (
    <Layout>
      <section className={styles.heroAbout}>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Sobre mí</h1>
          <h2 className={styles.heroSubtitle}>Un nikkei viviendo en Argentina</h2>
        </motion.div>
        <ul className={styles.heroSocialLinks}>
          {SocialLinks.map((element, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 * 0.5 * index }}
              className={styles.heroSocialLinks_item} key={`${element.label}-${index}`}><a href={element.link}>{element.label}</a></motion.li>
          ))}
        </ul>
      </section>
      <section className={styles.intentionAbout}>
        <article className={styles.intentionAbout_content}>
          <InView threshold={0.5} triggerOnce={true}>
            {({ ref, inView }) => (
              <motion.p
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
                className={styles.intentionFirst}>
                Analizo, diseño y programo soluciones sencillas y escalables para mejorar la experiencia
                de los usuarios con los productos
                o servicios digitales en todas
                las fases de su desarrollo
              </motion.p>
            )}
          </InView>
          <InView threshold={0.5} triggerOnce={true}>
            {({ ref, inView }) => (
              <motion.p
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
                className={styles.intentionSecond}>
                Me llamo Sebastián A. Tamashiro, pero todos me dicen Tama. Soy un nikkei, descendiente de inmigrantes japoneses, que vive en Argentina. <br />
                <br />
                Siempre me fascinó la posibilidad que brinda internet para ayudar, conectar o mejorar la vida de las personas creando algo desde cero con unas cuantas líneas de código y un diseño de interfaz simple e intuitivo.
              </motion.p>
            )}
          </InView>
        </article>
        <MediaQuery minDeviceWidth={'48rem'} device={{ deviceWidth: '70em' }}>
          {(matches) => matches && (
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className={styles.intentionAbout_circle}>
              <Image
                src={'/brand/circle.svg'}
                layout={'intrinsic'}
                width={'1200'}
                height={'1200'}
              />
            </motion.figure>
          )}
        </MediaQuery>
      </section>
      <section className={styles.skillsAbout}>
        <div className={styles.skillsAbout_container}>
          <h2 className={styles.skillsAbout_title}>Herramientas</h2>
        </div>
        <ul className={styles.skillsAbout_list}>
          {ListSkills.map((item, index) => (
            <InView threshold={0.5} triggerOnce={true}>
              {({ ref, inView }) => (
                <motion.li
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1 * 0.5 * index }}
                  className={styles.skillsAbout_item} key={`${item}-${index}`}>{item}</motion.li>
              )}
            </InView>
          ))}
        </ul>
        <MediaQuery minDeviceWidth={'48rem'} device={{ deviceWidth: '70em' }}>
          {(matches) => matches ? (

            <ProjectCluster
              compact={false}
              featured={true}
              title={'Redlines'}
              subtitle={'Connecting the dots'}
              imageSrc={'/projects/redlines/portada.png'}
              workType={['Diseño UI', 'Desarrollo Front-End']}
              slug={'redlines'}
            />

          ) : (

            <ProjectCluster
              compact={true}
              featured={true}
              title={'Redlines'}
              subtitle={'Connecting the dots'}
              imageSrc={'/projects/redlines/portada.png'}
              workType={['Diseño UI', 'Desarrollo Front-End']}
              slug={'redlines'}
            />

          )}
        </MediaQuery>
      </section>
    </Layout>
  )
}

export default AboutPage
