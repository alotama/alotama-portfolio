import React from 'react';
import DefaultLayout from "../../layouts";
import {Link} from "gatsby";
import ArticleData from "../../utils/queries/ArticlesQuery";
import PostCluster from "../../components/postCluster";
import {GatsbyImage} from "gatsby-plugin-image";

const ProjectPage = () => {
   const { graphCmsPage: page, allGraphCmsPost: posts } = ArticleData()
   const LastPost = posts.nodes[0];
   const AllPosts = posts.nodes.slice(1)
   console.log('AllPosts >', AllPosts)

   return (
      <DefaultLayout page={"project"}>
         <div className="container is-max-desktop">
            <section className="hero is-fullheight-with-navbar">
               <div className="hero-body">
                  <div className="columns is-multiline">
                     <div className={"column is-full"}>
                        <p className="title">
                           {page.title}
                        </p>
                        <p>{LastPost.publicationDate}</p>
                        <h1 className="title">
                           {LastPost.title}
                        </h1>
                        <p>{LastPost.excerpt}</p>
                        <div className="section">
                           <Link to={LastPost.url} className={"button"}>{page.primaryCta}</Link>
                        </div>
                     </div>
                     <div className="column">
                        <GatsbyImage
                           alt={LastPost.altText}
                           image={LastPost.seo.ogImage.localFile.childImageSharp.gatsbyImageData}
                        />
                     </div>
                  </div>
               </div>
            </section>
            <section className={"lasts-posts-section"}>
               <h2 className={"title is-3 section-title"}>{page.subtitle}</h2>
               <div className={"columns is-variable is-2"}>
                  {AllPosts && AllPosts.map((post, index) => (
                     <article className="column is-one-third">
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
                     </article>
                  ))}
               </div>
            </section>
         </div>
      </DefaultLayout>
   )
};

export default ProjectPage;
