import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import "./featuredProduct.css"
import { publicRequest } from '../../requestMethods'


const FeaturedProduct = ({type}) => {
const [data, setData] = useState([])

useEffect(() => {

  const fetchedData=async()=>{
    try {
    const res=await publicRequest.get("product/random")
    setData(res.data)


  } catch (error) {
    console.log(error)
  }
}
fetchedData()

}, [])


  return (
    <div className='featuredProduct'>
      <div className="top">
        <div className="featuredProduct_heading">
          <h2>{type} Products</h2>
        </div>
        <div className="featuredProduct_para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor delectus obcaecati recusandae, voluptate aliquam ipsam odio sapiente placeat explicabo, voluptas molestias officia nisi nulla veniam atque unde</p>
        </div>
      </div>
      <div className="featuredProduct_bottom">
        {
          data.map(item=>
            <Card item={item} key={item._id}/>
            
            )
        }
      </div>
    </div>
  )
}

export default FeaturedProduct