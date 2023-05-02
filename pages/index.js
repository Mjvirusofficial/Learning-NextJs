import Navbar from '@/Component/Navbar/Navbar'
import axios from 'axios';
import Head from 'next/head'
import Link from 'next/link';

export async function getStaticProps() {
  try {
    const { data } = await axios.get('https://dummyjson.com/products')
    return {
      props: {
        user: data.products
      }
    }
  } catch (e) {

  }
}


function home({ user }) {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <Navbar />
      <h1 style={{ alignItems: 'center' }}>Welocome to my first next-app</h1>
      {
        user.map((i) => {
          return <>
            <Link href={`/${i.id}`}><img src={i.thumbnail} alt={i.title} /></Link>
            <h1>{i.title}</h1>
          </>
        })
      }
    </div>
  )
}

export default home