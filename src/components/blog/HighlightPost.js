import React from "react"
import { Link } from "gatsby"
import { Text } from "../assets/Title"

import Fade from "react-reveal/Fade"

const HighlightPost = ({ slug, id, src, title, category }) => {
  return (
    <Link to={`/blog/${slug}`} id={id}>
      <Fade top distance="15px">
        <section
          className={"highlightPost_container"}
          style={{
            background: `url('${src}') center center no-repeat`,
          }}
        >
          <div className={"highlightPost_overlay"} />
          <article className={"highlightPost_content"}>
            <span className={"recentPost_title"}>Último artículo</span>
            <Text
              type="h1"
              title={title}
              className={"recentPost_heading"}
            />
            <p className={"recentPost_category"}>
              Categoría: {category}
            </p>
          </article>
        </section>
      </Fade>
    </Link>
  )
}

export default HighlightPost
