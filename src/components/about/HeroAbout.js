import React from "react"
import { Text } from "../assets/Title"

const HeroAbout = ({ title, subtitle, content }) => {
  return (
    <div className="master-container">
      <div className="master-container-padding">
        <section className="hero__container">
          <article className={"hero__content"}>
            <div className={"hero__title"}>
            
                <Text type="h1" title={title} />
                <h2 className="font--light color-red">{subtitle}</h2>
            
            </div>
            <div className={"hero__subtitle"}>
            
                <div dangerouslySetInnerHTML={{  __html: content }} />
          
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
