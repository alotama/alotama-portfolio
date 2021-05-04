import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/brand/logo.svg"
      alt="alotama."
      height={24}
      width={'100%'}
    />
  )
}

export default Logo
