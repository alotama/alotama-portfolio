import React from "react"
import MenuList from "./MenuList"

const Menu = ({ ariaExpanded }) => {
  return (
    <div className={`navbar__content ${ariaExpanded ? "js-open" : ""}`}>
      <MenuList />
    </div>
  )
}

export default Menu
