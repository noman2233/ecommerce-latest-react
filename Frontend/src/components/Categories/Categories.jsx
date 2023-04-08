import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import "./Categories.css";

const Categories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await publicRequest.get(`/product/getallproducts`);
        setProducts(res.data);
      } catch (error) {
        console.log("Some error occured", error);
      }
    };
    fetchedData();
  }, []);

  return (
    <div className="categories">
      <div className="col">
        <div className="row1">
    
          <Link to={`/products/sale`}>
            <img
              src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="category_row1"
            />
            <button className="link">SALE</button>{" "}
          </Link>
        </div>
        <div className="row1">
    
          <Link to={`/products/women`}>
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="category_row1"
            />
            <button className="link">WOMEN</button>
          </Link>
        </div>
      </div>
      <div className="col2">
        <div className="row2">
    
          <Link to={`/products/new-season`}>
      
            <img
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="category_row2"
            />
            <button className="link">New Season</button>
          </Link>
        </div>
      </div>
      <div className="col3">
        <div className="main_row3">
          <div className="row3">
      
            <Link to={`/products/men`}>
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="category_row1"
              />
              <button className="link">MEN</button>
            </Link>
          </div>
          <div className="row3">
      
            <Link to={`/products/accessories`}>
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="category_row1"
              />
              <button className="link">ACCESSORIES</button>
            </Link>
          </div>
        </div>       <Link to={`/products/shoes`}>
        <div className="row3_large">
 

        
            <img
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="category_large"
              />
            <button className="link">SHOES</button>
      
           
        </div>    </Link>
      </div>
    </div>
  );
};

export default Categories;
