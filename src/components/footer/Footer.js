import React from "react"

const Footer = () => {
  return (
    <footer id="footer__container">
      <div className="master-container">
        <div className="master-container-padding">
          <div className="row">
            <article className="col-xs-12 col-lg-6">
              <p> Copyright {new Date().getFullYear()} </p>
            </article>
            <article className="col-xs-12 col-lg-6 end-lg">
              <p>
                Email me:{" "}
                <a
                  href="mailto:sebastian@alotama.com"
                  className="text--underline"
                >
                  sebastian@alotama.com
                </a>
              </p>
            </article>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
