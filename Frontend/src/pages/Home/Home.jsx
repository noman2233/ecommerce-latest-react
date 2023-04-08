import React from "react";
import FeaturedProduct from "../../components/Featured/FeaturedProduct";
import Slider from "../../components/Slider/Slider";
import Mail from "../../components/mail/Mail";
import "./home.css";
import Categories from "../../components/Categories/Categories";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProduct type="featured" />
      <Categories />
      <TrendingProducts type="trending"   />
      <Mail />
    </div>
  );
};

export default Home;
