import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/button'
import styles from '../../styles/pages/contact.module.scss'

const ContactPage = () => {
  return (
    <Layout>
      <article className={styles.heroContact}>
        <div className={styles.heroContact_container}>
          <h1 className={styles.heroContact_title}>Contacto</h1>
          <h2 className={styles.heroContact_subtitle}>Desarrollo Front-End</h2>
        </div>
        <section className={styles.contactSection}>
          <form className={styles.contactForm}>
            <div className={styles.contactName}>
              <label className={styles.contact_label}>Nombre</label>
              <input className={styles.contact_input} type="text" />
            </div>
            <div className={styles.contactEmail}>
              <label className={styles.contact_label}>E-mail</label>
              <input className={styles.contact_input} type="text" />
            </div>
            <div className={styles.contactMessege}>
              <label className={styles.contact_label}>Mensaje</label>
              <textarea
                id="w3review"
                name="w3review"
                rows="5"
                className={styles.contact_textarea}
              />
            </div>
            <div className={styles.contact_buttonContainer}>
              <Button>Enviar</Button>
            </div>
          </form>
          <article className={styles.contactInfo}>
            <div className={styles.contactInfo_section}>
              <h3 className={styles.contact_label}>Ubicación</h3>
              <small>Buenos Aires, Argentina</small>
            </div>
            <div className={styles.contactInfo_section}>
              <h3 className={styles.contact_label}>E-mail</h3>
              <small>sebastian@alotama.com</small>
            </div>
          </article>
        </section>
      </article>
    </Layout>
  )
}

export default ContactPage
