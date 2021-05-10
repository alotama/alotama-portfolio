import Head from 'next/head'
import Layout from '../components/layout'
import ButtonLink from '../components/buttonLink'
import Link from 'next/link'
import ProjectCluster from '../components/projectCluster'
import ArticleCluster from '../components/articleCluster'
import styles from '../styles/pages/home.module.scss'
import { getAllPosts, getAllProject } from '../lib/api'
import MediaQuery from 'react-responsive'

function Home({ lastPosts, featuredProject, projects }) {
  return (
    <Layout>
      <Head>
        <title>alotama | Sebastian Tamashiro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.hero}>
        <div className={styles.heroWrapper}>
          <article className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>Sitios web simples, significantes y centrados en las personas</h1>
            <p className={styles.heroContent}>Me desempeño en las áreas del diseño de interfáces y el desarrollo front-end de productos o servicios digitales</p>
          </article>
          <div className={styles.heroButtons}>
            <Link href={'/proyectos'} passHref>
              <ButtonLink secondary>Ver proyectos</ButtonLink>
            </Link>
            <Link href={'/sobre-mi'} passHref>
              <ButtonLink>Sobre mí</ButtonLink>
            </Link>
          </div>
        </div>
      </section>
      {featuredProject && (
        <MediaQuery minDeviceWidth={'48rem'} device={{ deviceWidth: '70em' }}>
          {(matches) => matches ? (
            <ProjectCluster
              compact={false}
              featured={true}
              title={featuredProject.title}
              subtitle={featuredProject.tagline}
              imageSrc={featuredProject.coverImage}
              workType={featuredProject.services}
              slug={featuredProject.slug}
            />
          ) : (
            <ProjectCluster
              compact={true}
              featured={true}
              title={featuredProject.title}
              subtitle={featuredProject.tagline}
              imageSrc={featuredProject.coverImage}
              workType={featuredProject.services}
              slug={featuredProject.slug}
            />
          )}
        </MediaQuery>
      )}
      <section className={styles.articlesContainer}>
        <h2 className={styles.articlesTitle}>Últimos artículos</h2>
        <section className={styles.articlesLayout}>
          {lastPosts && lastPosts.map((article, index) => (
            <ArticleCluster
              key={`${article.slug}-${index}`}
              imageSrc={article.coverImage}
              slug={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              publishDate={article.date}
              duration={article.duration}
            />
          ))}
        </section>
      </section>
      {projects && projects.map((project, index) => (
        <MediaQuery minDeviceWidth={'48rem'} device={{ deviceWidth: '70em' }} key={`${project.title}-${index}`}>
          {(matches) => matches ? (
            <ProjectCluster
              compact={false}
              title={project.title}
              subtitle={project.tagline}
              imageSrc={project.coverImage}
              workType={project.services}
              slug={project.slug}
            />
          ) : (
            <ProjectCluster
              compact={true}
              title={project.title}
              subtitle={project.tagline}
              imageSrc={project.coverImage}
              workType={project.services}
              slug={project.slug}
            />
          )}
        </MediaQuery>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'duration',
    'slug',
    'coverImage',
    'excerpt',
  ])

  const allProjects = await getAllProject([
    'title',
    'tagline',
    'services',
    'slug',
    'coverImage',
  ])

  const allData = await Promise.all([allPosts, allProjects])

  const lastPosts = allData[0].slice(0, 3)
  const featuredProject = allData[1][0]
  const projects = allData[1].slice(1, 4)


  return {
    props: { lastPosts, featuredProject, projects },
  }
}

export default Home;