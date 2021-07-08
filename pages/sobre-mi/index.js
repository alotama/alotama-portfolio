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
import HomeQuery from "../../lib/query/HomeQuery"
import AboutQuery from "../../lib/query/AboutQuery"

const AboutPage = ({ page, socialMedias, skills, projects }) => {
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
          <h1 className={styles.heroTitle}>{page.title}</h1>
          <h2 className={styles.heroSubtitle}>{page.subtitle}</h2>
        </motion.div>
        <ul className={styles.heroSocialLinks}>
          {socialMedias.map((social, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 * 0.5 * index }}
              className={styles.heroSocialLinks_item} key={`${social.name}-${index}`}><a href={social.url}>{social.name}</a></motion.li>
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
                {page.content.raw.children[0].children[0].text}
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
                {page.content.raw.children[1].children[0].text} <br />
                <br />
                {page.content.raw.children[2].children[0].text}
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
        <InView threshold={0.25} triggerOnce={true}>
          {({ ref, inView }) => (
            <motion.ul
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
              className={styles.skillsAbout_list}>
              {skills.map((item, index) => (
                <li className={styles.skillsAbout_item} key={`${item.skill}-${index}`}>{item.skill}</li>
              ))}
            </motion.ul>
          )}
        </InView>
        <MediaQuery minDeviceWidth={'48rem'} device={{ deviceWidth: '70em' }}>
          {(matches) => matches ? (

            <ProjectCluster
              compact={false}
              featured={projects[0].isFeatured}
              title={projects[0].name}
              subtitle={projects[0].tagline}
              imageSrc={projects[0].featuredImage.url}
              workType={projects[0].services}
              slug={projects[0].slug}
            />

          ) : (

            <ProjectCluster
              compact={true}
              featured={projects[0].isFeatured}
              title={projects[0].name}
              subtitle={projects[0].tagline}
              imageSrc={projects[0].featuredImage.url}
              workType={projects[0].services}
              slug={projects[0].slug}
            />

          )}
        </MediaQuery>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await AboutQuery
  const { page, socialMedias, skills, projects } = data

  return {
    props: { page, socialMedias, skills, projects },
  }
}


export default AboutPage
