import React, { useContext } from "react"
import { Link } from "gatsby"
import Clipboard from "react-clipboard.js"
import { HamburgerContext } from '../../utils/context/hamburgerContext'

const Menu = () => {
  const [state, setState] = useContext(HamburgerContext);

  function onSuccess(e) {
    const clipboardCard = document.querySelector(".clipboard__card")
    const clipboardContainer = document.querySelector(".clipboard__container")
  
    const showClipboard = () => {
      clipboardCard.classList.add("copied")
      clipboardContainer.classList.add("displated")
    }

    const hideClipboard = () => {
      clipboardCard.classList.remove("copied")
    }

    showClipboard()
    setTimeout(hideClipboard, 2000)
    e.clearSelection()
  }
  
  return (
    <div className={`navbar__content ${state ? 'js-open' : ''}`}>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/sobre-mi" onClick={() => setState(state => !state)}>Sobre mí</Link>
        </li>
        <li className="navbar__item">
          <Link to="/blog" onClick={() => setState(state => !state)}>Blog</Link>
        </li>
        <li className="navbar__item" id="contact">
          <a
            href="mailto:sebastian@alotama.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
        </li>
        <Clipboard
          className="navbar__item clipboard"
          data-clipboard-text="sebastian@alotama.com"
          onSuccess={onSuccess}
        >
          Contacto
        </Clipboard>
      </ul>
    </div>
  )
}

export default Menu
