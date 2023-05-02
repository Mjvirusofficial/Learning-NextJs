import axios from 'axios'
import React from 'react'

export async function getServerSideProps(context){
  try {
    const { data } = await axios.get('https://dummyjson.com/products/'+context.query.id)
    console.log(data)

    return {
      props : {
        data
      }
    }
  } catch (e) {
    console.log(e)
  }

}



function id({data}) {
  return (
    <div>
      <h1>User detail pages:- </h1>
      <img src={data.thumbnail} alt={data.title} />
      <h2>{data.title}</h2>
      <h3>{data.description}</h3>
      <h3>{data.price}</h3>
      <h3>{data.discountPercentage}</h3>
      <h3>{data.rating}</h3>
      <h3>{data.stock}</h3>
      <h3>{data.brand}</h3>
      <h3>{data.category}</h3>
{
  data.images.map(i =>{
    return <>
      <img src={i}/>
    </>
  })
}

    </div>
  )
}

export default id