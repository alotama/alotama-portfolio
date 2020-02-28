import React from "react"
import { Link } from "gatsby"
import { Text } from "../assets/Title"
import { Media } from "react-breakpoints"

const useExcerpt = ({excerpt}) => (
  <Media>
    {({ currentBreakpoint }) => {
      switch (currentBreakpoint) {
        case "mobile":
          return null
        case "tablet":
          return null
        default:
          return <p>{excerpt}</p>
      }
    }}
  </Media>
)

const PostItem = ({ slug, id, source, sourceSet, altText, title, excerpt, index, onUse }) => {
  return (
    <Link to={`/blog/${slug}`} id={id}>
      <article className={"blogGrid_post"} key={index}>
        <figure className={"post_thumbnail"}>
          <img src={source} srcSet={sourceSet} alt={altText} /> 
        </figure>
        <div className={"post_content"}>
          <Text type="h2" title={title} />
          {onUse ? useExcerpt({excerpt}) : <p>{excerpt}</p>}
        </div>
      </article>
    </Link>
  )
}

export default PostItem
