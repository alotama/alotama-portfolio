import React from "react"
import { Title } from "../assets/Title"
import HeroText from "../assets/HeroText"

const Hero = ({ title, text }) => {
  return (
    <div className="master-container">
      <div className="master-container-padding">
        <section className="hero__container">
          <article className="hero__content">

            <Title type="h1" title={title} />


            <HeroText text={text} />

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
