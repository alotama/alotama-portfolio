import React from 'react'
import styles from '../../styles/components/button.module.scss'

const Button = ({ secondary, children }) => {
  
  let buttonBasic = [styles.button]

  if (secondary) {
    buttonBasic.push(styles.buttonSecondary)
  }

  const buttonClass = buttonBasic.join(' ');


  return (
    <button className={buttonClass}>
      {children}
    </button>
  )
}

export default Button
