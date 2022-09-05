import { createContext, useState } from 'react'

export const LightboxContext = createContext()

const LightboxContextProvider = ({ children }) => {
  // State
  const [showLightbox, setShowLightbox] = useState(false)
  const [lightboxContent, setLightboxContent] = useState('')

  // Post context data
  const lightboxContextData = {
    showLightbox,
    setShowLightbox,
    lightboxContent,
    setLightboxContent,
  }

  return <LightboxContext.Provider value={lightboxContextData}>{children}</LightboxContext.Provider>
}

export default LightboxContextProvider
