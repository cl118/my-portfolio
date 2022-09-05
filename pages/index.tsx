import React, { useContext } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Solutions from '../components/Solutions'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { LightboxContext } from '../contexts/LightboxContext'
import { AiOutlineClose } from 'react-icons/ai'

const Home: NextPage = () => {
  const { showLightbox, setShowLightbox, lightboxContent } = useContext(LightboxContext)

  const handleClick = () => {
    setShowLightbox(false)
  }

  const lightbox = (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black/80'>
      <AiOutlineClose
        size={32}
        className='absolute text-gray-300 cursor-pointer right-4 top-20'
        onClick={handleClick}
      />
      <p>{lightboxContent}</p>
    </div>
  )

  return (
    <div className='bg-[#fdfdff]'>
      <Head>
        <title>Chris Le | Dev & Designer</title>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest'></link>
      </Head>
      <Navbar />
      <Hero />
      <Solutions />
      <Skills />
      {showLightbox === true ? lightbox : null}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
