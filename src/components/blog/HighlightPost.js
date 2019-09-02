import React from "react"
import { Link } from "gatsby"
import blogStyle from "../../assets/scss/sections/blog.module.scss"
import { Text } from "../assets/Title"

import Fade from "react-reveal/Fade"

const HighlightPost = ({ slug, id, src, title, category }) => {
  return (
    <Link to={`/blog/${slug}`} id={id}>
      <Fade top distance="15px">
        <section
          className={blogStyle.highlightPost_container}
          style={{
            background: `url('${src}') center center no-repeat`,
          }}
        >
          <div className={blogStyle.highlightPost_overlay} />
          <article className={blogStyle.highlightPost_content}>
            <span className={blogStyle.recentPost_title}>Último artículo</span>
            <Text
              type="h1"
              title={title}
              className={blogStyle.recentPost_heading}
            />
            <p className={blogStyle.recentPost_category}>
              Categoría: {category}
            </p>
          </article>
        </section>
      </Fade>
    </Link>
  )
}

export default HighlightPost
