import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Minting from './Minting/Minting'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Minting />
    </div>
  )
}
