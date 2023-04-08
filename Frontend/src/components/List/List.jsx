import React, { useEffect, useState } from "react";
import "./List.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

const List = ({  filters, sort, cat }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/product/getallproducts?category=${cat}` : "/product/getallproducts"
        );
        console.log(res);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="list">
      {filteredProducts.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default List;
