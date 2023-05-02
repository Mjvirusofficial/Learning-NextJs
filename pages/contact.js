import Navbar from '@/Component/Navbar/Navbar'
import Head from 'next/head'
import React from 'react'

function home() {
  return (
    <div>
    <Head>
      <title>Contact page</title>
    </Head>
          <Navbar/>

        <h1>This is Contact page...!</h1>
    </div>
  )
}

export default home