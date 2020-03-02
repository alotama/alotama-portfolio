import React from "react"
import { Text } from "../assets/Title"

const Skills = ({ content }) => {
  return (
    <section className={"skills__section"}>
      <article className={"skills_content"}>
        <Text type="h3" title="Conocimientos." />
      </article>
      <div className={"skills_contentList"} dangerouslySetInnerHTML={{  __html:  content }} />
    </section>
  )
}

export default Skills
