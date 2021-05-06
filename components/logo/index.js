import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/brand/logo.svg"
      alt="alotama."
      height={30}
      width={'100%'}
    />
  )
}

export default Logo
