import * as React from "react"
import HomeData from '../utils/queries/HomeQuery'
import {Link} from "gatsby";
import ProjectCluster from "../components/projectCluster";
import FeaturedProjectQuery from "../utils/queries/FeaturedProject";
import PostCluster from "../components/postCluster";

// markup
const IndexPage = () => {
  const { graphCmsPage: page, allGraphCmsPost: posts, allGraphCmsProject: projects } = HomeData()
  const { graphCmsProject: featuredProject } = FeaturedProjectQuery()
  return (
    <>
      <section>
        <div>
          <article>
            <h1>{page.title}</h1>
            <p>{page.subtitle}</p>
          </article>
          <div>
            <Link to={'/proyectos'}>
              {page.primaryCta}
            </Link>
            <Link to={'/sobre-mi'}>
              {page.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
      <ProjectCluster
          featured={featuredProject.isFeatured}
          compact={false}
          title={featuredProject.name}
          slug={featuredProject.slug}
          subtitle={featuredProject.tagline}
          imageSrc={featuredProject.featuredImage.localFile.childImageSharp.gatsbyImageData}
          altText={featuredProject.featuredImage.altText}
          workType={featuredProject.services.name}
      />
      <section>
        <h2>Últimos artículos</h2>
        <section>
            {posts && posts.nodes.map((post, index) => (
                <PostCluster
                    key={`${post.url}-${index}`}
                    slug={post.url}
                    altText={post.thumbnail.altText}
                    imageSrc={post.thumbnail.localFile.childImageSharp.gatsbyImageData}
                    title={post.title}
                    excerpt={post.excerpt}
                    publishDate={post.publicationDate}
                    duration={'10 minutos'}
                />
            ))}
        </section>
      </section>
    </>
  )
}

export default IndexPage
