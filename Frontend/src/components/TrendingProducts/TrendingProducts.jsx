import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { publicRequest } from '../../requestMethods'


const TrendingProducts = ({type}) => {
const [data, setData] = useState([])
console.log()
useEffect(() => {

  const fetchedData=async()=>{
    try {
    const res=await publicRequest.get("/product/getallproducts")
    setData(res.data.slice(8,12))
 
    
  } catch (error) {
    console.log("Some error occured",error)
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

export default TrendingProducts