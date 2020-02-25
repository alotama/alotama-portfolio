import React from "react"
import Fade from "react-reveal/Fade"

const MainAbout = ({ className, content }) => {
  return (
    <Fade top distance="15px">
      <div className={className} dangerouslySetInnerHTML={{  __html: content }} />
    </Fade>
  )
}

export default MainAbout
