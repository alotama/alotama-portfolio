import React from "react"
import { Text } from "../assets/Title"
import Fade from "react-reveal/Fade"

const Main = ({ source, sourceSet, altText, title, category, linkTo }) => {
  return (
    <Fade>
      <div className="col-xs-12">
        <a
          href={linkTo}
          target="_blank"
          rel="noopener noreferrer"
          className="work__link"
        >
          <article className="work__container">
            <figure className="work__thumbnail">
              <img src={source} srcSet={sourceSet} alt={altText} />
            </figure>
            <div className="work__description">
              <Text type="h6" title={title} />
              <p>{category}</p>
            </div>
          </article>
        </a>
      </div>
    </Fade>
  )
}

export default Main
