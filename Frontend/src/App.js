import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/offer/Offer";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import SignUp from "./pages/signUp/SignUp";




const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>    
      <Route path="/product/:id" element={<Product/>}/>    
      <Route path="/products/:id" element={<Products/>}/>    
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
};
export default App;
