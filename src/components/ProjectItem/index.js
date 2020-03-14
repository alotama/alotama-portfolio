import React from "react"
import { Text } from "../assets/Title"
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default ({ sourceSet, source, sizes, altText, title, category, linkTo }) => {
  return (
    <article className="work__container">
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className="work__link"
      >
        <figure className="work__thumbnail">
          <LazyLoadComponent
            height={600}
            width={1000}
          >
            <picture>
              <source
                srcSet={sourceSet}
                sizes={sizes} />
              <img src={source} alt={altText} />
            </picture>
          </LazyLoadComponent>
        </figure>
        <div className="work__description">
          <Text type="h6" title={title} />
          <p>{category}</p>
        </div>
      </a>
    </article>
  )
}