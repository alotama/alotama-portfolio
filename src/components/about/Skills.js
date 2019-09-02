import React from "react"
import SkillList from "./SkillList"
import { Text } from "../assets/Title"
import Fade from "react-reveal/Fade"
import aboutStlye from "../../assets/scss/sections/about.module.scss"

const Skills = ({ array }) => {
  const newArray = []

  var i
  for (i = 0; i < Math.ceil(array.length / 4); i++) {
    newArray.push(
      <Fade top distance="15px" delay={250 * i} key={i}>
        <SkillList array={array} sliceStart={i * 4} />
      </Fade>
    )
  }

  return (
    <section className={aboutStlye.skills__section}>
      <article className={aboutStlye.skills_content}>
        <Fade top distance="15px">
          <Text type="h6" title="Skills." />
        </Fade>
      </article>
      {newArray}
    </section>
  )
}

export default Skills
