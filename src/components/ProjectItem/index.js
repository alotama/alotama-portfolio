import React from "react"
import { Text } from "../assets/Title"
import './projectItem.scss'

export default ({ source, sourceSet, altText, title, category, linkTo }) => {
  return (
    <article className="work__container">
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className="work__link"
      >
        <figure className="work__thumbnail">
          <img src={source} srcSet={sourceSet} alt={altText} />
        </figure>
        <div className="work__description">
          <Text type="h6" title={title} />
          <p>{category}</p>
        </div>
      </a>
    </article>
  )
}