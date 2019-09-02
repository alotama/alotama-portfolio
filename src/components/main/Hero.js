import React from "react"
import { Title } from "../assets/Title"
import HeroText from "../assets/HeroText"
import Fade from "react-reveal/Fade"

const Hero = ({ title, text }) => {
  return (
    <div className="master-container">
      <div className="master-container-padding">
        <section className="hero__container">
          <article className="hero__content">
            <Fade ssrFadeout top distance="15px">
              <Title type="h1" title={title} />
            </Fade>
            <Fade ssrFadeout top distance="18px" delay={150}>
              <HeroText text={text} />
            </Fade>
          </article>
          <div className="hero__scroll">
            <div className="scroll__action" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
