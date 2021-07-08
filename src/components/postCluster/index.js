import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const PostCluster = ({ slug, altText, imageSrc, title, excerpt, publishDate, duration }) => (
   <Link to={slug}>
       <article className={"postCluster"}>
           <figure className={"postCluster__cover"}>
               <GatsbyImage alt={altText} image={imageSrc} />
           </figure>
           <div className={"postCluster__postInfo"}>
               <h3 className={"postInfo__title"}>{title}</h3>
               <p className={"postInfo__excerpt"}>{excerpt}</p>
           </div>
           <div className={"postCluster__detail"}>
               <small>{`${publishDate} - ${duration}`}</small>
           </div>
       </article>
   </Link>
);

export default PostCluster;
