import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/components/button.module.scss'

const Button = ({ secondary, children, href }) => {
  const router = useRouter()
  
  let buttonBasic = [styles.button]

  if (secondary) {
    buttonBasic.push(styles.buttonSecondary)
  }

  const buttonClass = buttonBasic.join(' ');


  return (
    <button className={buttonClass} onClick={() => href && router.push(href)}>
      {children}
    </button>
  )
}

export default Button
