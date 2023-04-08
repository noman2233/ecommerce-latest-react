import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./products.css";

const Products = () => {

  const [sort, setSort] = useState("newest");
  const [price, setPrice] = useState(100000);
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <div className="products">
      <div className="left">
        <div className="products_categories">
          <h5 className="products_categories_heading">Product Categories</h5>
          <div className="inputItem">
            <input type="checkbox" name="1" value={1} className="inputItem" />
            <label htmlFor="1">Hats</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} className="inputItem" />
            <label htmlFor="2">Shirts</label>
          </div>
        </div>
        <div className="products_price">
          <h5 className="filter_price_heading">Filter by price</h5>
          <div className="inputitem">
            <span>0</span>
            <input
              type="range"
              min={1}
              max={10000}
              onChange={(e) => setPrice(e.target.value)}
              className="inputItem"
            />
            <span>{price}</span>
          </div>
        </div>
        <div className="products_sort">
          <div className="sort_heading">
            <h5 className="sort_heading">Sort by</h5>
            <div className="inputitem" >
              <input
                type="radio"
                name="price"
                id="asc"
                value="asc"
                onChange={(e)=>setSort(e.target.value)}
                className="inputItem"
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputitem">
              <input
                type="radio"
                name="price"
                id="desc"
                value="desc"
                onChange={(e)=>setSort(e.target.value)}
                className="inputItem"
              />
              <label htmlFor="desc">Price (Higest first)</label>
            </div>
            <div className="inputitem">
              <input
                type="radio"
                name="price"
                id="desc"
                value="desc"
                onChange={(e)=>setSort(e.target.value)}
                className="inputItem"
              />
              <label htmlFor="desc">Newest Products</label>
            </div>
          </div>
        </div>
        <div className="product_color">
          <h5 className="sort_heading">Select Color and Size</h5>
          <select name="color" onChange={handleFilter}>
            <option>red</option>
            <option>yellow</option>
            <option>blue</option>
            <option>pink</option>
            <option>orange</option>
            <option>green</option>
          </select>
          <select name="size" onChange={handleFilter}>
            <option>small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
          </select>
        </div>
      </div>
      <div className="right">
        <div className="category_image">
          <h3 className="category_products">Category Products</h3>
          <img
            className="catImg"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
        <div className="product_list">
          <List cat={cat} filters={filters}  sort={sort} />
        </div>
      </div>
    </div>
  );
};

export default Products;
