import Navbar from '@/Component/Navbar/Navbar'
// import style from '../styles/Service.module.css'

import stl from './Service.module.css'
import Head from 'next/head'
function service() {
  return (
    <div>
    <Head>
      <title>Service page</title>
    </Head>
          <Navbar/>
        <h1 className={stl.service}>This is Service page...!</h1>
    </div>
  )
}

export default service