import Image from 'next/image'
import React from 'react'
import { getProjectBySlug, getRandomProject, getAllProject } from '../../../lib/api'
import { LayoutProject as Layout } from '../../../components/layout'
import styles from '../../../styles/pages/caseStudy.module.scss'
import ProjectCluster from '../../../components/projectCluster'
import ReactMarkdown from "react-markdown"
import MediaQuery from 'react-responsive'

const ProjectPage = ({ title, tagline, description, content, slug, services, developedAt, coverImage, next }) => {
  const components = {
    img: image => {
      return (
        <figure>
          <Image
            src={image.src}
            alt={image.alt}
            height={2160}
            width={3840}
            layout='responsive'
            // objectFit="scale-down"
          />
        </figure>
      )
    },
  }
  return (
    <Layout>
      <section className={styles.caseStudy}>
        <article>
          <div className={styles.caseStudy_content}>
            <h1 className={styles.caseStudy_title}>{title}</h1>
            <h2 className={styles.caseStudy_tagline}>{tagline}</h2>
          </div>
          <div className={styles.caseStudy_info}>
            <div className={styles.caseStudy_description}>
              <p>{description}</p>
            </div>
            <section className={styles.caseStudy_service}>
              <article className={styles.caseStudy_serviceContainer}>
                <h3 className={styles.caseStudy_serviceTitle}>Servicios</h3>
                <ul className={styles.caseStudy_serviceList}>
                  {services && services.map((service, index) => (
                    <li className={styles.caseStudy_serviceList_item} key={`${service}-${index}`}>
                      <small>{service}</small>
                    </li>
                  ))}
                </ul>
              </article>
              {developedAt && (
                <article>
                  <h3>Desarollo para</h3>
                  <p>Name. Design Agency.</p>
                </article>
              )}
            </section>
          </div>
        </article>
      </section>
      <section className={styles.caseStudy_cover}>
        <figure className={styles.caseStudy_coverImage}>
          <Image
            src={coverImage}
            height={588}
            width={1016}
            layout={'intrinsic'}
          />
        </figure>
      </section>
      <section className={styles.caseStudy_content}>
        <ReactMarkdown
          styles={styles['caseStudy_markdown']}
          children={content}
          components={components}
        />
      </section>
      <section className={styles.caseStudy_final}>
        <MediaQuery minDeviceWidth={'48rem'} device={{ deviceWidth: '70em' }}>
          {(matches) => matches ? (
            <ProjectCluster
              compact={false}
              title={next.title}
              subtitle={next.tagline}
              slug={next.slug}
              imageSrc={next.coverImage}
              workType={next.services}
            />
          ) : (
            <ProjectCluster
              compact={true}
              title={next.title}
              subtitle={next.tagline}
              slug={next.slug}
              imageSrc={next.coverImage}
              workType={next.services}
            />
          )}
        </MediaQuery>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'tagline',
    'services',
    'description',
    'slug',
    'content',
    'coverImage',
    'next'
  ])

  const nextProject = getProjectBySlug(project.next, [
    'title',
    'tagline',
    'services',
    'description',
    'slug',
    'content',
    'coverImage',
  ])

  return {
    props: {
      title: project.title,
      tagline: project.tagline,
      services: project.services,
      description: project.description,
      coverImage: project.coverImage,
      content: project.content,
      slug: project.slug,
      next: nextProject
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllProject(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default ProjectPage
