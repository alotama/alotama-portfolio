import React from "react"
import { Link } from "gatsby"
import { Text } from "../assets/Title"
import { Media } from "react-breakpoints"
import { LazyLoadComponent } from 'react-lazy-load-image-component';

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


export default ({ slug, id, sourceSet, sizes, source, altText, title, excerpt, className, index, onUse }) => {
  let classNames = ["blogGrid_post"]

  if (className) {
    classNames.push(className)
  }

  return (
    <article className={classNames.join(' ')} key={index}>
      <Link to={`/blog/${slug}`} id={id}>
        <figure className={"post_thumbnail"}>
          <LazyLoadComponent
            height={120}
            width={300}
          >
            <picture>
              <source
                srcSet={sourceSet}
                sizes={sizes} />
              <img src={source} alt={altText} />
            </picture>
          </LazyLoadComponent>
        </figure>
        <div className={"post_content"}>
          <Text type="h2" title={title} />
          {onUse ? useExcerpt({ excerpt }) : <p>{excerpt}</p>}
        </div>
      </Link>
    </article>
  )
}
