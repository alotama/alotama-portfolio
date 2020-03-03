import React, { useContext, useState } from "react"
import { HamburgerContext } from '../../utils/context/hamburgerContext'

const Hamburger = () => {
  const [hambuergerClassName, setHamburgerClassName] = useState("");
  const [state, setState] = useContext(HamburgerContext);

  const openMenu = () => {
    setState(state => !state)
    setHamburgerClassName("clicked")
  }

  return (
    <button
      className={`navbar__hamburger ${hambuergerClassName}`}
      aria-label="menu"
      aria-expanded={state}
      onClick={() => openMenu()}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  )
}

export default Hamburger
