import React from "react"

const Footer = () => {
  return (
    <footer className='master-container'>
      <div className="footer">
        <article className="footer__copyright">
          <p> Copyright {new Date().getFullYear()} </p>
        </article>
        <article className="footer__contact">
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
    </footer>
  )
}

export default Footer
