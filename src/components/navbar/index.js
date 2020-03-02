import React, {useContext} from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import ClipboardMessage from "../assets/ClipboardMessage"
import { HamburgerContextProvider } from '../../utils/context/hamburgerContext'
import Hamburger from "./Hamburger"
import Menu from "./Menu"
import { Media } from "react-breakpoints"
import './assets/navbar.scss'

export default () => {

  return (
    <HamburgerContextProvider>
      <header id="header__container">
        <div className="master-container">
          <nav className="navbar__container">
            <section className="header__side--left">
              <div className="header__brand">
                <Link to="/">
                  <Logo />
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
                          <Hamburger />
                        )
                        break;
                      default:
                        return null
                    }
                  }}
                </Media>
              }
              <Menu />
            </section>
          </nav>
        </div>
        <ClipboardMessage />
      </header>
    </HamburgerContextProvider>
  )
}