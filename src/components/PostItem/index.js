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


export default ({ slug, id, srcSet, sizes, source, altText, title, excerpt, className, index, onUse }) => {
  let classNames = ["blogGrid_post"]

  if (className) {
    classNames.push(className)
  }

  return (
    <article className={classNames.join(' ')} key={index}>
      <Link to={`/blog/${slug}`} id={id}>
        <figure className={"post_thumbnail"}>
          <picture>
            <source
              srcset={srcSet}
              sizes={sizes} />
            <img src={source} alt={altText} />
          </picture>
        </figure>
        <div className={"post_content"}>
          <Text type="h2" title={title} />
          {onUse ? useExcerpt({ excerpt }) : <p>{excerpt}</p>}
        </div>
      </Link>
    </article>
  )
}
