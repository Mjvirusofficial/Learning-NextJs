import React from 'react'
import Link from "next/link"
import s from './Navbar.module.css'

function Navbar() {
  return (
    <>
          <div className={s.box}>
        <Link href='/'>
          <h1>Home</h1>
        </Link>

        <Link href='/service'>
          <h1>Service</h1>
        </Link>

        <Link href='/about'>
          <h1>About Us</h1>
        </Link>

        <Link href='/contact'>
          <h1>Contact Us</h1>
        </Link>
      </div>
    </>
  )
}

export default Navbar