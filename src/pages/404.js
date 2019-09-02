import React, { useEffect } from "react"

import { Link } from "gatsby"
import Layout from "../template/Layout"
import SEO from "../components/SEO"

import style from "../assets/scss/sections/404.module.scss"

const NotFoundPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#D51224"
    return () => document.body.removeAttribute("style")
  }, [])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="master-container">
        <div className="master-container-padding">
          <section className="hero__container">
            <article className={style.hero__content}>
              <div className={style.hero__title}>
                <h1 className={style.error404}>404</h1>
                <h2>Oops! This is a mistake.</h2>
              </div>
              <div className="hero__subtitle">
                <p>
                  The link is broken.{" "}
                  <Link to="/" className={style.text__underline}>
                    Go to Home
                  </Link>{" "}
                  and see other projects I made.
                </p>
              </div>
            </article>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
