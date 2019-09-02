import React from "react"

const Hamburger = ({ className, ariaExpanded, onClick }) => {
  return (
    <button
      className={`navbar__hamburger ${className}`}
      aria-label="menu"
      aria-expanded={ariaExpanded}
      onClick={onClick}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  )
}

Hamburger.defaultProps = {
  className: "",
}

export default Hamburger
