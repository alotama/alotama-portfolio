import React from "react"
import Navbar from './Navbar';
import { Media } from "react-breakpoints"
import { HamburgerContextProvider } from '../../utils/context/hamburgerContext'

export default () => {
  return (
    <Media>
      {({ currentBreakpoint }) => {
        switch (currentBreakpoint) {
          case "mobile":
            return (
              <HamburgerContextProvider>
                <Navbar />
              </HamburgerContextProvider>
            )
            break;
          default:
            return <Navbar />
        }
      }}
    </Media>
  )
}