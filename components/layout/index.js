import Header from '../header'
import Footer from '../footer'
import styles from '../../styles/components/layout.module.scss'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className={styles.master_container}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
