import React, { useState } from "react"
import { Link } from "gatsby"
import Brand from "./Brand"
import ClipboardMessage from "../assets/ClipboardMessage"
import Hamburger from "./Hamburger"
import Menu from "./Menu"
import { Media } from "react-breakpoints"
import './assets/navbar.scss'

export default () => {
  const [expanded, setExpanded] = useState(false)
  const [className, setclassName] = useState("")

  const openMenu = () => {
    expanded ? setExpanded(false) : setExpanded(true)
    setclassName("clicked")
  }

  return (
    <header id="header__container">
      <div className="master-container">
        <nav className="navbar__container">
          <section className="header__side--left">
            <div className="header__brand">
              <Link to="/">
                <Brand />
              </Link>
            </div>
          </section>
          <section className="header__side--right">
            {
              <Media>
                {({ currentBreakpoint }) => {
                  switch (currentBreakpoint) {
                    case "mobile":
                      return (
                        <Hamburger
                          ariaExpanded={expanded}
                          onClick={openMenu}
                          className={className}
                        />
                      )
                    case "tablet":
                      return (
                        <Hamburger
                          ariaExpanded={expanded}
                          onClick={openMenu}
                          className={className}
                        />
                      )
                    default:
                      return null
                  }
                }}
              </Media>
            }
            <Menu ariaExpanded={expanded} />
          </section>
        </nav>
      </div>
      <ClipboardMessage />
    </header>
  )
}