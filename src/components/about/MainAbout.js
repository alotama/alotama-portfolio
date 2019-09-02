import React from "react"
import BodyContent from "../assets/BodyContent"
import Fade from "react-reveal/Fade"

const MainAbout = ({ content }) => {
  return (
    <article className="col-xs-12 col-lg-offset-2 col-lg-8">
      <Fade top distance="15px">
        <BodyContent blocks={content} />
      </Fade>
    </article>
  )
}

export default MainAbout
