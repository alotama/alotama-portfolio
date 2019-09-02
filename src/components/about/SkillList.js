import React from "react"
import aboutStlye from "../../assets/scss/sections/about.module.scss"

const ListItem = ({ content, index }) => {
  return (
    <li className={aboutStlye.skills__item} key={index}>
      {content}
    </li>
  )
}

const SkillContainer = ({ children }) => (
  <ul className={aboutStlye.skills__container}>{children}</ul>
)

const SkillList = ({ array, sliceStart }) => {
  return (
    <SkillContainer>
      {array.slice(sliceStart, (sliceStart + 4)).map((skills, index) => (
        <ListItem key={index} content={skills} />
      ))}
    </SkillContainer>
  )
}

export default SkillList
