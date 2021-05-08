import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'
import styles from '../../styles/components/layout.module.scss'

export const LayoutProject = ({ children }) => (
  <>
    <Head>
      <title>alotama - Sebastián Tamashiro</title>
      <meta name="robots" content="noindex" />
    </Head>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>alotama - Sebastián Tamashiro</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Header />
      <main className={styles.master_container}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
