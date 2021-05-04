import React from 'react'
import styles from '../../styles/components/button.module.scss'

const ButtonLink = React.forwardRef(({ onClick, href, secondary, children }, ref) => {
  let buttonBasic = [styles.button]

  if (secondary) {
    buttonBasic.push(styles.buttonSecondary)
  }

  const buttonClass = buttonBasic.join(' ');
  return (
    <a className={buttonClass} href={href} onClick={onClick} ref={ref}>
      {children}
    </a>
  )
})

export default ButtonLink;
