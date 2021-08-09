import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const PostCluster = ({slug, altText, imageSrc, title, excerpt, publishDate, duration}) => (
   <Link to={`/articulos/${slug}`} className={"card postCluster"}>
      <figure className={"card-image postCluster__cover"}>
         <GatsbyImage className={"image is-4by3"} alt={altText} image={imageSrc}/>
      </figure>
      <div className={"card-content postCluster__postInfo"}>
         <h3 className={"title is-4 postInfo__title"}>{title}</h3>
         <div className={"content postCluster__detail"}>
            <p className={"postInfo__excerpt"}>{excerpt}</p>
            <small>{`${publishDate} - ${duration} minutos de lectura`}</small>
         </div>
      </div>
   </Link>
);

export default PostCluster;
