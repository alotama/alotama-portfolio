import React from 'react'
import Link from 'next/link'
import Logo from '../logo'
import styles from '../../styles/components/header.module.scss'
import { useMediaQuery } from 'react-responsive'


const Header = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 48rem)'
  })
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <section className={styles.header__wrapper}>
          <article className={styles.header_row}>
            <figure className={styles.header__logo}>
              <Link
                href={"/"}
              >
                <a>
                  <Logo />
                </a>
              </Link>
            </figure>
            {!isDesktop && (
              <div className={styles.headerLenguage}>
                ES
              </div>
            )}
          </article>
          <nav className={styles.header__navbar}>
            <Link
              href={'/sobre-mi'}
            >
              <a>
                Sobre mí
            </a>
            </Link>
            <Link
              href={'/proyectos'}
            >
              <a>
                Proyectos
            </a>
            </Link>
            <Link
              href={'/articulos'}
            >
              <a>
                Artículos
            </a>
            </Link>
            <Link
              href={'/contacto'}
            >
              <a>
                Contacto
            </a>
            </Link>
            {isDesktop && (
              <div className={styles.headerLenguage}>
                ES
              </div>
            )}
          </nav>
        </section>
      </div>
    </header>
  )
}

export default Header
