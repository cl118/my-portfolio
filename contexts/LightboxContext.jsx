import { createContext, useState } from 'react'

export const LightboxContext = createContext()

const LightboxContextProvider = ({ children }) => {
  // State
  const [showLightbox, setShowLightbox] = useState(false)
  const [lightboxContent, setLightboxContent] = useState('')
  const [lightboxContentType, setLightboxContentType] = useState('')
  const [aspectRatio, setAspectRatio] = useState('')
  const [altText, setAltText] = useState('')

  // Post context data
  const lightboxContextData = {
    showLightbox,
    setShowLightbox,
    lightboxContent,
    setLightboxContent,
    lightboxContentType,
    setLightboxContentType,
    aspectRatio,
    setAspectRatio,
    altText,
    setAltText,
  }

  return <LightboxContext.Provider value={lightboxContextData}>{children}</LightboxContext.Provider>
}

export default LightboxContextProvider
