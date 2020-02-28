import React from "react"


const MainAbout = ({ className, content }) => {
  return (

      <div className={className} dangerouslySetInnerHTML={{  __html: content }} />

  )
}

export default MainAbout
