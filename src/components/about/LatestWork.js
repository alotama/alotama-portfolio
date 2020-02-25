import React from "react"
import { Text } from "../assets/Title"
import Fade from "react-reveal/Fade"

const LatestWork = ({ href, title, source, sourceSet, altText }) => {
  return (
    <section className="flow__section">
      <div className="row">
        <Fade top distance="15px" delay={250}>
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
                  <img src={source} srcSet={sourceSet} alt={altText} />
                </figure>
              </article>
            </a>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default LatestWork
