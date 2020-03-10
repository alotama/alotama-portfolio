import React from "react"
import { Link } from "gatsby"
import { Text } from "../assets/Title"
import { Media } from "react-breakpoints"

const useExcerpt = ({ excerpt }) => (
  <Media>
    {({ currentBreakpoint }) => {
      switch (currentBreakpoint) {
        case "mobile":
          return null
        default:
          return <p>{excerpt}</p>
      }
    }}
  </Media>
)


export default ({ slug, id, source, altText, title, excerpt, className, index, onUse }) => {
  let classNames = ["blogGrid_post"]

  if (className) {
    classNames.push(className)
  }

  return (
    <article className={classNames.join(' ')} key={index}>
      <Link to={`/blog/${slug}`} id={id}>
        <figure className={"post_thumbnail"}>
          <img src={source} alt={altText} />
        </figure>
        <div className={"post_content"}>
          <Text type="h2" title={title} />
          {onUse ? useExcerpt({ excerpt }) : <p>{excerpt}</p>}
        </div>
      </Link>
    </article>
  )
}
