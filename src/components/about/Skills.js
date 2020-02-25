import React from "react"
import { Text } from "../assets/Title"
import Fade from "react-reveal/Fade"

const Skills = ({ content }) => {
  return (
    <section className={"skills__section"}>
      <article className={"skills_content"}>
        <Fade top distance="15px">
          <Text type="h6" title="Skills." />
        </Fade>
      </article>
      <div className={"skills_contentList"} dangerouslySetInnerHTML={{  __html:  content }} />
    </section>
  )
}

export default Skills
