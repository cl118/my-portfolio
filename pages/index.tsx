import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Solutions from '../components/Solutions'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'

const Home: NextPage = () => {
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
      <Portfolio />
      <main className=''></main>
    </div>
  )
}

export default Home
