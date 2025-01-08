import { MapPin } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="flex text-white w-full px-6 py-5 border-b border-white justify-evenly fixed top-0 left-0 right-0">
        <div className=' flex items-center gap-x-1'>
            <MapPin />
            <h1>MapApp.</h1>
        </div>   
    <nav className="flex">
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Navbar
