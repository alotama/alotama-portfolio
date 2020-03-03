import React, { createContext, useState } from 'react'

export const HamburgerContext = createContext([null, () => {}]);

export const HamburgerContextProvider = ({ children }) => {
  const [state, setState] = useState(false);
  return (
    <HamburgerContext.Provider value={[state, setState]}>
      {children}
    </HamburgerContext.Provider>
  )
}