import React from "react"
import BodyContent from "../assets/BodyContent"
import Fade from "react-reveal/Fade"

const MainAbout = ({ className, content }) => {
  return (
    <article className="col-xs-12 col-lg-offset-2 col-lg-8">
      <Fade top distance="15px">
        <div className={className} dangerouslySetInnerHTML={{  __html: content }} />
      </Fade>
    </article>
  )
}

export default MainAbout
