import React from 'react'
import Link from 'next/link'
import Logo from '../logo'
import styles from '../../styles/components/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <section className={styles.header__wrapper}>
          <figure className={styles.header__logo}>
            <Link
              href={"/"}
            >
              <a>
                <Logo />
              </a>
            </Link>
          </figure>
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
            <div className={styles.headerLenguage}>
              ES
          </div>
          </nav>
        </section>
      </div>
    </header>
  )
}

export default Header
