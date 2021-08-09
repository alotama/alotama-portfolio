import React from 'react';
import DefaultLayout from "../../layouts";
import ReactMarkdown from "react-markdown";
import {GatsbyImage} from "gatsby-plugin-image";
import '../../styles/pages/post.scss';

const components = {
   img: image => {
      return (
         <img alt={image.alt} data-src={image.src}/>
      )
   },
   p: (paragraph) => {
      const {node} = paragraph;
      if (node.children[0].type === "image") {
         const image = node.children[0];
         return (
            <img alt={image.alt} data-src={image.src}/>
         )
      }

      return <p>{paragraph.children}</p>;
   },
}

const Post = ({pageContext}) => {
   console.log('pageContext ->', pageContext)
   return (
      <DefaultLayout page={'posts'}>
         <section className="hero">
            <div className="hero-body">
               <div className="container is-max-desktop">
                  <section className="columns">
                     <div className="column is-offset-2 is-8">
                        <p>{pageContext.publicationDate}</p>
                        <h1 className="title">
                           {pageContext.title}
                        </h1>
                        <p>Duración: {`${pageContext.duration} minutos de lectura`}</p>
                     </div>
                  </section>
                  <GatsbyImage className={'featuredImage'} alt={pageContext.featuredImage.altText} image={pageContext.featuredImage.gatsbyImageData}/>
                  <section className="columns">
                     <div className="column is-offset-2 is-8">
                        <ReactMarkdown
                           className={'markdown'}
                           children={pageContext.content}
                           components={components}
                        />
                     </div>
                  </section>
               </div>
            </div>
         </section>
      </DefaultLayout>
   )
};

export default Post;
