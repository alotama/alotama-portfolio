import React from "react"
import { Text } from "../assets/Title"
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const LatestWork = ({ href, title, source, sourceSet, sizes, altText }) => {
  return (
    <section className="flow__section">

      <div className="col-xs-12">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="work__link"
        >
          <article className={"work__container"}>
            <div
              className={`${"work__description"} ${
                "work__description"
                }`}
            >
              <Text type="h5" title="Último trabajo." />
              <p>{title}</p>
            </div>
            <figure className={"work__thumbnail"}>
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
          </article>
        </a>
      </div>

    </section>
  )
}

export default LatestWork
