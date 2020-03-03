/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import loadable from '@loadable/component'
import "../assets/styles/scss/general.scss"

const Navbar = loadable(() => import(`../components/navbar`));
const Footer = loadable(() => import(`../components/footer/Footer`));

import ReactBreakpoints from "react-breakpoints"

const breakpoints = {
  mobile: 320,
  desktop: 1200,
}

const Layout = ({ children }) => {

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    })
  }, [])

  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <Navbar />
        <div className="page_wrapper">{children}</div>
      <Footer />
    </ReactBreakpoints>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
