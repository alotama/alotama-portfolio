import React from "react"
import { Link } from "gatsby"
import { Text } from "../assets/Title"

const HighlightPost = ({ slug, id, src, title, category }) => {
  return (
    <Link to={`/blog/${slug}`} id={id}>
    
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
              type="h2"
              title={title}
              className={"recentPost_heading"}
            />
            <p className={"recentPost_category"}>
              Categoría: {category}
            </p>
          </article>
        </section>
      
    </Link>
  )
}

export default HighlightPost
