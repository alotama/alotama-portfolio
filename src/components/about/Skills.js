import React from "react"
import SkillList from "./SkillList"
import { Text } from "../assets/Title"
import Fade from "react-reveal/Fade"
import aboutStlye from "../../assets/scss/sections/about.module.scss"

const Skills = ({ content }) => {
  return (
    <section className={aboutStlye.skills__section}>
      <article className={aboutStlye.skills_content}>
        <Fade top distance="15px">
          <Text type="h6" title="Skills." />
        </Fade>
      </article>
      <div className={aboutStlye.skills_contentList} dangerouslySetInnerHTML={{  __html:  content }} />
    </section>
  )
}

export default Skills
