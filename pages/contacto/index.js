import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/button'
import styles from '../../styles/pages/contact.module.scss'
import { motion } from "framer-motion"
import { InView } from 'react-intersection-observer';

const ContactPage = () => {
  return (
    <Layout>
      <article className={styles.heroContact}>
        <InView triggerOnce={true}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className={styles.heroContact_container}>
              <h1 className={styles.heroContact_title}>Contacto</h1>
              <h2 className={styles.heroContact_subtitle}>Trabajemos juntos</h2>
            </motion.div>
          )}
        </InView>
        <section className={styles.contactSection}>
          <InView triggerOnce={true}>
            {({ ref, inView }) => (
              <motion.form
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.50 }}
                className={styles.contactForm}>
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
              </motion.form>
            )}
          </InView>
          <InView triggerOnce={true}>
            {({ ref, inView }) => (
              <motion.article
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className={styles.contactInfo}>
                <div className={styles.contactInfo_section}>
                  <h3 className={styles.contact_label}>Ubicación</h3>
                  <small>Buenos Aires, Argentina</small>
                </div>
                <div className={styles.contactInfo_section}>
                  <h3 className={styles.contact_label}>E-mail</h3>
                  <small>sebastian@alotama.com</small>
                </div>
              </motion.article>
            )}
          </InView>
        </section>
      </article>
    </Layout>
  )
}

export default ContactPage
