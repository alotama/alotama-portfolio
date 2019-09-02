import React from "react"
import { Text } from "../assets/Title"
import BodyContent from "../assets/BodyContent"
import aboutStlye from "../../assets/scss/sections/about.module.scss"
import Fade from "react-reveal/Fade"

const HeroAbout = ({ title, subtitle, content }) => {
  return (
    <div className="master-container">
      <div className="master-container-padding">
        <section className="hero__container">
          <article className={aboutStlye.hero__content}>
            <div className={aboutStlye.hero__title}>
              <Fade top distance="15px">
                <Text type="h1" title={title} />
                <h2 className="font--light color-red">{subtitle}</h2>
              </Fade>
            </div>
            <div className={aboutStlye.hero__subtitle}>
              <Fade top distance="15px" delay={150}>
                <BodyContent blocks={content} />
              </Fade>
            </div>
          </article>
          <div className="hero__scroll">
            <div className="scroll__action" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default HeroAbout
