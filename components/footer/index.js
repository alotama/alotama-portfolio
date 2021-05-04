import React from 'react'
import styles from '../../styles/components/footer.module.scss'
import { SocialLinks } from '../../utils'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <article>Copyright 2021</article>
        <ul className={styles.footer__socialLinks}>
          {SocialLinks.map((element, index) => (
            <li key={`${element.label}-${index}`}><a href={element.link}>{element.label}</a></li>
          ))}
          <li><a href={'mailto:sebastian@alotama.com'}>Email</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
